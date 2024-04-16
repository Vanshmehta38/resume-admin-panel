// ** list page card header style ** //

// index
export const adminsRowOptionMenuItemStyle = () => ({
  p: 0
})

export const viewTypographyBlack = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none'
})

export const viewTypography = () => ({
  textTransform: 'capitalize',
  textDecoration: 'none'
})

export const listCardHeaderMainBox = () => ({ display: 'flex', alignItems: 'center', gap: 6 })

export const listCardHeaderInsideBox = () => ({
  gap: 2,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-end'
})

export const listPageCardHeaderTextField = () => ({
  width: {
    xs: 1,
    sm: 'auto'
  },
  '& .MuiInputBase-root > svg': {
    mr: 2
  }
})

export const adminsTableHeaderSecondBoxStyle = () => ({
  gap: 4,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'end'
})

export const adminsTableHeaderThirdBoxStyle = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center'
})

// drawer

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const drawerformMargin = () => ({ mb: 6 })

export const drawerformText = () => ({ color: 'grey', fontSize: '15px', ml: 1 })

export const drawerformButton = () => ({ display: 'flex', alignItems: 'center' })

export const drawerformButtonMargin = () => ({ mr: 3 })

export const cardHeaderMainBox = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const genderChipCell = () => ({
  '& .MuiChip-label': { textTransform: 'capitalize' },
  '&:not(:last-of-type)': { mr: 3 },
  backGroundColorL: 'primary'
})

export const userTripTypography = () => ({
  fontWeight: 500,
  fontSize: '16px',
  wordBreak: 'break-word',
  textAlign: 'end'
})

export const userTripMainBox = () => ({
  px: 5,
  py: 2
})

export const userTripImage = () => ({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: '220px',
  marginTop: '15px',
  marginBottom: '20px'
})

export const userTrackingText = () => ({
  mt: 5,
  mb: 5,
  textTransform: 'capitalize',
  fontWeight: 800,
  textDecoration: 'none',
  fontSize: '18px',
  lineHeight: '21.98px'
})

export const userTripDetailsText = () => ({
  fontSize: '17px',
  fontWeight: 500
})

export const userTripDetailBox = () => ({
  display: 'flex',
  mb: 1.2,
  alignItems: 'baseline',
  justifyContent: 'space-between'
})

export const tripCancelButtonStyle = () => ({ px: '3.5rem', mt: 6 })
