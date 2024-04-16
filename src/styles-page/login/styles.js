export const loginIllustrationContainer = () => ({
  flex: 1,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center'
})

export const logoImage = () => ({
  maxWidth: 150,
  maxHeight: 150,
  width: 'auto',
  height: 'auto'
})

export const rightWrapperBox = hidden => ({
  p: 7,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'background.paper',
  borderRadius: '2%',
  width: !hidden ? '85%' : '100%',
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

export const welcomeTextBox = () => ({
  mb: 6
})

export const loginEmailBox = () => ({
  mb: 4
})

export const forgotPasswordBox = () => ({
  my: 3,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
})

export const forgotPasswordText = () => ({
  color: 'primary.main',
  textDecoration: 'none'
})

export const cardImage = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: 5
})

export const cardImageTag = () => ({
  width: 180,
  height: 'auto'
})
