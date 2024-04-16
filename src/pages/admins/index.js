// ** react import
import { useCallback, useContext, useEffect, useState } from 'react'

// ** Mui Import
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'

import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** store import
import { deleteAdmins, fetchAdminsList, updateAdminsPassword, updateAdminsStatus } from '@api/admins'
import { roleList } from '@api/role'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/can'

// ** Constant Strings And routes
import { strings } from '@strings'

// ** Custom Components
import { adminsBreadCrumb } from '@breadcrumbs/index'
import SidebarAddUser from '@components/admins/add-user-drawer'
import BreadcrumbComponent from '@components/bread-crumb'
import DeleteDialog from '@components/dialogs/delete-dialog'
import ResetPasswordDialog from '@components/dialogs/reset-password'
import ActionMenu from '@components/menu-item'
import FallbackSpinner from '@components/spinner'
import { capitalizeText } from '@functions/capitalize-text'

// ** Third Party Components
import _ from 'lodash'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'

// ** style import
import * as styles from '@styles-page/admins/styles'

const RowOptions = ({ id, data, reCallApi, setTitle, toggleAddUserDrawer, abilities }) => {
  // ** Hooks
  const { t } = useTranslation()

  // ** state
  const [anchorEl, setAnchorEl] = useState(null)

  const [open, setOpen] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDeleteAdmin = async () => {
    await deleteAdmins(id).then(res => {
      if (res?.status) {
        reCallApi(data.u_id)
        setOpen(false)
        setAnchorEl(null)
      }
    })
  }

  const updatePassword = async body => {
    if (id) {
      await updateAdminsPassword({ viewId: id, body })?.then(res => {
        if (res?.status) {
          reCallApi(data.u_id)
          setAnchorEl(null)
          setOpenDialog(false)
        }
      })
    }
  }

  const options = [
    {
      icon: 'mdi:eye-outline',
      title: t(strings.View),
      ability: abilities?.can('view', 'admin-management'),
      id: 'view-button',
      iconSize: '1.4rem',
      onClick: () => {
        toggleAddUserDrawer(data)
        setTitle('view')
        setAnchorEl(null)
      }
    },
    {
      icon: 'mdi:pencil-outline',
      title: t(strings.Edit),
      id: 'edit-button',
      ability: data?.u_id === 'ADM1000000001' ? false : abilities?.can('update', 'admin-management'),
      onClick: () => {
        setTitle('edit')
        toggleAddUserDrawer(data)
        setAnchorEl(null)
      }
    },
    {
      icon: 'mdi:delete-outline',
      title: t(strings.Delete),
      id: 'delete-button',
      ability: data?.u_id === 'ADM1000000001' ? false : abilities?.can('delete', 'admin-management'),
      onClick: () => {
        setOpen(true)
        setAnchorEl(null)
      }
    },
    {
      icon: 'material-symbols:password',
      title: t(strings.userChangePasswordTitle),
      id: 'reset-pw-button',
      ability: data?.u_id === 'ADM1000000001' ? false : abilities?.can('update', 'admin-management'),
      onClick: () => {
        setOpenDialog(true)
        setAnchorEl(null)
      }
    }
  ]

  return (
    <>
      <div>
        <IconButton
          aria-label='more'
          id={'long-menu'}
          aria-controls='long-menu'
          aria-haspopup='true'
          data-testid={`row-option-${data.u_id}`}
          onClick={handleClick}
        >
          <Icon icon='mdi:dots-vertical' />
        </IconButton>
        <ActionMenu
          anchorElement={anchorEl}
          setAnchorElement={setAnchorEl}
          data_testid={data.u_id}
          options={options?.filter(i => i.ability)}
          key={anchorEl}
        />
      </div>
      <DeleteDialog
        open={open}
        setOpen={setOpen}
        title={`${t('DeleteAdminText')}: @${capitalizeText(data?.full_name)}`}
        confirmText={t('DeleteAdminText')}
        onConfirm={handleDeleteAdmin}
      />
      <ResetPasswordDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={`${t('ResetPasswordText')} : @${capitalizeText(data?.full_name)}`}
        onConfirm={body => {
          updatePassword(body)
        }}
      />
    </>
  )
}

