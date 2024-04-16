export const resetPasswordIllustrationContainer = () => ({
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

export const resetPasswordTextBox = () => ({
  mb: 6
})

export const passwordBox = () => ({
  mb: 4
})

export const setPasswordButton = () => ({
  mb: 5.25
})

export const backToLoginBox = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const backToLoginText = () => ({
  display: 'flex',
  '& svg': { mr: 1.5 },
  alignItems: 'center',
  color: 'primary.main',
  textDecoration: 'none',
  justifyContent: 'center',
  cursor: 'pointer'
})

export const cardImage = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: 5
})
