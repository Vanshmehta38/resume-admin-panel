// ** React Import
import { useState } from 'react'

// ** Next Imports
import Image from 'next/image'
import { useRouter } from 'next/router'

// ** JWT import
import { sign } from 'jsonwebtoken'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { CircularProgress } from '@mui/material'

// ** Component Imports
import BackgroundImage from '@components/background-image/login-mask-2'
import logo from '@images/optilab-name-logo.png'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks
import { Controller, useForm } from 'react-hook-form'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Strings and Routes Imports
import { routes } from '@routes'

// ** API Imports
import { verifyEmail } from '@api/auth'

// ** Custom Functions
import { errorMessage } from '@functions/error-message'
import { forgotPasswordRulesFunction } from '@validations/forgot-password'

// ** i18 Imports
import { useTranslation } from 'react-i18next'

// ** Styles and Styled Components Imports
import * as Styled from '@styles-page/forgot-password/styled-components'
import * as styles from '@styles-page/forgot-password/styles'

const ForgotPassword = () => {
  // ** Hooks
  const theme = useTheme()

  // ** Vars
  const router = useRouter()
  const { t } = useTranslation()
  const forgotPasswordRules = forgotPasswordRulesFunction()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** state
  const [loginButton, setLoginButton] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: forgotPasswordRules.defaultValues
  })

  const onSubmit = async data => {
    setLoginButton(true)

    const body = {
      email: data?.email
    }

    await verifyEmail(body).then(async res => {
      if (res?.status) {
        const base64 = await sign(body, process.env.NEXT_PUBLIC_API_SECRET_KEY, { expiresIn: '7m' })

        router.push({ pathname: routes.verifyEmail, query: { k: base64 } })
      }
      setLoginButton(false)
    })
  }

  return (
    <Box className='content-right'>
      <Box sx={styles.forgotPasswordIllustrationContainer}>
        <Styled.ForgotPasswordIllustrationWrapper>
          <Box sx={styles.rightWrapperBox(hidden)}>
            <Styled.BoxWrapper>
              <Box sx={styles.cardImage}>
                <Image src={logo} alt={t('altLogoImage')} loading='eager' priority={true} style={styles.logoImage()} />
              </Box>

              <Box sx={styles.forgotPasswordTextBox}>
                <Styled.TypographyStyled variant='h5'>{t('forgotPasswordTitle')}</Styled.TypographyStyled>
                <Typography variant='body2'>{t('forgotPasswordText')}</Typography>
              </Box>
              <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                {/* email */}
                <FormControl fullWidth sx={styles.emailBox}>
                  <Controller
                    name='email'
                    control={control}
                    rules={forgotPasswordRules.email}
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

                <Button
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  sx={styles.resetCode}
                  data-testid='send-code-button'
                  id={'send-reset-code-button'}
                  disabled={loginButton ? true : false}
                >
                  {loginButton ? <CircularProgress size={24} color='inherit' /> : t('resetCodeText')}
                </Button>
              </form>
              <Typography sx={styles.button}>
                <Styled.LinkStyled href={routes.login}>
                  <Icon icon='mdi:chevron-left' fontSize='2rem' />
                  <span>{t('backToLogin')}</span>
                </Styled.LinkStyled>
              </Typography>
            </Styled.BoxWrapper>
          </Box>
        </Styled.ForgotPasswordIllustrationWrapper>
        <BackgroundImage image={`/images/pages/auth-v2-forgot-password-mask-${theme.palette.mode}.png`} />
      </Box>
    </Box>
  )
}

ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ForgotPassword.guestGuard = true

export default ForgotPassword
