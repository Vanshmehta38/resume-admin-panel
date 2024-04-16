export const forgotPasswordIllustrationContainer = () => ({
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

export const forgotPasswordTextBox = () => ({
  mb: 6
})

export const emailBox = () => ({
  mb: 4
})

export const resetCode = () => ({
  mb: 5.25
})

export const button = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const cardImage = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: 5
})
