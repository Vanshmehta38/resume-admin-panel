// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Image from 'next/image'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Component Imports
import BackgroundImage from '@components/background-image/login-mask-2'
import logo from '@images/optilab-name-logo.png'

// ** Third Party Imports
import toast from 'react-hot-toast'
import OtpInput from 'react-otp-input'

// ** JWT Imports
import jwt from 'jsonwebtoken'

// ** Layout Imports
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Strings and Routes Imports
import { routes } from '@routes'

// ** i18 Imports
import { useTranslation } from 'react-i18next'

// ** Api imports
import { verifyEmail, verifyOtp } from '@api/auth'

// ** Styles and Styled Components Imports
import * as Styled from '@styles-page/verify-email/styled-components'
import * as styles from '@styles-page/verify-email/styles'

const VerifyEmail = () => {
  // ** Hooks
  const theme = useTheme()
  const { t } = useTranslation()
  const router = useRouter()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const smBreakpoint = useMediaQuery(theme => theme.breakpoints.down('sm'))

  // ** Vars
  const data = router?.query
  const initMinute = 2
  const initSeconds = 0

  // ** States
  const [email, setEmail] = useState(null)
  const [emailVerify, setEmailVerify] = useState(null)
  const [otp, setOtp] = useState('')

  const [otpValid, setOtpValid] = useState(false)
  const [minutes, setMinutes] = useState(initMinute)
  const [seconds, setSeconds] = useState(initSeconds)

  // ** show email de******@gmail.com
  function obfuscateEmail(email) {
    try {
      const [localPart, domainPart] = email.split('@')

      const obfuscatedLocalPart =
        localPart.charAt(0).toUpperCase() + '*'.repeat(localPart.length - 1) + localPart.charAt(localPart.length - 0)

      return `${obfuscatedLocalPart}@${domainPart}`?.toLocaleLowerCase()
    } catch (error) {
      return t('invalidEmail')
    }
  }

  // ** otp change function
  const handleOTPChange = otpValue => {
    setOtp(otpValue)
    setOtpValid(otpValue?.length === 6)
  }

  // ** reset otp change function
  const handleResendOtp = async () => {
    toast.success(t('resendMsg'))
    setMinutes(2)
    setSeconds(0)

    setOtp('')

    let body = {
      email: emailVerify
    }

    await verifyEmail(body).then(res => {
      if (res.status) {
        setMinutes(2)
        setSeconds(0)
      }
    })
  }

  //  ** check otp function
  const checkOtp = async () => {
    let body = {
      email: emailVerify,
      otp: otp
    }

    if (otpValid) {
      await verifyOtp(body).then(res => {
        if (res?.status) {
          const base64 = jwt.sign(body, process.env.NEXT_PUBLIC_API_SECRET_KEY, { expiresIn: '7m' })

          router.push({ pathname: routes.resetPassword, query: { k: base64 } })
          router.push(routes.resetPassword)
        }
      })
    }
  }

  useEffect(() => {
    checkOtp()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpValid, router])

  // ** decode email from url
  useEffect(() => {
    if (data && Object.keys(data)?.length != 0) {
      jwt.verify(data.k, process.env.NEXT_PUBLIC_API_SECRET_KEY, (error, decoded) => {
        if (error) {
          if (error?.name === 'TokenExpiredError') {
            toast.error('Timed out')
          }
        } else {
          setEmail(obfuscateEmail(decoded.email))
          setEmailVerify(decoded.email)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, router])

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Box className='content-right'>
      <Box sx={styles.verifyEmailIllustrationContainer}>
        <Styled.VerifyEmailIllustrationWrapper>
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
              <Box sx={styles.verifyEmailBox}>
                <Typography variant='h5' sx={styles.verifyEmail}>
                  {t('verifyEmail')}
                </Typography>
                <Typography sx={styles.verifyEmailText(smBreakpoint)}>{t('verifyEmailText')}</Typography>
                <Typography fontWeight={700} mt={2} sx={styles.verifyEmailDynamic(smBreakpoint)}>
                  {email ?? ''}
                </Typography>
              </Box>
              <Styled.LinkStyled href={routes.login}>
                <Button
                  fullWidth
                  variant='contained'
                  id='skip-for-now'
                  data-testid='skipForNow'
                  sx={styles.skipButton(smBreakpoint)}
                >
                  {t('skipForNow')}
                </Button>
              </Styled.LinkStyled>
              <Box sx={styles.otpBox}>
                <OtpInput
                  value={otp}
                  OTPIsValid={otp.length === 6}
                  inputStyle={styles.otpInputBox(smBreakpoint)}
                  onChange={handleOTPChange}
                  numInputs={6}
                  renderInput={(props, index) => <input {...props} data-testid={'otpInput' + index} />}
                />
              </Box>

              <p style={styles.otpTimerText()}>
                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </p>

              <Box sx={styles.resendBox}>
                <Typography sx={styles.getMailText}>{t('getMail')}</Typography>
                <Button
                  style={styles.resendText(minutes === 0 && seconds === 0)}
                  onMouseDown={handleResendOtp}
                  disabled={minutes === 0 && seconds === 0 ? false : true}
                  data-testid='resend-button'
                >
                  {t('resend')}
                </Button>
              </Box>
            </Styled.BoxWrapper>
          </Box>
        </Styled.VerifyEmailIllustrationWrapper>
        <BackgroundImage image={`/images/pages/auth-v1-register-mask-${theme.palette.mode}.png`} />
      </Box>
    </Box>
  )
}

VerifyEmail.getLayout = page => <BlankLayout>{page}</BlankLayout>
VerifyEmail.guestGuard = true

export default VerifyEmail
