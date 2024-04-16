/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import { useContext, useEffect, useState } from 'react'

// ** Next Imports
import Router from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { DataGrid } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/can'

// ** API Imports
import { translateComponentList, translateComponentRemove, updateComponent, addComponent } from '@api/translate'

// ** Third Party Imports
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'

// ** Custom Components Imports
import FallbackSpinner from '@components/spinner'
import Error500 from '@pages/500'

// ** Custom Functions
import { capitalizeText } from '@functions/capitalize-text'

// ** Constants Imports
import { routes } from '@routes'
import { strings } from '@strings'

// ** Components Imports
import { editTranslateBreadCrumb } from '@breadcrumbs/index'
import BreadcrumbComponent from '@components/bread-crumb'
import DeleteDialog from '@components/dialogs/delete-dialog'
import ActionMenu from '@components/menu-item'
import UploadJsonDialog from '@components/dialogs/upload-json'
import TranslateUpdateDialog from '@components/dialogs/edit-translate'

// ** Styles Imports
import * as styles from '@styles-page/translate/styles'

const escapeRegExp = value => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const RowOptions = ({ id, data, language, abilities, refetch, lang_id }) => {
  // ** Hooks
  const { t } = useTranslation()

  // ** State
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const obj = {
    languageId: lang_id,
    componentId: data?.u_id
  }

  const dataEncode = JSON.stringify(obj)
  const encoded = btoa(dataEncode)

  const handleRowOptionsClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = async () => {
    setOpen(true)
    setAnchorEl(null)
  }

  const handleEdit = async () => {
    setOpenEdit(true)
    setAnchorEl(null)
  }

  // ** Component delete function
  const handleConfirmDelete = async () => {
    await translateComponentRemove(id).then(res => {
      if (res?.status) {
        setOpen(false)
        handleRowOptionsClose()
        refetch()
      }
    })
  }

  const updateTranslateType = async body => {
    if (id) {
      const viewId = data?.u_id

      await updateComponent({ viewId, body }).then(res => {
        if (res?.status) {
          refetch()
          setAnchorEl(null)
        }
      })
    }
  }

  const options = [
    language?.shortcut === 'en' && {
      icon: 'mdi:edit-outline',
      title: t('Edit'),
      key: 'update',
      id: 'edit-button',
      icon: 'mdi:edit-outline',
      ability: abilities.can('update', 'language-translate-management'),
      title: t('Edit'),
      onClick: () => {
        handleEdit()
      }
    },
    language?.shortcut === 'en' && {
      icon: 'mdi:delete-outline',
      title: t('Delete'),
      key: 'delete',
      id: 'delete-button',
      ability: abilities.can('delete', 'language-translate-management'),
      onClick: () => {
        handleDelete()
      },
      icon: 'mdi:delete-outline',
      title: t('Delete')
    },
    {
      type: 'menuItem',
      key: 'view',
      id: 'view-button',
      ability: abilities.can('update', 'language-translate-management'),
      onClick: () => {
        Router.push(routes.viewComponentList + `/${encoded}`)

        handleRowOptionsClose()
      },
      icon: 'humbleicons:view-list',
      title: t('View')
    }
  ]

  return (
    <>
      <IconButton
        aria-label='more'
        id={'long-menu'}
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleRowOptionsClick}
      >
        <Icon icon='mdi:dots-vertical' />
      </IconButton>
      <ActionMenu
        anchorElement={anchorEl}
        setAnchorElement={setAnchorEl}
        options={options?.filter(i => i.ability)}
        key={anchorEl}
      />

      <DeleteDialog
        title={`${t('deleteTranslateModuleTitle')} : @${data?.key}`}
        confirmText={t('deleteTranslateModuleTitle')}
        open={open}
        setOpen={setOpen}
        onConfirm={handleConfirmDelete}
      />

      <TranslateUpdateDialog
        open={openEdit}
        setOpen={setOpenEdit}
        data={capitalizeText(data?.key) ?? ''}
        title={`${t('translateUpdateTypeText')} : @${capitalizeText(data?.key)}`}
        onConfirm={body => {
          updateTranslateType(body)
        }}
      />
    </>
  )
}

