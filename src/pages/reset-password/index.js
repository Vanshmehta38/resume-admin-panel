// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { CircularProgress } from '@mui/material'

// ** Component Imports
import BackgroundImage from '@components/background-image/login-mask-2'
import logo from '@images/optilab-name-logo.png'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { Controller, useForm } from 'react-hook-form'

// ** Layout Imports
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Strings and Routes Imports
import { routes } from '@routes'

// ** Custom Functions
import { errorMessage } from '@functions/error-message'
import { resetPasswordRulesFunction } from '@validations/reset-password'

// ** i18 Imports

// ** Api imports
import { resetPassword } from '@api/auth'
import { useTranslation } from 'react-i18next'

// ** Styles and Styled Components Imports
import * as Styled from '@styles-page/reset-password/styled-components'
import * as styles from '@styles-page/reset-password/styles'

// ** jwt Import
import jwt from 'jsonwebtoken'
import toast from 'react-hot-toast'

const ResetPassword = () => {
  // ** States
  const [values, setValues] = useState({
    showNewPassword: false,
    showConfirmNewPassword: false
  })

  const [emailVerify, setEmailVerify] = useState(null)
  const [loginButton, setLoginButton] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const { t } = useTranslation()

  // ** Vars
  const router = useRouter()
  const data = router?.query
  const resetPasswordRules = resetPasswordRulesFunction()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** show new password
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // ** show confirm new password
  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: resetPasswordRules.defaultValues
  })

  // ** submit function
  const onSubmit = async data => {
    setLoginButton(true)

    const body = {
      email: emailVerify,
      password: data.password
    }

    await resetPassword(body).then(res => {
      if (res?.status) {
        router.push(routes.login)
      } else {
        setLoginButton(false)
      }
    })
  }

  useEffect(() => {
    if (data && Object.keys(data)?.length != 0) {
      jwt.verify(data.k, process.env.NEXT_PUBLIC_API_SECRET_KEY, (error, decoded) => {
        if (error) {
          if (error?.name === 'TokenExpiredError') {
            toast.error('Timed out')
          }
        } else {
          setEmailVerify(decoded.email)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, router])

  return (
    <Box className='content-right'>
      <Box sx={styles.resetPasswordIllustrationContainer}>
        <Styled.ResetPasswordIllustrationWrapper>
          <Box sx={styles.rightWrapperBox(hidden)}>
            <Styled.BoxWrapper>
              <Box sx={styles.cardImage}>
                <Image
                  src={logo}
                  alt={t('altLogoImage')}
                  width={150}
                  height={150}
                  loading='eager'
                  style={styles.logoImage()}
                />
              </Box>
              <Box sx={styles.resetPasswordTextBox}>
                <Styled.TypographyStyled variant='h5'>{t('resetPasswordTitle')}</Styled.TypographyStyled>
                <Typography variant='body2'>{t('resetPasswordText')}</Typography>
              </Box>
              <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                {/* new password */}
                <FormControl fullWidth sx={styles.passwordBox}>
                  <InputLabel error={Boolean(errors.password)}>{t('newPassword')}</InputLabel>
                  <Controller
                    name='password'
                    control={control}
                    rules={resetPasswordRules.password}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        autoFocus
                        value={value}
                        label={t('newPassword')}
                        onChange={onChange}
                        inputProps={{ 'data-testid': 'new-password' }}
                        id='reset-password-new-password'
                        type={values.showNewPassword ? 'text' : 'password'}
                        error={Boolean(errors.password)}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              id={'show-new-password'}
                              onClick={handleClickShowNewPassword}
                              data-testid='show-new-password'
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

                {/* confirm password */}
                <FormControl fullWidth sx={styles.passwordBox()}>
                  <InputLabel error={Boolean(errors.confirm_password)}>{t('confirmPassword')}</InputLabel>
                  <Controller
                    name='confirm_password'
                    control={control}
                    rules={{
                      ...resetPasswordRules.confirm_password,
                      validate: value => value === getValues('password') || t('confirmPasswordMatchErrorMsg')
                    }}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        value={value}
                        label={t('confirmPassword')}
                        id='reset-password-confirm-password'
                        type={values.showConfirmNewPassword ? 'text' : 'password'}
                        inputProps={{ 'data-testid': 'confirm-password' }}
                        onChange={onChange}
                        error={Boolean(errors.confirm_password)}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              id={'show-new-confirm-password'}
                              edge='end'
                              aria-label='toggle password visibility'
                              data-testid='show-new-confirm-password'
                              onClick={handleClickShowConfirmNewPassword}
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

                <Button
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  data-testid='set-new-password'
                  sx={styles.setPasswordButton}
                  id={'set-new-password-button'}
                  disabled={loginButton ? true : false}
                >
                  {loginButton ? <CircularProgress size={24} color='inherit' /> : t('setNewPassword')}
                </Button>
                <Box sx={styles.backToLoginBox}>
                  <Typography href={routes.login} component={Link} sx={styles.backToLoginText}>
                    <Icon icon='mdi:chevron-left' fontSize='2rem' />
                    <span id={'back-to-login-button'}>{t('backToLogin')}</span>
                  </Typography>
                </Box>
              </form>
            </Styled.BoxWrapper>
          </Box>
        </Styled.ResetPasswordIllustrationWrapper>
        <BackgroundImage image={`/images/pages/auth-v2-reset-password-mask-${theme.palette.mode}.png`} />
      </Box>
    </Box>
  )
}

ResetPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ResetPassword.guestGuard = true

export default ResetPassword
