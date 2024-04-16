/* eslint-disable react-hooks/exhaustive-deps */
// ** React import
import { useContext, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Mui Import
import { FormControl, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Icon Imports
import { Icon } from '@iconify/react'

// ** i18 Imports
import { useTranslation } from 'react-i18next'

// ** Custom Components
import BreadcrumbComponent from '@components/bread-crumb'
import FallbackSpinner from '@components/spinner'
import SidebarAddModuleValue from './add-module-value'
import { capitalizeText } from '@functions/capitalize-text'
import { translateViewBreadCrumb } from '@breadcrumbs/index'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/can'

// ** Api import
import { translateLanguageComponentList, updateComponentKeys } from '@api/translate'

// ** style import
import * as styles from '@styles-page/translate/styles'

const TranslateView = viewId => {
  // ** Vars
  const { t } = useTranslation()
  const ability = useContext(AbilityContext)
  const router = useRouter()

  // ** Vars
  const path = router.asPath.split('/')
  const title = path[3]
  const dataE = atob(title)
  const updatedStr = JSON.parse(dataE)

  const {
    control,
    formState: {}
  } = useForm({
    defaultValues: {}
  })

  // ** States
  const [updateData, setUpdateData] = useState([])
  const [deleteKeys, setDeleteKeys] = useState([])
  const [reCallApi, setReCallApi] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])

  // ** custom refetch function
  const refetch = () => {
    setReCallApi(Math.floor(Math.random() * 20).toString())
  }

  const NoRowsOverlay = () => {
    return (
      <Stack height='100%' alignItems='center' justifyContent='center' textTransform={'capitalize'}>
        {t('noDataFoundMsg')}
      </Stack>
    )
  }

  // ** fetch language api
  // const { data, isLoading, isFetched, refetch } = useQuery(
  //   'translate-component',
  //   () => {
  //     return translateLanguageComponentList({
  //       languageId: updatedStr?.languageId,
  //       componentId: updatedStr?.componentId
  //     })
  //   },
  //   { retry: false, staleTime: Infinity }
  // )

  // ** translate list function
  const translateViewList = async () => {
    await translateLanguageComponentList({
      languageId: updatedStr?.languageId,
      componentId: updatedStr?.componentId
    }).then(res => {
      if (res) {
        setData(res)
      }
    })
    setIsLoading(false)
  }

  // ** state

  const handleChangeData = (key, value) => {
    const existingIndex = updateData.findIndex(item => item.key === key)

    if (existingIndex !== -1) {
      const updatedUpdateData = [...updateData]
      updatedUpdateData[existingIndex] = { key, value }
      setUpdateData(updatedUpdateData)
    } else {
      setUpdateData(prevData => [...prevData, { key, value }])
    }
  }

  const handleDeleteKey = key => {
    const isKeySelected = deleteKeys.some(item => item.key === key)

    if (isKeySelected) {
      setDeleteKeys(prevDeleteKeys => prevDeleteKeys.filter(item => item.key !== key))
    } else {
      setDeleteKeys(prevDeleteKeys => [...prevDeleteKeys, { key }])
    }
  }

  const handleSaveTransaction = async () => {
    if (updateData?.length || deleteKeys?.length) {
      const body = {
        update_data: updateData,
        language_u_id: updatedStr?.languageId,
        component_u_id: updatedStr?.componentId
      }

      const bodyEn = {
        update_data: updateData,
        delete_key: deleteKeys,
        language_u_id: updatedStr?.languageId,
        component_u_id: updatedStr?.componentId
      }

      await updateComponentKeys(data?.data?.language?.shortcut === 'en' ? bodyEn : body)?.then(res => {
        if (res?.status === true) {
          refetch()
          setUpdateData([])
          setDeleteKeys([])
        }
      })
    }
  }

  const toggleAddUserDrawer = () => {
    setOpen(!open)
  }

  const columns = [
    {
      flex: 0.15,
      minWidth: 100,
      field: 'key',
      headerName: t('translateKeyTitle'),
      renderCell: ({ row }) => {
        return (
          <Tooltip title={row?.value} placement='bottom'>
            <Typography sx={styles.viewTypographyBlack()}>{row?.value}</Typography>
          </Tooltip>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 100,
      field: 'value',
      headerName: t('translateValueTitle'),
      renderCell: ({ row }) => {
        return (
          <>
            <FormControl fullWidth sx={styles.textFieldDiv()}>
              <Controller
                name={'value'}
                control={control}
                render={({ field: {} }) => (
                  <TextField
                    id={`translate-text-icon`}
                    defaultValue={row?.language_data?.value}
                    onChange={e => handleChangeData(row.key, e.target.value)}
                    placeholder={row.value}
                  />
                )}
              />
            </FormControl>
            {data?.data?.language?.shortcut === 'en' && (
              <Box sx={styles.deleteIconBox()} onMouseDown={() => handleDeleteKey(row.key)}>
                {deleteKeys.some(item => item.key === row.key) ? (
                  <Icon
                    icon={'solar:undo-left-square-outline'}
                    id='translate-delete-icon'
                    style={styles.deleteIcon()}
                  />
                ) : (
                  <Icon icon={'mdi:delete'} id='translate-undo-icon' style={styles.deleteIcon()} />
                )}
              </Box>
            )}
          </>
        )
      }
    }
  ]

  useEffect(() => {
    translateViewList()
  }, [reCallApi])

  if (isLoading) return <FallbackSpinner sx={styles.spinner()} />

  return (
    <>
      <BreadcrumbComponent
        data={translateViewBreadCrumb(
          capitalizeText(data?.data?.language?.name),
          capitalizeText(data?.data?.component?.key),
          data?.data?.language?.u_id,
          viewId?.viewId
        )}
      />
      <Card>
        <CardHeader
          action={
            <>
              <Box sx={styles.cardHeaderMainBox()}>
                <Box sx={styles.cardHeaderBox()}>
                  {ability.can('add', 'language-translate-management') && data?.data?.language?.shortcut === 'en' && (
                    <Button
                      onClick={() => {
                        setOpen(true)
                      }}
                      sx={styles.buttonStyle()}
                      id='add-value-button'
                      data-testid='add-value-button'
                      variant='outlined'
                    >
                      {t('addValueButton')}
                    </Button>
                  )}

                  {ability.can('add', 'language-translate-management') && (
                    <Button
                      onClick={() => {
                        handleSaveTransaction()
                      }}
                      sx={styles.buttonStyle()}
                      id='save-translate-button'
                      data-testid='save-translate-button'
                      variant='contained'
                    >
                      {t('translateSaveButton')}
                    </Button>
                  )}
                </Box>
              </Box>
            </>
          }
        />

        <SidebarAddModuleValue
          open={open}
          toggle={toggleAddUserDrawer}
          title={`${t('translateAddTypeText')} ${capitalizeText(data?.data?.component?.key) ?? t('englishTitle')}`}
          languageId={data?.data?.language?.u_id}
          componentId={data?.data?.component?.u_id}
          refetch={refetch}
        />

        <DataGrid
          hideFooter
          rowHeight={80}
          autoHeight
          columns={columns}
          slots={{ noRowsOverlay: data?.list?.language_data && NoRowsOverlay }}
          getRowId={row => row.u_id}
          pageSizeOptions={[10, 25, 50, 100]}
          disableRowSelectionOnClick
          rows={data?.list || []}
          paginationMode='server'
        />
      </Card>
    </>
  )
}

TranslateView.acl = {
  subject: 'language-translate-management',
  action: 'read'
}

export default TranslateView