const TranslateComponentList = ({ id }) => {
  // ** Hooks
  const { t } = useTranslation()
  const ability = useContext(AbilityContext)

  // ** States
  const [open, setOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [innerLoading, setInnerLoading] = useState(true)

  // ** sms template call list function
  const { isLoading, isError, data, isFetched, refetch } = useQuery(
    'translate',
    () => {
      return translateComponentList({ id }).then(res => {
        setInnerLoading(false)

        return res
      })
    },
    { retry: false }
  )

  // ** When no data found
  const NoRowsOverlay = () => {
    return (
      <Stack height='100%' alignItems='center' justifyContent='center' textTransform={'capitalize'}>
        {t('noDataFound')}
      </Stack>
    )
  }

  // ** Json file upload function
  const handleUploadExcel = async data => {
    await addComponent(data).then(res => {
      if (res?.status) {
        refetch()
        setOpen(false)
      }
    })
  }

  // ** Search Function
  const handleSearch = searchValue => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')

    const filteredRows = data?.list.filter(row => {
      return Object.keys(row).some(field => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    } else {
      setFilteredData([])
    }
  }

  const columns = [
    {
      flex: 0.12,
      minWidth: 150,
      field: 'module',
      headerName: t('translateLanguageModuleHeader'),
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={styles.listTypographyStyle()}>
            {row?.key || '-'}
          </Typography>
        )
      }
    },
    {
      flex: 0.12,
      minWidth: 150,
      field: 'type',
      headerName: t('translateLanguageTypeHeader'),
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={styles.listTypographyStyle()}>
            {row?.type || '-'}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 200,
      field: 'progress',
      headerName: t('translateProgressHeader'),
      renderCell: ({ row }) => {
        const percentage = (row?.done / row?.total) * 100

        return (
          <Box sx={styles.progressBoxStyle()}>
            <Box sx={styles.linearProgressBoxStyle()}>
              <LinearProgress
                variant='determinate'
                color={percentage >= 50 ? (percentage >= 100 ? 'success' : 'warning') : 'error'}
                value={percentage ? percentage : 0}
              />
            </Box>
            <Box sx={styles.progressTypographyStyle()}>
              <Typography
                variant='body2'
                color={'text.secondary'}
              >{`${Math.round(percentage ? percentage : 0)}%`}</Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: 'done',
      headerName: t('translateDoneHeader'),
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={styles.listTypographyStyle()}>
            {row?.done || '0'}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: 'total',
      headerName: t('translateTotalHeader'),
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={styles.listTypographyStyle()}>
            {row?.total || '0'}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      field: 'actions',
      headerName: t(strings.actionsLabel),
      renderCell: ({ row }) => (
        <RowOptions
          id={row.u_id}
          lang_id={id}
          data={row}
          language={data?.data}
          toggleAddUserDrawer={e => toggleAddUserDrawer(e)}
          abilities={ability}
          refetch={refetch}
        />
      )
    }
  ]

  useEffect(() => {
    refetch()
  }, [id])

  if (isLoading) return <FallbackSpinner sx={styles.spinnerHeight()} />
  if (isError) return <Error500 />
  if (isFetched)
    return (
      <>
        <BreadcrumbComponent data={editTranslateBreadCrumb(capitalizeText(data?.data?.name), id)} />
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              {data?.data?.shortcut === 'en' && (
                <CardHeader
                  action={
                    <>
                      <Box sx={styles.cardHeaderMainBox()}>
                        <Box sx={styles.cardHeaderBox()}>
                          <TextField
                            size='small'
                            value={searchText}
                            autoComplete='off'
                            onChange={event => handleSearch(event.target.value)}
                            id='search-cities'
                            placeholder={t('Search')}
                            InputProps={{
                              endAdornment: (
                                <IconButton
                                  size='small'
                                  title='Clear'
                                  aria-label='Clear'
                                  onMouseDown={() => setSearchText('')}
                                >
                                  <Icon icon='mdi:close' fontSize={20} />
                                </IconButton>
                              )
                            }}
                          />

                          {ability.can('add', 'language-translate-management') && (
                            <Button
                              onClick={() => {
                                setOpen(true)
                              }}
                              sx={styles.buttonStyle()}
                              id='add-button'
                              variant='contained'
                            >
                              {t('addModuleButton')}
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </>
                  }
                />
              )}
              <DataGrid
                autoHeight
                rows={searchText?.length ? (filteredData?.length ? filteredData : []) : data?.list ?? []}
                getRowId={e => e.u_id}
                columns={columns}
                disableRowSelectionOnClick
                hideFooter
                hideFooterPagination
                hideFooterSelectedRowCount
                slots={{ noRowsOverlay: NoRowsOverlay }}
                sx={styles.dataGridStyle()}
                paginationMode='server'
                loading={innerLoading}
              />

              <UploadJsonDialog
                open={open}
                setOpen={setOpen}
                jsonPath={'/images/json/example-file.json'}
                languageId={data?.data?.u_id}
                onConfirm={handleUploadExcel}
              />
            </Card>
          </Grid>
        </Grid>
      </>
    )
}

TranslateComponentList.acl = {
  action: 'read',
  subject: 'language-translate-management'
}

export default TranslateComponentList
