// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Switch from '@mui/material/Switch'
import { Autocomplete } from '@mui/material'

// ** Third Party Imports
import { Controller, useForm } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Api imports
import { addAdmins, updateAdmins, viewAdmins, updateAdminsPassword } from '@api/admins'

// ** constants Imports
import { strings } from '@strings'
import { errorMessage } from '@functions/error-message'

// ** Third party components
import { useTranslation } from 'react-i18next'

// ** custom components
import ResetPasswordDialog from '@components/dialogs/reset-password'
import { capitalizeText } from '@functions/capitalize-text'
import { adminRules } from '@validations/admins'

// ** Style Import
import * as Styled from '@styles-page/admins/styled-components'
import * as styles from '@styles-page/admins/styles'

const SidebarAddUser = props => {
  // ** Hooks
  const { t } = useTranslation()

  const adminValRule = adminRules()

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

  // ** Props
  const { open, toggle, title, dataStore, setAddUserOpen, roleData, refetch, ability } = props

  // ** States
  const [showPassword, setShowPassword] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const {
    reset,
    control,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: adminValRule.defaultValues
  })

  const handleClose = () => {
    toggle()
    reset()
  }

  const onSubmit = async data => {
    data.country_u_id = data.country_u_id.u_id
    data.role_u_id = data.role_u_id.u_id

    const viewId = dataStore?.u_id

    if (viewId) {
      delete data.password
      await updateAdmins({ data, viewId })?.then(res => {
        if (res?.status) {
          handleClose()
          refetch()
        }
      })
    } else {
      await addAdmins(data)?.then(res => {
        if (res?.status) {
          handleClose()
          refetch()
        }
      })
    }
  }

  const callApi = async () => {
    const viewId = dataStore?.u_id

    if (viewId && title !== 'add') {
      await viewAdmins(viewId).then(res => {
        if (res) {
          setValue('first_name', res?.first_name)
          setValue('last_name', res?.last_name)
          setValue('mobile_no', res?.mobile_no)
          setValue('email', res?.email)
          setValue('activity_status', res?.activity_status)

          const countryName = country?.find(i => i?.u_id === res?.country?.u_id)
          const roleName = roleData?.find(i => i?.u_id === res?.role?.u_id)

          setValue('country_u_id', countryName)
          setValue('role_u_id', roleName)
        }
      })
    }

    // setWait(false)
  }

  const handleResetPassword = () => {
    setAddUserOpen(false)
    setOpenDialog(true)
  }

  const updatePassword = async body => {
    const viewId = dataStore?.u_id

    if (viewId) {
      await updateAdminsPassword({ viewId, body })?.then(res => {
        if (res?.status) {
          reset()
          refetch()
        }
      })
    }
  }

  useEffect(() => {
    if (title !== 'add' && open) {
      callApi()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, open])

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={styles.drawerMain()}
    >
      <Styled.Header>
        <Typography variant='h6'>
          {title === 'add' ? t(strings.addNewAdmin) : title === 'edit' ? t(strings.editAdmin) : t(strings.viewAdmin)}
        </Typography>
        <IconButton size='small' onClick={handleClose} sx={styles.drawerCloseIcon()}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Styled.Header>
      <Box p={5}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          {/* first name  */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='first_name'
              control={control}
              rules={adminValRule.first_name}
              render={({ field: { value, onChange } }) => (
                <TextField
                  id={'admin-first-name'}
                  inputProps={{ 'data-testid': 'admin-first-name', readOnly: title === 'view' ? true : false }}
                  value={value}
                  label={t('FirstNameLabel')}
                  onChange={onChange}
                  placeholder={t(strings.adminNamePlaceHolder)}
                  error={Boolean(errors.first_name)}
                />
              )}
            />
            {title != 'view' && errorMessage(errors?.first_name)}
          </FormControl>

          {/* last name  */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='last_name'
              control={control}
              rules={adminValRule.last_name}
              render={({ field: { value, onChange } }) => (
                <TextField
                  id={'admin-last-name'}
                  inputProps={{ 'data-testid': 'admin-last-name', readOnly: title === 'view' ? true : false }}
                  value={value}
                  label={t('LastNameLabel')}
                  onChange={onChange}
                  placeholder={t(strings.adminLastNamePlaceHolder)}
                  error={Boolean(errors.last_name)}
                />
              )}
            />
            {title != 'view' && errorMessage(errors?.last_name)}
          </FormControl>

          {/* Phone number */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name={strings.mobileKey}
              control={control}
              rules={adminValRule.mobile_no}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type='text'
                  value={value}
                  label={t(strings.mobileLabel)}
                  autoComplete='off'
                  onInput={e => (e.target.value = e.target.value.slice(0, 10))}
                  onChange={e => {
                    onChange(e)
                    trigger(strings.mobileKey)
                  }}
                  inputProps={{ 'data-testid': 'admin-mobile-no', readOnly: title === 'view' ? true : false }}
                  placeholder={t(strings.mobilePlaceholder)}
                  error={Boolean(errors.mobile_no)}
                  id={'admin-phone-no'}
                />
              )}
            />
            {title != 'view' && errorMessage(errors?.mobile_no)}
          </FormControl>

          {/* email  */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='email'
              control={control}
              rules={adminValRule.email}
              render={({ field: { value, onChange } }) => (
                <TextField
                  inputProps={{ 'data-testid': 'admin-email', readOnly: title === 'view' ? true : false }}
                  id={'email-admin'}
                  value={value}
                  label={t(strings.adminEmailLabel)}
                  onChange={onChange}
                  placeholder={t(strings.adminEmailPlaceHolder)}
                  error={Boolean(errors.email)}
                />
              )}
            />
            {errors.email && errorMessage(errors?.email)}
          </FormControl>

          {/* password  */}
          {title === 'add' ? (
            <FormControl fullWidth sx={styles.drawerformMargin()}>
              <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                {t(strings.password)}
              </InputLabel>
              <Controller
                name='password'
                control={control}
                rules={adminValRule.password}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    value={value}
                    onBlur={onBlur}
                    label={t(strings.password)}
                    onChange={onChange}
                    id={'password-admin'}
                    error={Boolean(errors.password)}
                    type={showPassword ? 'text' : 'password'}
                    inputProps={{ 'data-testid': 'admin-password' }}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          onMouseDown={e => e.preventDefault()}
                          onClick={() => setShowPassword(!showPassword)}
                          data-testid={'show-admin-password'}
                        >
                          <Icon
                            icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'}
                            fontSize={20}
                            color={errors.password && 'red'}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
              {errors.password && errorMessage(errors?.password)}
            </FormControl>
          ) : title === 'edit' ? (
            <FormControl fullWidth sx={styles.drawerformMargin()}>
              <MenuItem
                key='delete'
                id={'password-admin'}
                data-testid='admin-reset-password'
                onClick={handleResetPassword}
              >
                <IconButton size='small'>
                  <Icon icon='mdi:edit-outline' fontSize='1.50rem' />
                </IconButton>
                <Typography sx={styles.drawerformText()}>{t(strings.adminResetpassword)}</Typography>
              </MenuItem>
            </FormControl>
          ) : null}

          {/* country  */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='country_u_id'
              control={control}
              rules={adminValRule.country_u_id}
              render={({ field: { value, onChange } }) => {
                return (
                  <Autocomplete
                    readOnly={title === 'view' ? true : false}
                    value={value}
                    error={Boolean(errors.country_u_id)}
                    id={'select-country'}
                    options={country || []}
                    onChange={(event, value) => {
                      onChange(value)
                    }}
                    getOptionLabel={option => {
                      return capitalizeText(option.name) || ''
                    }}
                    renderOption={(props, option) => {
                      return <li {...props}>{capitalizeText(option?.name ?? '')}</li>
                    }}
                    renderInput={params => (
                      <TextField
                        error={Boolean(errors.country_u_id)}
                        {...params}
                        label={t(strings.adminCountryLabel)}
                      />
                    )}
                    data-testid='admin-country'
                  />
                )
              }}
            />
            {errors.country_u_id && errorMessage(errors?.country_u_id)}
          </FormControl>

          {/* role  */}
          <FormControl fullWidth sx={styles.drawerformMargin()}>
            <Controller
              name='role_u_id'
              control={control}
              rules={adminValRule.role_u_id}
              render={({ field: { value, onChange } }) => {
                return (
                  <Autocomplete
                    readOnly={title === 'view' ? true : false}
                    value={value}
                    error={Boolean(errors.role_u_id)}
                    id={'select-admin-role'}
                    options={roleData || []}
                    onChange={(event, value) => {
                      onChange(value)
                    }}
                    data-testid='admin-role'
                    getOptionLabel={option => {
                      return capitalizeText(option.name) || ''
                    }}
                    renderOption={(props, option) => {
                      return <li {...props}>{capitalizeText(option?.name ?? '')}</li>
                    }}
                    renderInput={params => (
                      <TextField error={Boolean(errors.role_u_id)} {...params} label={t(strings.adminRoleLabel)} />
                    )}
                  />
                )
              }}
            />
            {errorMessage(errors?.role_u_id)}
          </FormControl>

          {/* status  */}
          {ability?.can('status', 'admin-management') && (
            <FormControl fullWidth sx={styles.drawerformMargin()}>
              <Controller
                name='activity_status'
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Switch
                    disabled={title === 'view' ? true : false}
                    id={'status-admin'}
                    inputProps={{ 'data-testid': 'admin-status', 'aria-label': 'controlled' }}
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
            </FormControl>
          )}

          <Box sx={styles.drawerformButton()}>
            {title === 'view' ? (
              <Button size='large' variant='outlined' color='secondary' onClick={handleClose} id={'back-button-admin'}>
                {t(strings.backButton)}
              </Button>
            ) : (
              <>
                <Button
                  size='large'
                  type='submit'
                  variant='contained'
                  sx={styles.drawerformButtonMargin()}
                  id={'submit-button-admin'}
                  data-testid={'admin-submit-button'}
                >
                  {t(strings.submitButton)}
                </Button>
                <Button
                  size='large'
                  variant='outlined'
                  color='secondary'
                  onClick={handleClose}
                  id={'cancel-button-admin'}
                  data-testid={'admin-cancel-button'}
                >
                  {t(strings.cancelButton)}
                </Button>
              </>
            )}
          </Box>
        </form>
      </Box>

      <ResetPasswordDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={`${t('ResetPasswordText')} : @${capitalizeText(dataStore?.full_name)}`}
        onConfirm={body => {
          updatePassword(body)
        }}
      />
    </Drawer>
  )
}

SidebarAddUser.acl = {
  subject: 'admin-management',
  action: 'read'
}

export default SidebarAddUser
