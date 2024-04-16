// ** React Imports
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Icon Imports
import Icon from '@components/icon'

// ** Component and Pages Imports
import { rolesBreadCrumb } from '@breadcrumbs/index'
import BreadcrumbComponent from '@components/bread-crumb'
import DeleteDialog from '@components/dialogs/delete-dialog'
import FallbackSpinner from '@components/spinner'
import { capitalizeText } from '@functions/capitalize-text'
import Error500 from '@pages/500'

// ** Third Party Imports
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

// ** Constant Routes, Strings and Colors Imports
import { pattern } from '@patterns'
import { strings } from 'src/constants/strings'

// ** Context and API Imports
import { AbilityContext } from 'src/layouts/components/acl/can'
import { addRole, deleteRole, roleList, updateRole, viewRole } from '@api/role'
import { ModuleList } from '@api/module-list'

// ** Styles  Imports
import * as styles from '@styles-page/role/styles'

const RolesCards = ({ viewCard }) => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  const theme = useTheme()

  // ** Hooks
  const { t } = useTranslation()

  // ** States
  const [spinnerLoad, setSpinnerLoad] = useState(false)
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('Add')
  const [moduleList, setModuleList] = useState([])
  const [extra, setExtra] = useState(0)
  const [role, setRole] = useState('')
  const [viewId, setViewId] = useState()

  const [isExpanded, setExpanded] = useState(false)
  const [matchId, setMatchId] = useState(null)
  const [matchText, setMatchText] = useState(null)

  const handleToggleExpand = item => {
    setMatchId(item?.module_id)
    setExpanded(!isExpanded)
  }

  // eslint-disable-next-line no-unused-vars
  const { isLoading, isError, data, isFetched, refetch } = useQuery('role', roleList, {
    retry: false,
    staleTime: Infinity
  })

  const {
    control,
    setValue,
    trigger,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: { name: '' } })

  const getPermissions = async () => {
    await ModuleList().then(res => {
      if (res === undefined || res?.error || res?.status === false) {
        return null
      } else {
        let modules = res

        let updatedModules = []
        let updatedSubModules = []

        modules?.forEach(module => {
          module?.sub_modules?.length !== 0 &&
            module?.sub_modules?.forEach(subModule => {
              updatedSubModules.push({
                module_id: subModule.module_u_id,
                name: subModule.name,
                sub_module_id: subModule.u_id,
                view: false,
                add: false,
                update: false,
                delete: false,
                status: false
              })
            })

          let filterArray = updatedSubModules.filter(res => res.module_id === module.u_id)

          if (module.name === 'Dashboard' || module.name === 'Profile Management') {
            updatedModules.push({
              module_id: module.u_id,
              name: module.name,
              view: true,
              sub_module: module.sub_modules,
              add: true,
              update: true,
              delete: true,
              status: true
            })
          } else {
            updatedModules.push({
              module_id: module.u_id,
              name: module.name,
              view: false,
              sub_module: module?.sub_modules?.length !== 0 ? filterArray : module?.sub_modules,
              add: false,
              update: false,
              delete: false,
              status: false
            })
          }
        })

        setModuleList(updatedModules)
      }
    })
  }

  const clearPermissionsSelection = () => {
    let modules = moduleList
    let updatedModules = []
    let updatedSubModules = []
    modules?.forEach(module => {
      module?.sub_module?.length !== 0 &&
        module?.sub_module?.forEach(subModule => {
          updatedSubModules.push({
            ...subModule,
            view: false,
            add: false,
            update: false,
            delete: false,
            status: false
          })
        })

      if (module.name === 'Dashboard' || module.name === 'Profile Management') {
        updatedModules.push({
          id: module.id,
          module_id: module.module_id,
          name: module.name,
          rol_u_id: module.rol_u_id,
          view: true,
          sub_module: [],
          add: true,
          update: true,
          delete: true,
          status: true
        })
      } else {
        updatedModules.push({
          id: module.id,
          module_id: module.module_id,
          name: module.name,
          rol_u_id: module.rol_u_id,
          view: false,
          add: false,
          sub_module: module.sub_module.length !== 0 ? updatedSubModules : module.sub_module,
          update: false,
          delete: false,
          status: false
        })
      }
    })

    setModuleList(updatedModules)
    setExtra(extra + 1)
  }

  const handleEdit = async id => {
    setSpinnerLoad(true)

    await viewRole(id).then(async response => {
      if (
        response === undefined ||
        response?.data === undefined ||
        response?.error ||
        response?.data?.status === false
      ) {
        setSpinnerLoad(false)

        return null
      } else {
        await setValue('name', response?.data?.name)

        await setViewId(id)

        await setRole(response.data?.name)

        // INFO: setting given permissions
        let permissions = response.data.permission

        let updatedPermissions = []
        let updatedSubModules = []

        permissions?.forEach(permission => {
          permission?.sub_module &&
            permission.sub_module?.length !== 0 &&
            permission.sub_module?.forEach(subModule => {
              updatedSubModules.push({
                sub_module_id: subModule?.u_id,
                rol_u_id: subModule.permission?.rol_u_id,
                module_id: subModule?.module_u_id,
                name: subModule?.name,
                add: subModule.permission?.add,
                update: subModule.permission?.update,
                delete: subModule.permission?.delete,
                view: subModule.permission?.view,
                status: subModule.permission?.status,
                u_id: subModule?.permission?.u_id
              })
            })

          let filterArray = updatedSubModules.filter(res => {
            return res.module_id === permission.u_id
          })

          // permission?.sub_module?.length != 0 ? filterArray : permission?.sub_module,

          if (permission?.name === 'Dashboard' || permission?.name === 'Profile Management') {
            updatedPermissions.push({
              id: permission._id,
              rol_u_id: permission.permission_data?.role_u_id,
              module_id: permission?.u_id,
              name: permission?.name,
              sub_module: permission?.sub_module ?? [],
              add: true,
              update: true,
              delete: true,
              view: true,
              status: true,
              u_id: permission?.permission_data?.u_id
            })
          } else if (permission?.sub_module && permission?.sub_module?.length !== 0) {
            const statusUpdated = updatedSubModules.every(
              res =>
                res.add === true &&
                res.view === true &&
                res.delete === true &&
                res.status === true &&
                res.update === true
            )
            updatedPermissions.push({
              // id: permission._id,
              rol_u_id: permission.permission_data?.role_id,
              module_id: permission?.u_id,
              name: permission?.name,
              add: statusUpdated ? true : false,

              // sub_module: updatedSubModules,
              sub_module: permission?.sub_module?.length != 0 ? filterArray : permission?.sub_module,
              update: statusUpdated ? true : false,
              delete: statusUpdated ? true : false,
              view: statusUpdated ? true : false,
              status: statusUpdated ? true : false,
              u_id: permission?.permission_data?.u_id
            })
          } else {
            updatedPermissions.push({
              id: permission._id,
              rol_u_id: permission.permission_data?.rol_u_id,
              module_id: permission?.u_id,
              name: permission?.name,
              add: permission.permission_data?.add,
              sub_module: permission?.sub_module ?? [],
              update: permission.permission_data?.update,
              delete: permission.permission_data?.delete,
              view: permission.permission_data?.view,
              status: permission.permission_data?.status,
              u_id: permission?.permission_data?.u_id
            })
          }
        })
        setModuleList(updatedPermissions)
        setSpinnerLoad(false)
      }
    })
  }

  const handleClickOpen = data => {
    if (data === null) {
      getPermissions()
    }
    setValue('name', data)
    setRole('')
    setOpen(true)
  }

  const handleClose = async () => {
    clearPermissionsSelection()
    setOpen(false)
    setValue('name', '')
    setRole('')
    setExpanded(false)
    reset()
  }

  const handleDelete = async item => {
    setMatchText(item)
    setOpenDelete(true)
  }

  const handleDeleteRole = async id => {
    await deleteRole(id).then(() => {
      setOpenDelete(false)
      refetch()
    })
  }

  const handlePermissionSelection = (item, type, index, value) => {
    let allModules = moduleList

    if (type === 'all') {
      const allSelectedPermissions = allModules.map(x => {
        if (x.name === 'Dashboard' || x.name === 'Profile Management') {
          return { ...x }
        }
        let updatedSubModules = []
        if (x.sub_module.length !== 0) {
          let subModuleFilter = x.sub_module.map(itemData => {
            return { ...itemData, add: item, update: item, delete: item, view: item, status: item }
          })

          updatedSubModules.push(...subModuleFilter)
        }

        if (x.sub_module.length !== 0) {
          x.sub_module = updatedSubModules
        }

        return { ...x, add: item, update: item, delete: item, view: item, status: item }
      })

      setModuleList(allSelectedPermissions)
      setExtra(extra + 1)
    } else if (type === 'view') {
      if (value === 'sub-module') {
        let itemIndex = allModules[index].sub_module.findIndex(subItem => {
          return subItem.sub_module_id === item.sub_module_id
        })

        allModules[index].sub_module[itemIndex][type] = !allModules[index].sub_module[itemIndex][type]

        const allSelectedPermissions = allModules.map(x => {
          if (x.view === true) {
            return { ...x }
          } else {
            return { ...x, add: false, update: false, delete: false, status: false }
          }
        })

        setModuleList(allSelectedPermissions)
        setExtra(extra + 1)
      } else {
        let itemIndex = allModules.indexOf(item, 0)

        allModules[itemIndex][type] = !allModules[itemIndex][type]

        const allSelectedPermissions = allModules.map(x => {
          if (x.view === true) {
            return { ...x }
          } else {
            return { ...x, add: false, update: false, delete: false, status: false }
          }
        })
        setModuleList(allSelectedPermissions)
        setExtra(extra + 1)
      }
    } else {
      if (value === 'sub-module') {
        let itemIndex = allModules[index].sub_module.findIndex(subItem => subItem.sub_module_id === item.sub_module_id)

        allModules[index].sub_module[itemIndex][type] = !allModules[index].sub_module[itemIndex][type]

        setModuleList(allModules)
        setExtra(extra + 1)
      } else {
        let itemIndex = allModules.indexOf(item, 0)
        allModules[itemIndex][type] = !allModules[itemIndex][type]
        setModuleList(allModules)
        setExtra(extra + 1)
      }
    }
  }

  const handleRowSelection = (value, i, type) => {
    let allModules = moduleList
    if (type === 'row') {
      const rowPermissions = allModules.map(x => {
        if (x.module_id === i.module_id) {
          if (value == true) {
            x.add = true
            x.update = true
            x.delete = true
            x.view = true
            x.status = true
          } else {
            x.add = false
            x.update = false
            x.delete = false
            x.view = false
            x.status = false
          }
        }

        return x
      })
      setModuleList(rowPermissions)
      setExtra(extra + 1)
    }
    if (type === 'row-module') {
      const rowPermissions = allModules.map(x => {
        if (x.module_id === i.module_id) {
          if (value === true) {
            x.add = true
            x.update = true
            x.delete = true
            x.view = true
            x.status = true

            // Set sub-module permissions to true
            x.sub_module.forEach(item => {
              item.add = true
              item.update = true
              item.delete = true
              item.view = true
              item.status = true
            })
          } else {
            x.add = false
            x.update = false
            x.delete = false
            x.view = false
            x.status = false

            // Set sub-module permissions to false
            x.sub_module.forEach(item => {
              item.add = false
              item.update = false
              item.delete = false
              item.view = false
              item.status = false
            })
          }
        }

        return x
      })

      setModuleList(rowPermissions)
      setExtra(extra + 1)
    }

    if (type === 'sub-row') {
      const rowPermissions = allModules.map(x => {
        if (x.sub_module.length !== 0) {
          x.sub_module.map(item => {
            if (item.sub_module_id === i.sub_module_id) {
              if (value == true) {
                item.add = true
                item.update = true
                item.delete = true
                item.view = true
                item.status = true
              } else {
                item.add = false
                item.update = false
                item.delete = false
                item.view = false
                item.status = false
              }
            }

            return item
          })
        }

        return x
      })

      setModuleList(rowPermissions)
      setExtra(extra + 1)
    }
  }

  const onSubmit = async data => {
    let moduleListUpdatedArray = []

    {
      moduleList?.map(res => {
        if (res?.sub_module?.length === 0) {
          let modules = {
            module_u_id: res?.module_id,
            name: res?.name,
            view: res.view,
            add: res.add,
            update: res.update,
            delete: res.delete,
            status: res.status,
            u_id: res.u_id
          }

          moduleListUpdatedArray.push(modules)
        }
        if (res?.sub_module?.length !== 0) {
          res?.sub_module?.map(item => {
            let subModules = {
              module_u_id: item?.module_id,
              sub_module_u_id: item.sub_module_id,
              name: item?.name,
              view: item.view,
              add: item.add,
              update: item.update,
              delete: item.delete,
              status: item.status,
              u_id: item.u_id
            }

            moduleListUpdatedArray.push(subModules)
          })
        }
      })
    }

    const body = {
      name: data.name,
      permission: moduleListUpdatedArray
    }

    const array1 = moduleListUpdatedArray.some(item => {
      return (
        item.add === true || item.delete === true || item.view === true || item.update === true || item.status === true
      )
    })

    if (array1 === true) {
      if (dialogTitle === 'Edit') {
        await updateRole({ id: viewId, data: body })
        handleClose()

        refetch()
      } else {
        await addRole(body)
        handleClose()

        refetch()
      }
    } else {
      toast.error(t('roleSelectPermissionMsg'))
    }
  }

  // Check if all permissions are selected
  const checkAllSelected = () => {
    let falseCounter = 0

    moduleList.forEach(module => {
      if (
        module?.add === false ||
        module?.view === false ||
        module?.update === false ||
        module?.delete === false ||
        module?.status === false
      ) {
        falseCounter += 1
      }
    })

    return falseCounter === 0
  }

  const checkRowSelected = (i, subModules) => {
    if (subModules && subModules.length > 0) {
      let checked = subModules.every(
        subModule => subModule.add && subModule.view && subModule.update && subModule.delete && subModule.status
      )

      if (checked) {
        i.add = true
        i.view = true
        i.update = true
        i.delete = true
        i.status = true
      } else {
        i.add = false
        i.view = false
        i.update = false
        i.delete = false
        i.status = false
      }

      return checked
    } else {
      let checked = false
      if (i.add === true && i.view === true && i.update === true && i.delete === true && i.status === true) {
        checked = true
      }

      return checked
    }
  }

  const errorMessage = errors => {
    return <FormHelperText sx={styles.errorMessage()}>{errors}</FormHelperText>
  }

  const renderCards = () =>
    data?.map((item, index) => {
      return (
        <>
          <>
            <Grid item xs={12} sm={6} lg={4} key={item.u_id}>
              <Card>
                <CardContent>
                  <Box sx={styles.rolesBox(item.name)}>
                    <Typography variant='body2' sx={styles.bodyTypographyStyle()}>
                      {t('total')} {item?.total_user}{' '}
                      {item?.total_user === 0 || item?.total_user === 1 ? t('user') : t('users')}
                    </Typography>

                    <AvatarGroup max={4} key={('cardData', index)} sx={styles.rolesAvatarGroup()}>
                      {[...Array(item?.total_user).keys()].map(id => {
                        return <Avatar key={id + 'other-role'} alt={item.name} src={`/images/avatars/${id + 1}.png`} />
                      })}
                    </AvatarGroup>
                  </Box>

                  <Box sx={styles.editBox()}>
                    <Typography variant='h6' sx={styles.roleTypographyStyle()}>
                      {item.name}
                    </Typography>
                    <Box sx={styles.editBoxIcons()}>
                      {ability?.can('update', 'roles-permissions') ? (
                        <Typography
                          onMouseDown={() => {
                            handleClickOpen(item.name)
                            setDialogTitle('Edit')
                            handleEdit(item.u_id)
                          }}
                          id='edit-role-icon'
                          sx={styles.editBoxIconsEdit()}
                          color={'primary'}
                        >
                          {t('editRole')}
                        </Typography>
                      ) : null}

                      <Box sx={styles.editBoxIcons()}>
                        {ability?.can('view', 'roles-permissions') ? (
                          <IconButton size='small' onMouseDown={() => viewCard(item)} id='view-role-icon'>
                            <Icon icon='mdi:eye-outline' fontSize={20} />
                          </IconButton>
                        ) : null}

                        {ability?.can('delete', 'roles-permissions') ? (
                          <Box>
                            <IconButton
                              id='delete-role-icon'
                              size='small'
                              onMouseDown={() => handleDelete(item)}
                              disabled={item?.name === strings.superAdmin ? true : false}
                            >
                              <Icon icon='ic:round-delete-outline' fontSize={20} />
                              <Icon />
                            </IconButton>
                          </Box>
                        ) : null}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </>
        </>
      )
    })

  useEffect(() => {
    getPermissions()
  }, [])

  if (isLoading) return <FallbackSpinner sx={styles.spinnerHeight} />
  if (isError) return <Error500 />
  if (isFetched)
    return (
      <>
        <BreadcrumbComponent data={rolesBreadCrumb} />
        <Box sx={styles.dialogTextData()}>
          <Typography variant='h5' component='span'>
            {t('roleListTitle')}
          </Typography>
          <Typography variant='body2'>{t('roleListDescription')}</Typography>
        </Box>
        <Grid container spacing={6} className='match-height'>
          {renderCards()}

          {/* Add Role Card */}
          {ability?.can('add', 'roles-permissions') ? (
            <Grid item xs={12} sm={6} lg={4}>
              <Card
                sx={styles.cursorPointer()}
                onClick={() => {
                  handleClickOpen(null)
                  setDialogTitle('Add')
                }}
              >
                <Grid container sx={styles.gridHeight()}>
                  <Grid item xs={5}>
                    <Box sx={styles.gridImage()}>
                      <img width={65} height={130} alt='add-role' src='/images/role-img.png' />
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent>
                      <Box sx={styles.textAlign()}>
                        <Button
                          variant='contained'
                          id={'add-role'}
                          sx={styles.addRoleButton()}
                          onClick={() => {
                            handleClickOpen(null)
                            setDialogTitle('Add')
                          }}
                        >
                          {t('addRoleLabel')}
                        </Button>
                      </Box>
                      <Typography variant='body2' style={styles.textAlign()}>
                        {t('addRoleSubTitle')}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ) : null}
          {/* End Add Role Card */}

          {/* Edit Role Card */}
          <Dialog fullWidth maxWidth='lg' scroll='body' onClose={handleClose} open={open}>
            {spinnerLoad ? (
              <FallbackSpinner sx={styles.spinnerEditHeight()} />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle sx={styles.dialogText()}>
                  <Typography variant='h4' component='span'>
                    {`${dialogTitle} Role`}
                  </Typography>
                  {/* <Typography variant='body2'>{strings.setRolesPermissions}</Typography> */}
                  <IconButton aria-label='close' onClick={handleClose} sx={styles?.closeButtonIcon}>
                    <Icon icon='mdi:close' fontSize={'2rem'} />
                  </IconButton>
                </DialogTitle>
                <DialogContent sx={styles.dialogBoxContent}>
                  <Box sx={styles.dialogBox()}>
                    <Grid items xs={12}>
                      <FormControl fullWidth>
                        <Controller
                          name={strings.roleName}
                          control={control}
                          rules={{
                            required: t('roleNameRequired'),
                            pattern: {
                              value: pattern?.alphaAllowed,
                              message: t('alphabetsAllowed')
                            }
                          }}
                          render={({ field: { value, onChange } }) => {
                            return (
                              <TextField
                                value={value}
                                label={t('roleLabel')}
                                onChange={onChange}
                                autoComplete='off'
                                inputProps={{ maxLength: 15, readOnly: role === strings.superAdmin ? true : false }}
                                error={Boolean(errors.name)}
                                placeholder={strings.roleNamePlaceholder}
                                onKeyPress={() => {
                                  trigger(strings.roleName)
                                }}
                                id={'name'}
                                aria-describedby={strings.roleName}
                              />
                            )
                          }}
                        />
                        {errorMessage(errors.name?.message)}
                      </FormControl>
                    </Grid>
                  </Box>
                  <Typography variant='h6'>{t('rolesPermissions')}</Typography>
                  <TableContainer>
                    <Table size='small'>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={styles.tableCell()}>
                            <Box sx={styles.tableCellBox()}>
                              <Tooltip placement='top' title={t('tooltipTitle')}>
                                <IconButton sx={styles.roleIconButton()}>
                                  <Icon icon='mdi:select-all' fontSize={20} />
                                </IconButton>
                              </Tooltip>
                              {t('administratorAccess')}
                            </Box>
                          </TableCell>
                          <TableCell colSpan={6}>
                            <FormControlLabel
                              label={t('selectAll')}
                              id={'select-all-role'}
                              control={<Checkbox size='small' checked={checkAllSelected()} />}
                              sx={styles.formControlLabel()}
                              onChange={e => handlePermissionSelection(e.currentTarget.checked, 'all', 0, 'module')}
                              disabled={role === strings.superAdmin ? true : false}
                            />
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {moduleList?.map((i, index) => {
                          return i.sub_module?.length === 0 ? (
                            <TableRow key={i._id} sx={styles.tableRow()}>
                              <TableCell sx={styles.roleTableCell(theme)}>{i.name}</TableCell>
                              {/* select All */}
                              <TableCell>
                                <FormControlLabel
                                  label={t('selectAll')}
                                  id={'select-all-row-role'}
                                  control={<Checkbox size='small' checked={checkRowSelected(i)} />}
                                  disabled={
                                    i.name === 'Dashboard' ||
                                    i.name === 'Profile Management' ||
                                    role === strings.superAdmin
                                      ? true
                                      : false
                                  }
                                  sx={styles.formControlLabel()}
                                  onChange={e => handleRowSelection(e.currentTarget.checked, i, 'row')}
                                />
                              </TableCell>
                              {/* read */}
                              <TableCell>
                                <FormControl fullWidth>
                                  <FormControlLabel
                                    label={t('read')}
                                    id={'select-read-role'}
                                    control={
                                      <Checkbox
                                        size='small'
                                        checked={i.view}
                                        disabled={
                                          i.name === 'Dashboard' ||
                                          i.name === 'Profile Management' ||
                                          role === strings.superAdmin
                                            ? true
                                            : false
                                        }
                                        onChange={() => handlePermissionSelection(i, 'view', index, 'module')}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                      />
                                    }
                                  />
                                </FormControl>
                              </TableCell>
                              {/* write */}
                              <TableCell>
                                <FormControlLabel
                                  label={t('write')}
                                  id={'select-write-role'}
                                  control={
                                    <Checkbox
                                      size='small'
                                      checked={i.add}
                                      disabled={
                                        i.name === 'Dashboard' ||
                                        i.name === 'Profile Management' ||
                                        role === strings.superAdmin ||
                                        i.view === false
                                          ? true
                                          : false
                                      }
                                      onChange={() => handlePermissionSelection(i, 'add', index, 'module')}
                                      inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                  }
                                />
                              </TableCell>
                              {/* update */}
                              <TableCell>
                                <FormControlLabel
                                  label={t('update')}
                                  id={'select-update-role'}
                                  control={
                                    <Checkbox
                                      size='small'
                                      checked={i.update}
                                      disabled={
                                        i.name === 'Dashboard' ||
                                        i.name === 'Profile Management' ||
                                        role === strings.superAdmin ||
                                        i.view === false
                                          ? true
                                          : false
                                      }
                                      onChange={() => handlePermissionSelection(i, 'update', index, 'module')}
                                      inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                  }
                                />
                              </TableCell>
                              {/* delete */}
                              <TableCell>
                                <FormControlLabel
                                  label={t('delete')}
                                  id={'select-delete-role'}
                                  control={
                                    <Checkbox
                                      size='small'
                                      checked={i.delete}
                                      disabled={
                                        i.name === 'Dashboard' ||
                                        i.name === 'Profile Management' ||
                                        role === strings.superAdmin ||
                                        i.view === false
                                          ? true
                                          : false
                                      }
                                      onChange={() => handlePermissionSelection(i, 'delete', index, 'module')}
                                      inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                  }
                                />
                              </TableCell>
                              {/* status */}
                              <TableCell>
                                <FormControlLabel
                                  label={t('statusLabel')}
                                  id={'select-status-role'}
                                  control={
                                    <Checkbox
                                      size='small'
                                      checked={i.status}
                                      disabled={
                                        i.name === 'Dashboard' ||
                                        i.name === 'Profile Management' ||
                                        role === strings.superAdmin ||
                                        i.view === false
                                          ? true
                                          : false
                                      }
                                      onChange={() => handlePermissionSelection(i, 'status', index, 'module')}
                                      inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                  }
                                />
                              </TableCell>
                            </TableRow>
                          ) : (
                            <>
                              <TableRow sx={styles.tableRow()}>
                                <TableCell sx={styles.roleTableCell(theme)}>
                                  <span
                                    onClick={() => handleToggleExpand(i)}
                                    style={styles.tableSpanStyle()}
                                    id={'select-role-and-permission'}
                                  >
                                    {isExpanded && i?.module_id === matchId ? '-' : '+'}
                                  </span>
                                  {i.name}
                                </TableCell>
                                {/* select all */}
                                <TableCell>
                                  <FormControlLabel
                                    label={t('selectAll')}
                                    id={'select-all-row-role'}
                                    control={<Checkbox size='small' checked={checkRowSelected(i, i.sub_module)} />}
                                    disabled={
                                      i.name === 'Dashboard' ||
                                      i.name === 'Profile Management' ||
                                      role === strings.superAdmin
                                        ? true
                                        : false
                                    }
                                    sx={styles.formControlLabel()}
                                    onChange={e => handleRowSelection(e.currentTarget.checked, i, 'row-module')}
                                  />
                                </TableCell>
                                {/* read */}
                                <TableCell>
                                  <FormControl fullWidth>
                                    <FormControlLabel
                                      label={t('read')}
                                      id={'select-read-role'}
                                      control={
                                        <Checkbox
                                          size='small'
                                          checked={i.view}
                                          disabled={
                                            i.name === 'Dashboard' ||
                                            i.name === 'Profile Management' ||
                                            role === strings.superAdmin
                                              ? true
                                              : false
                                          }
                                          onChange={() => handlePermissionSelection(i, 'view', index, 'module')}
                                          inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                      }
                                    />
                                  </FormControl>
                                </TableCell>
                                {/* write */}
                                <TableCell>
                                  <FormControlLabel
                                    label={t('write')}
                                    id={'select-write-role'}
                                    control={
                                      <Checkbox
                                        size='small'
                                        checked={i.add}
                                        disabled={
                                          i.name === 'Dashboard' ||
                                          i.name === 'Profile Management' ||
                                          role === strings.superAdmin ||
                                          i.view === false
                                            ? true
                                            : false
                                        }
                                        onChange={() => handlePermissionSelection(i, 'add', index, 'module')}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                      />
                                    }
                                  />
                                </TableCell>
                                {/* update */}
                                <TableCell>
                                  <FormControlLabel
                                    label={t('update')}
                                    id={'select-update-role'}
                                    control={
                                      <Checkbox
                                        size='small'
                                        checked={i.update}
                                        disabled={
                                          i.name === 'Dashboard' ||
                                          i.name === 'Profile Management' ||
                                          role === strings.superAdmin ||
                                          i.view === false
                                            ? true
                                            : false
                                        }
                                        onChange={() => handlePermissionSelection(i, 'update', index, 'module')}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                      />
                                    }
                                  />
                                </TableCell>
                                {/* delete */}
                                <TableCell>
                                  <FormControlLabel
                                    label={t('delete')}
                                    id={'select-delete-role'}
                                    control={
                                      <Checkbox
                                        size='small'
                                        checked={i.delete}
                                        disabled={
                                          i.name === 'Dashboard' ||
                                          i.name === 'Profile Management' ||
                                          role === strings.superAdmin ||
                                          i.view === false
                                            ? true
                                            : false
                                        }
                                        onChange={() => handlePermissionSelection(i, 'delete', index, 'module')}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                      />
                                    }
                                  />
                                </TableCell>
                                {/* status */}
                                <TableCell>
                                  <FormControlLabel
                                    label={t('statusLabel')}
                                    id={'select-status-role'}
                                    control={
                                      <Checkbox
                                        size='small'
                                        checked={i.status}
                                        disabled={
                                          i.name === 'Dashboard' ||
                                          i.name === 'Profile Management' ||
                                          role === strings.superAdmin ||
                                          i.view === false
                                            ? true
                                            : false
                                        }
                                        onChange={() => handlePermissionSelection(i, 'status', index, 'module')}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                      />
                                    }
                                  />
                                </TableCell>
                              </TableRow>

                              {i.sub_module?.length !== 0 &&
                                i.sub_module?.map((item, indexSecond) => {
                                  return (
                                    <TableRow
                                      style={{ display: isExpanded && i?.module_id === matchId ? 'table-row' : 'none' }}
                                      key={indexSecond}
                                    >
                                      <TableCell sx={styles.roleTableCell(theme)}>
                                        <span style={styles.tableRowSpan()}> {item.name}</span>
                                      </TableCell>
                                      {/* select all */}
                                      <TableCell>
                                        <FormControlLabel
                                          label={t('selectAll')}
                                          id={'select-all-row-role'}
                                          control={<Checkbox size='small' checked={checkRowSelected(item)} />}
                                          disabled={
                                            i.name === 'Dashboard' ||
                                            i.name === 'Profile Management' ||
                                            role === strings.superAdmin
                                              ? true
                                              : false
                                          }
                                          sx={styles.formControlLabel()}
                                          onChange={e => handleRowSelection(e.currentTarget.checked, item, 'sub-row')}
                                        />
                                      </TableCell>
                                      {/* read */}
                                      <TableCell>
                                        <FormControl fullWidth>
                                          <FormControlLabel
                                            label={t('read')}
                                            id={'select-read-role'}
                                            control={
                                              <Checkbox
                                                size='small'
                                                checked={item.view}
                                                disabled={
                                                  i.name === 'Dashboard' ||
                                                  i.name === 'Profile Management' ||
                                                  role === strings.superAdmin
                                                    ? true
                                                    : false
                                                }
                                                onChange={() =>
                                                  handlePermissionSelection(item, 'view', index, 'sub-module')
                                                }
                                                inputProps={{ 'aria-label': 'controlled' }}
                                              />
                                            }
                                          />
                                        </FormControl>
                                      </TableCell>
                                      {/* write */}
                                      <TableCell>
                                        <FormControlLabel
                                          label={t('write')}
                                          id={'select-write-role'}
                                          control={
                                            <Checkbox
                                              size='small'
                                              checked={item.add}
                                              disabled={
                                                i.name === 'Dashboard' ||
                                                i.name === 'Profile Management' ||
                                                role === strings.superAdmin ||
                                                item.view === false
                                                  ? true
                                                  : false
                                              }
                                              onChange={() =>
                                                handlePermissionSelection(item, 'add', index, 'sub-module')
                                              }
                                              inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                          }
                                        />
                                      </TableCell>
                                      {/* update */}
                                      <TableCell>
                                        <FormControlLabel
                                          label={t('update')}
                                          id={'select-update-role'}
                                          control={
                                            <Checkbox
                                              size='small'
                                              checked={item.update}
                                              disabled={
                                                i.name === 'Dashboard' ||
                                                i.name === 'Profile Management' ||
                                                role === strings.superAdmin ||
                                                item.view === false
                                                  ? true
                                                  : false
                                              }
                                              onChange={() =>
                                                handlePermissionSelection(item, 'update', index, 'sub-module')
                                              }
                                              inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                          }
                                        />
                                      </TableCell>
                                      {/* delete */}
                                      <TableCell>
                                        <FormControlLabel
                                          label={t('delete')}
                                          id={'select-delete-role'}
                                          control={
                                            <Checkbox
                                              size='small'
                                              checked={item.delete}
                                              disabled={
                                                i.name === 'Dashboard' ||
                                                i.name === 'Profile Management' ||
                                                role === strings.superAdmin ||
                                                item.view === false
                                                  ? true
                                                  : false
                                              }
                                              onChange={() =>
                                                handlePermissionSelection(item, 'delete', index, 'sub-module')
                                              }
                                              inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                          }
                                        />
                                      </TableCell>
                                      {/* status */}
                                      <TableCell>
                                        <FormControlLabel
                                          label={t('statusLabel')}
                                          id={'select-status-role'}
                                          control={
                                            <Checkbox
                                              size='small'
                                              checked={item.status}
                                              disabled={
                                                i.name === 'Dashboard' ||
                                                i.name === 'Profile Management' ||
                                                role === strings.superAdmin ||
                                                item.view === false
                                                  ? true
                                                  : false
                                              }
                                              onChange={() =>
                                                handlePermissionSelection(item, 'status', index, 'sub-module')
                                              }
                                              inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                          }
                                        />
                                      </TableCell>
                                    </TableRow>
                                  )
                                })}
                            </>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </DialogContent>
                <DialogActions sx={styles.dialogActions()}>
                  <Box className='demo-space-x'>
                    {role !== strings.superAdmin && (
                      <Button
                        size='large'
                        type='submit'
                        id={'role-submit'}
                        variant='contained'
                        disabled={role === strings.superAdmin ? true : false}
                      >
                        {t('submitButton')}
                      </Button>
                    )}

                    <Button size='large' color='secondary' variant='outlined' onClick={handleClose} id={'discard'}>
                      {t('discardButton')}
                    </Button>
                  </Box>
                </DialogActions>
              </form>
            )}
          </Dialog>

          {matchText?.total_user === 0 ? (
            <DeleteDialog
              open={openDelete}
              setOpen={setOpenDelete}
              title={`${t('deleteRoleTitle')} @${capitalizeText(matchText?.name)}`}
              confirmText={`${t('deleteRoleSubTitle')}`}
              onConfirm={() => handleDeleteRole(matchText?.u_id)}
            />
          ) : (
            <DeleteDialog
              open={openDelete}
              setOpen={setOpenDelete}
              title={`${t('deleteCancelRoleTitle')} @${capitalizeText(matchText?.name)} ${t('role')}`}
              description={`${t('deleteCancelRoleSubTitle')}`}
              condition={false}
            />
          )}
          {/* End Edit Role Card */}
        </Grid>
      </>
    )
}

RolesCards.acl = {
  action: 'read',
  subject: 'roles-permissions'
}

export default RolesCards
