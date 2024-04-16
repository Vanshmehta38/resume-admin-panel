import { color } from '@colors'

export const verifyEmailIllustrationContainer = () => ({
  flex: 1,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center'
})

export const rightWrapperBox = hidden => ({
  p: 7,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'background.paper',
  borderRadius: '2%',
  width: !hidden ? '55%' : '100%',
  filter: 'drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))'
})

export const logoContainer = () => ({
  top: 30,
  left: 40,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center'
})

export const logoImage = () => ({
  height: 'auto'
})

export const verifyEmailBox = () => ({
  mb: 6
})

export const verifyEmail = () => ({
  mb: 2
})

export const verifyEmailText = smBreakpoint => ({
  color: 'text.secondary',
  ...(smBreakpoint && {
    fontSize: '14px'
  })
})

export const verifyEmailDynamic = smBreakpoint => ({
  ...(smBreakpoint && {
    fontSize: '14px'
  })
})

export const otpBox = () => ({
  m: 4,
  mt: 5,
  display: 'flex',
  justifyContent: 'center'
})

export const otpInputBox = smBreakpoint => ({
  outline: '0px',
  width: '45px',
  height: '45px',
  fontSize: '23px',
  textAlign: 'center',
  marginLeft: '10px',
  marginRight: '10px',
  outline: '0px',
  border: '1px solid #CFD3DB',
  borderRadius: '4px',
  ...(smBreakpoint && {
    width: '30px',
    height: '30px',
    marginLeft: '3px',
    marginRight: '3px',
    fontSize: 'calc(15px + 1vw)'
  })
})

export const otpTimerText = () => ({
  color: color.primary,
  fontWeight: '400',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center',
  margin: '4px 0px 2px 0px'
})

export const resendBox = () => ({
  mt: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2
})

export const getMailText = () => ({
  color: 'text.secondary'
})

export const resendText = () => ({
  color: 'primary.main',
  cursor: 'pointer',
  textTransform: 'Capitalize',
  fontSize: '1rem',
  fontWeight: '400',
  padding: '6px',
  '&:hover': { backgroundColor: 'none' }
})

export const cardImage = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: 5
})

export const skipButton = smBreakpoint => ({
  ...(smBreakpoint && { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content' })
})
