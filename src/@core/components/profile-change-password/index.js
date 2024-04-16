// ** React Imports
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

// ** MUI Imports
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'

// ** Custom Functions
import { errorMessage } from '@functions/error-message'
import { resetPasswordRulesFunction } from '@validations/reset-password'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styles and Styled Components Imports
import * as styles from './styles'

export default function ProfileChangePassword({ onChangePassword, resetForm }) {
  // ** States
  const [values, setValues] = useState({
    showNewPassword: false,
    showConfirmNewPassword: false
  })

  // ** Vars
  const resetPasswordRules = resetPasswordRulesFunction()
  const { t } = useTranslation()

  const {
    control,
    getValues,
    reset,
    trigger,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: resetPasswordRules.defaultValues
  })

  useEffect(() => {
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetForm])

  // Handle Password
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // Handle Confirm Password
  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  const onSubmit = async data => {
    onChangePassword(data)
  }

  return (
    <>
      <Card>
        <CardHeader title={t('changePassword')} />
        <CardContent>
          <Alert icon={false} severity='warning' sx={styles.passwordBox()}>
            <AlertTitle sx={styles.passwordAlertBox()}>{t('profileUpdatePasswordNote')}</AlertTitle>
            {t('profileUpdatePasswordMessage')}
          </Alert>

          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={6}>
              {/* New Password */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='user-view-security-new-password'>{t('profileNewPasswordLabel')}</InputLabel>
                  <Controller
                    name='password'
                    control={control}
                    rules={resetPasswordRules.password}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        autoComplete='off'
                        label={t('profileNewPasswordLabel')}
                        value={value}
                        id='profile-view-security-new-password'
                        onChange={e => {
                          onChange(e)
                          trigger('password')
                        }}
                        type={values.showNewPassword ? 'text' : 'password'}
                        inputProps={{ 'data-testid': 'new-password' }}
                        error={Boolean(errors.password)}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              id={'profile-show-new-password'}
                              onClick={handleClickShowNewPassword}
                              data-testid='show-new-password'
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                            >
                              <Icon icon={values.showNewPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {errors.password && errorMessage(errors?.password)}
                </FormControl>
              </Grid>

              {/* Confirm Password */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='user-view-security-confirm-new-password'>
                    {t('profileConfirmNewPasswordLabel')}
                  </InputLabel>
                  <Controller
                    name='confirm_password'
                    control={control}
                    rules={{
                      ...resetPasswordRules.confirm_password,
                      validate: value => value === getValues('password') || t('notMatchPasswordText')
                    }}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        autoComplete='off'
                        value={value}
                        label={t('profileConfirmNewPasswordLabel')}
                        id='profile-view-security-confirm-new-password'
                        inputProps={{ 'data-testid': 'confirm-password' }}
                        type={values.showConfirmNewPassword ? 'text' : 'password'}
                        onChange={e => {
                          onChange(e)
                          trigger('confirm_password')
                        }}
                        error={Boolean(errors.confirm_password)}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              id={'profile-show-new-confirm-password'}
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                              onClick={handleClickShowConfirmNewPassword}
                              data-testid='show-new-confirm-password'
                            >
                              <Icon icon={values.showConfirmNewPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {errors.confirm_password && errorMessage(errors?.confirm_password)}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button type='submit' variant='contained' id='change-password' data-testid='set-new-password'>
                  {t('changePassword')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
