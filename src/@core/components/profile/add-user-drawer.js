// ** React Imports
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

// ** MUI Imports
import { Autocomplete } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Third Party Imports
import { Controller, useForm } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** constants Imports
import { errorMessage } from '@functions/error-message'
import { strings } from '@strings'

// ** Third party omponents
import { useTranslation } from 'react-i18next'

// ** custom components
import ResetPasswordDialog from '@components/dialogs/reset-password'
import { capitalizeText } from '@functions/capitalize-text'
import { ProfileRules } from '@validations/profile'

// ** API Imports
import { updateAdmins, viewAdmins } from '@api/admins'
import { roleList } from '@api/role'

// ** Style Import
import * as styles from '@styles-page/admins/styles'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const SidebarProfileEdit = props => {
  // ** Props
  const { open, toggle, title, dataStore, reCallApiFunction } = props

  // ** roles api
  const { data } = useQuery(
    'roles',
    () => {
      return roleList()
    },
    { retry: false }
  )

  // ** State
  const [openDialog, setOpenDialog] = useState(false)

  let country = [
    {
      activity_status: 'enabled',
      alpha2: 'FK',
      alpha3: 'FLK',
      city_count: 0,
      is_on_board: true,
      name: 'falkland islands',
      prefix: '+500',
      u_id: 'CUT1000000070'
    }
  ]

  // ** Hooks
  const profileValRule = ProfileRules()
  const { t } = useTranslation()

  const {
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: profileValRule.defaultValues
  })

  // ** submit function
  const onSubmit = async data => {
    const body = {
      name: data?.name || '',
      last_name: data?.last_name || '',
      mobile_no: data?.mobile_no,
      email: data?.email
    }

    await updateAdmins({ viewId: dataStore?.u_id, data: body })

    toggle()
    reset()
    reCallApiFunction(Math.floor(Math.random() * 20).toString())
  }

  // ** close function
  const handleClose = () => {
    toggle()
    reset()
  }

  // ** admin view data
  const getCustomerData = async () => {
    await viewAdmins(dataStore?.u_id).then(payload => {
      if (payload) {
        setValue('name', `${payload?.first_name} ${payload?.last_name}`)
        setValue('last_name', payload?.last_name)
        setValue('password', payload?.password)
        setValue('mobile_no', payload?.mobile_no)
        const countryName = country?.find(i => i?.u_id === payload?.country?.u_id)
        const roleName = data?.find(i => i?.u_id === payload?.role?.u_id)
        setValue('country', countryName ?? null)
        setValue('role', roleName)
        setValue('email', payload?.email)
        setValue('status', payload?.status)
      }
    })
  }

  useEffect(() => {
    getCustomerData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={styles.drawerMain()}
    >
      <Header>
        <Typography variant='h6'>{t('Edit Details')}</Typography>
        <IconButton size='small' onClick={handleClose} sx={styles.drawerCloseIcon()}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box p={5}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          {/* fname  */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='name'
              control={control}
              rules={profileValRule.name}
              render={({ field: { value, onChange } }) => (
                <TextField
                  id={'fname-admin'}
                  inputProps={{ readOnly: title === 'view' ? true : false }}
                  value={value}
                  label={t('Name')}
                  onChange={onChange}
                  placeholder={t('optilabUserNamePlaceholder')}
                  error={Boolean(errors.name)}
                />
              )}
            />
            {title != 'view' && errors.name && errorMessage(errors?.name)}
          </FormControl>

          {/* lname  */}
          {/* <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='last_name'
              control={control}
              rules={profileValRule.last_name}
              render={({ field: { value, onChange } }) => (
                <TextField
                  id={'lname-admin'}
                  inputProps={{ readOnly: title === 'view' ? true : false }}
                  value={value}
                  label={t('Last Name')}
                  onChange={onChange}
                  placeholder={t(strings.adminLastNamePlaceHolder)}
                  error={Boolean(errors.last_name)}
                />
              )}
            />
            {title != 'view' && errors.last_name && errorMessage(errors?.last_name)}
          </FormControl> */}

          {/* email  */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='email'
              control={control}
              rules={profileValRule.email}
              render={({ field: { value, onChange } }) => (
                <TextField
                  inputProps={{ readOnly: title === 'view' ? true : false }}
                  id={'email'}
                  value={value}
                  label={t('Email')}
                  onChange={onChange}
                  placeholder={t(strings.adminEmailPlaceHolder)}
                  error={Boolean(errors.email)}
                />
              )}
            />
            {errors.email && errorMessage(errors?.email)}
          </FormControl>

          {/* Phone number */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name={'mobile_no'}
              control={control}
              rules={profileValRule.mobile_no}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type='text'
                  value={value}
                  label={t('optilabPhone')}
                  autoComplete='off'
                  onInput={e => (e.target.value = e.target.value.slice(0, 10))}
                  onChange={e => {
                    onChange(e)
                  }}
                  placeholder={t('optilabPhonePlaceholder')}
                  error={Boolean(errors.mobile_no)}
                  id={'phone-no'}
                />
              )}
            />
            {title != 'view' && errors.mobile_no && errorMessage(errors?.mobile_no)}
          </FormControl>

          {/* role  */}

          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='role'
              control={control}
              rules={profileValRule.role}
              render={({ field: { value, onChange } }) => {
                return (
                  <Autocomplete
                    readOnly={true}
                    value={value}
                    error={Boolean(errors.role)}
                    id={'select-car-role'}
                    options={data || []}
                    onChange={(event, value) => {
                      onChange(value)
                    }}
                    getOptionLabel={option => {
                      return capitalizeText(option.name) || ''
                    }}
                    getOptionSelected={(option, value) => {
                      return option.u_id === value.u_id
                    }}
                    renderOption={(props, option) => {
                      return <li {...props}>{capitalizeText(option?.name ?? '')}</li>
                    }}
                    renderInput={params => <TextField error={Boolean(errors.role)} {...params} label={t('Role')} />}
                  />
                )
              }}
            />
            {errors.role && errorMessage(errors?.role)}
          </FormControl>

          <Box sx={styles.drawerformButton()}>
            {title === 'view' ? (
              <Button size='large' variant='outlined' color='secondary' onClick={handleClose} id={'back-button-admin'}>
                {t('Back')}
              </Button>
            ) : (
              <>
                <Button
                  size='large'
                  type='submit'
                  variant='contained'
                  sx={styles.drawerformButtonMargin()}
                  id={'submit-button-admin'}
                >
                  {t('update')}
                </Button>
                <Button
                  size='large'
                  variant='outlined'
                  color='secondary'
                  onClick={handleClose}
                  id={'cancel-button-admin'}
                >
                  {t('Cancel')}
                </Button>
              </>
            )}
          </Box>
        </form>
      </Box>
      <ResetPasswordDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={`Reset Password for : @${capitalizeText(dataStore?.name)}`}
        onConfirm={() => {}}
      />
    </Drawer>
  )
}

export default SidebarProfileEdit