const Admins = () => {
  // ** vars
  const { t } = useTranslation()
  const ability = useContext(AbilityContext)

  // ** States
  const [searchText, setSearchText] = useState('')
  const [initialCall, setInitialCall] = useState(true)
  const [controller, setController] = useState({ page: 0, pageSize: 10 })
  const [reCallApi, setReCallApi] = useState('')
  const [title, setTitle] = useState('')
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [dataStore, setDataStore] = useState({})
  const [roleData, setRoleData] = useState([])

  const { isLoading, data, isFetched, refetch } = useQuery(
    'admin',
    () => {
      setInitialCall(false)

      return fetchAdminsList({
        page: searchText.length === 0 ? controller.page + 1 : 1,
        items_per_page: controller.pageSize,
        search: searchText
      })
    },
    { retry: false }
  )

  const [rowCountState, setRowCountState] = useState(data?.data?.payload?.pagination?.total || 0)

  const toggleAddUserDrawer = data => {
    setDataStore(data)
    setAddUserOpen(!addUserOpen)
  }

  // ** When no data found
  const NoRowsOverlay = () => {
    return (
      <Stack height='100%' alignItems='center' justifyContent='center' fontWeight={600} textTransform={'capitalize'}>
        {t('noAdminFound')}
      </Stack>
    )
  }

  // ** Search Delayed Query
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedQuery = useCallback(_.debounce(refetch, 400), [searchText])

  // ** Search Function
  const handleSearch = searchValue => {
    setSearchText(searchValue)
  }

  // ** Status update function
  const ChangeStatusValue = async (id, status) => {
    await updateAdminsStatus({ id, status })
    refetch()
  }

  const fetchRoleList = async () => {
    await roleList()?.then(res => {
      if (res) {
        setRoleData(res)
      }
    })
  }

  const columns = [
    {
      flex: 1,
      minWidth: 100,
      field: t(strings.adminsTitleHeaderNameField),
      headerName: t(strings.adminsTitleHeaderNameLabel),
      renderCell: ({ row }) => {
        return (
          <Tooltip title={row?.full_name} placement='bottom'>
            <Typography variant='body1' sx={styles.viewTypographyBlack()}>
              {row?.full_name}
            </Typography>
          </Tooltip>
        )
      }
    },
    {
      flex: 1,
      minWidth: 200,
      field: t(strings.adminsTitleHeaderEmailLabel),
      headerName: t(strings.adminsTitleHeaderEmailLabel),
      renderCell: ({ row }) => {
        return (
          <Tooltip title={row?.email} placement='bottom'>
            <Typography variant='body1' sx={styles.emailTypography()}>
              {row?.email}
            </Typography>
          </Tooltip>
        )
      }
    },
    {
      flex: 1,
      minWidth: 130,
      field: t(strings.adminsTitleHeaderRoleLabel),
      headerName: t(strings.adminsTitleHeaderRoleLabel),
      renderCell: ({ row }) => {
        return (
          <Typography variant='body1' sx={styles.viewTypography()}>
            {row.role?.name}
          </Typography>
        )
      }
    },
    {
      flex: 1,
      minWidth: 130,
      field: t(strings.adminsTitleHeaderCountryLabel),
      headerName: t(strings.adminsTitleHeaderCountryLabel),
      renderCell: ({ row }) => {
        return (
          <Typography variant='body1' sx={styles.typographyStyle()}>
            {row.country?.name}
          </Typography>
        )
      }
    },
    {
      flex: 1,
      minWidth: 130,
      field: t(strings.adminsTitleHeaderStatusLabel),
      filterable: false,
      disableExport: true,
      headerName: t(strings.adminsTitleHeaderStatusLabel),
      renderCell: ({ row }) => {
        return (
          <FormControlLabel
            control={
              <Switch
                id={`status-${row.u_id}`}
                inputProps={{ 'data-testid': `status-${row.u_id}`, 'aria-label': 'controlled' }}
                checked={row.activity_status}
                name='status-switch'
                onChange={e =>
                  ability?.can('status', 'admin-management') && ChangeStatusValue(row.u_id, e.target.checked)
                }
                disabled={row?.u_id === 'ADM1000000001' || !ability?.can('status', 'admin-management')}
              />
            }
          />
        )
      }
    },
    {
      flex: 1,
      field: t(strings.adminsTitleHeaderActionLabel),
      minWidth: 120,
      headerName: t(strings.adminsTitleHeaderActionLabel),
      renderCell: ({ row }) => {
        return (
          <RowOptions
            id={row.u_id}
            data={row}
            ebook_count={row.ebook_count}
            reCallApi={setReCallApi}
            setTitle={setTitle}
            toggleAddUserDrawer={e => toggleAddUserDrawer(e)}
            abilities={ability}
          />
        )
      }
    }
  ]

  useEffect(() => {
    if (!initialCall) delayedQuery()

    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, delayedQuery])

  useEffect(() => {
    setRowCountState(prevRowCountState =>
      data?.data?.length !== 0
        ? data?.data?.payload?.pagination?.total !== undefined
          ? data?.data?.payload?.pagination?.total
          : prevRowCountState
        : 0
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data?.payload?.pagination?.total])

  useEffect(() => {
    refetch()
    fetchRoleList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controller, reCallApi])

  if (isLoading) return <FallbackSpinner sx={styles.spannerHeight()} />
  if (isFetched)
    return (
      <>
        <BreadcrumbComponent data={adminsBreadCrumb} />
        <Card>
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
                      id='search-car-model'
                      placeholder={t(strings.searchCarModelPlaceholder)}
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
                        ),
                        'data-testid': 'search-bar'
                      }}
                    />

                    {ability?.can('add', 'admin-management') && (
                      <Button
                        onClick={() => {
                          toggleAddUserDrawer()
                          setTitle('add')
                        }}
                        sx={styles.buttonStyle()}
                        id='add-button'
                        data-testid='add-admins'
                        variant='contained'
                      >
                        {t(strings.addAdmin)}
                      </Button>
                    )}
                  </Box>
                </Box>
              </>
            }
          />

          <DataGrid
            autoHeight
            getRowId={row => row.u_id}
            columns={columns}
            rowCount={rowCountState}
            columnBuffer={6}
            initialState={{
              pagination: {
                paginationModel: {
                  page: controller.page,
                  pageSize: controller.pageSize
                }
              }
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            disableRowSelectionOnClick
            slots={{ noRowsOverlay: NoRowsOverlay }}
            rows={data?.data?.data || []}
            onPaginationModelChange={newPageSize => {
              setController({
                page: newPageSize.page,
                pageSize: newPageSize.pageSize
              })
            }}
            paginationMode='server'
          />

          <SidebarAddUser
            open={addUserOpen}
            setAddUserOpen={setAddUserOpen}
            toggle={toggleAddUserDrawer}
            dataStore={dataStore}
            title={title}
            roleData={roleData}
            refetch={refetch}
            ability={ability}
          />
        </Card>
      </>
    )
}

Admins.acl = {
  subject: 'admin-management',
  action: 'read'
}

export default Admins
