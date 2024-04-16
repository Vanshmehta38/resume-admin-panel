// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Image from 'next/image'
import Link from 'next/link'

// ** MUI Components
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Component Imports
import BackgroundImage from '@components/background-image/login-mask-2'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Third Party Imports
import { Controller, useForm } from 'react-hook-form'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Routes Imports
import { routes } from '@routes'

// ** Custom Functions
import { fetchData } from '@functions/device-info'
import { errorMessage } from '@functions/error-message'
import { loginRulesFunction } from '@validations/login'

// ** i18 Imports
import { useTranslation } from 'react-i18next'

// ** Third Party Imports
import moment from 'moment'
import { deviceDetect } from 'react-device-detect'

// ** Styles and Styled Components Imports
import * as Styled from '@styles-page/login/styled-components'
import * as styles from '@styles-page/login/styles'

// ** Image import
import optilabLogo from '@images/optilab-name-logo.png'

const LoginPage = () => {
  // ** States
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [ipAddressData, setIpAddressData] = useState(null)
  const [loginButton, setLoginButton] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const { t } = useTranslation()
  const theme = useTheme()

  // ** Vars
  const loginRules = loginRulesFunction()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: loginRules.defaultValues
  })

  // **  submit function
  const onSubmit = async data => {
    setLoginButton(true)
    let ipData = ipAddressData
    const deviceInfo = deviceDetect()

    let deviceData = `${deviceInfo?.osName} `
    if (deviceInfo?.model) {
      deviceData = `${deviceInfo?.vendor} ${deviceInfo?.model},${deviceInfo?.os}`
    }

    if (!ipData) {
      ipData = await fetchData()
      setIpAddressData(ipData)
    }

    let body = {
      ip_address: ipData?.ip,
      country: ipData?.country,
      city: ipData?.city,
      region: ipData?.region,
      time_zone: ipData?.timezone,
      device: `${deviceData}`,
      lat_long: ipData?.loc,
      email: data?.email,
      password: data?.password,
      rememberMe: rememberMe
    }

    let rememberData = {
      rememberMe: rememberMe,
      date: moment().toDate()
    }

    localStorage.setItem('rememberMe', JSON.stringify(rememberData))

    const response = await auth.login(body)
    if (response || response === undefined) {
      setLoginButton(false)
    }
  }

  return (
    <Box className='content-right'>
      <Box sx={styles.loginIllustrationContainer}>
        <Styled.LoginIllustrationWrapper>
          <Box sx={styles.rightWrapperBox(hidden)}>
            <Styled.BoxWrapper>
              <Box sx={styles.cardImage}>
                <Image src={optilabLogo} alt='OPTILAB LOGO' priority={true} style={styles.logoImage()} />
              </Box>
              <Box sx={styles.welcomeTextBox}>
                <Styled.TypographyStyled variant='h5'>{`${t('welcomeToLogin')} ${themeConfig.templateName}!`}</Styled.TypographyStyled>
                <Typography variant='body2'>{t('signInText')}</Typography>
              </Box>

              <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <FormControl fullWidth sx={styles.loginEmailBox}>
                  <Controller
                    name='email'
                    control={control}
                    rules={loginRules.email}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <TextField
                        autoFocus
                        id='email'
                        label={t('Email')}
                        value={value}
                        inputProps={{ 'data-testid': 'email' }}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.email)}
                      />
                    )}
                  />
                  {errorMessage(errors?.email)}
                </FormControl>
                {/* Password */}
                <FormControl fullWidth>
                  <InputLabel htmlFor='password' error={Boolean(errors.password)}>
                    {t('password')}
                  </InputLabel>
                  <Controller
                    name='password'
                    control={control}
                    rules={loginRules.password}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <OutlinedInput
                        value={value}
                        onBlur={onBlur}
                        label={t('password')}
                        onChange={onChange}
                        id='password'
                        autoComplete='off'
                        inputProps={{ 'data-testid': 'password' }}
                        error={Boolean(errors.password)}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              id='show-password-icon'
                              data-testid='show-password-icon'
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {errorMessage(errors?.password)}
                </FormControl>

                <Box sx={styles.forgotPasswordBox}>
                  <Styled.FormControlLabel
                    label={t('rememberMe')}
                    control={
                      <Checkbox
                        checked={rememberMe}
                        data-testid='rememberMe'
                        onChange={e => setRememberMe(e.target.checked)}
                      />
                    }
                  />
                  <Typography
                    variant='body2'
                    component={Link}
                    id={'forgot-password'}
                    href={routes.forgotPassword}
                    sx={styles.forgotPasswordText}
                    data-testid='forgot-password'
                  >
                    {t('forgotPassword')}
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  data-testid='login'
                  id='login'
                  disabled={loginButton ? true : false}
                >
                  {loginButton ? <CircularProgress size={24} color='inherit' /> : t('login')}
                </Button>
              </form>
            </Styled.BoxWrapper>
          </Box>
        </Styled.LoginIllustrationWrapper>
        <BackgroundImage />
      </Box>
    </Box>
  )
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
