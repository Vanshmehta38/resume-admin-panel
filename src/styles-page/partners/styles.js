// ** list page card header style ** //

export const spinnerHeight = () => ({ height: '80vh' })

export const paperPropsStyle = () => ({ style: { minWidth: '8rem' } })

// index
export const customImage = () => ({ mr: 3, width: 38, height: 38, cursor: 'pointer' })

export const customWithoutImage = () => ({ mr: 3, width: 38, height: 38, fontSize: '1rem' })

export const linkStyle = () => ({ display: 'flex', alignItems: 'center', textDecoration: 'none' })

export const viewTypography = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21.98px'
})

export const customAvatarStyle = () => ({ mr: 3, width: 34, height: 34 })

export const captionStyle = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '12px',
  lineHeight: '19.28px'
})

export const bodyTypographyStyle = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21px',
  opacity: '80%'
})

export const countryTypographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '28px'
})

export const cityTypographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px'
})

export const cardHeaderMainBox = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const dataGrid = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const partnersRowOptionMenuItemStyle = () => ({
  p: 0
})

export const menuItemStyle = () => ({ '& svg': { mr: 2 } })

export const viewTypographyBlack = () => ({
  textTransform: 'capitalize',
  textDecoration: 'none'
})

export const listCardHeaderMainBox = () => ({ display: 'flex', alignItems: 'center', gap: 4 })

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

export const partnersTableHeaderSecondBoxStyle = () => ({
  gap: 4,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'end'
})

export const partnersTableHeaderThirdBoxStyle = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center'
})

// drawer

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const drawerformMargin = () => ({ mb: 6 })

export const drawerformButton = () => ({ display: 'flex', alignItems: 'center' })

export const drawerformButtonMargin = () => ({ mr: 3 })

// form

export const fragmentBoxStyle = () => ({ borderColor: 'rgb(255,250,255,0.5)', borderRadius: '10px', padding: '1.3rem' })

export const imagePreViewButton = () => ({
  width: '248px',
  height: '168px',
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(217, 217, 217, 0.5)',
  border: '2px dotted rgba(0, 0, 0, 0.5)',
  boxShadow: 'none',
  marginRight: '10px',
  position: 'relative'
})

export const imagePreViewBox = () => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative'
})

export const imagePreViewStyle = () => ({
  width: 'auto',
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '150px',
  borderRadius: '9px'
})

export const imageRemoveIcon = () => ({ position: 'absolute', top: -10, right: -10 })

export const imageUploadButton = error => ({
  width: '248px',
  height: '168px',
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(217, 217, 217, 0.5)',
  border: error ? `3px dotted red` : '3px dotted rgb(100,100 ,100,0.5)',
  boxShadow: 'none'
})

export const imageUploadBox = () => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative'
})

export const imageUploadTextStyle = error => ({
  color: error ? 'error.main' : 'text.primary',
  textTransform: 'capitalize'
})

export const imageInputStyle = () => ({ display: 'none' })

export const cardStyle = () => ({ mt: 4 })

export const actionBoxStyle = () => ({ display: 'flex', justifyContent: 'space-between' })

// view

export const profileTabList = () => ({ borderBottom: theme => `1px solid ${theme.palette.divider}` })

export const dividerStyle = () => ({ mt: theme => `${theme.spacing(4)} !important` })

export const profilePadding = () => ({ p: 0 })

export const profileCardContent = () => ({ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' })

export const profileCustomAvatar = () => ({ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' })

export const profileViewBox = () => ({ padding: '10px 10px 0px 10px' })

export const profileCustomChipStyle = () => ({
  height: 25,
  fontWeight: 400,
  borderRadius: '5px',
  fontSize: '0.875rem',
  textTransform: 'capitalize',
  '& .MuiChip-label': { mt: -0.25 }
})

export const profileTimeLineDot = () => ({ borderWidth: '0px', margin: '6.5px 0' })

export const profileStatusStyle = value => ({ color: value ? '#72E128' : '#FF4D49' })

export const profileMargin = () => ({ my: 1 })

export const profileCardContentBox = () => ({ display: 'flex', alignItems: 'center', justifyContent: 'center' })

export const profileCardContentSubBox = () => ({ display: 'flex', alignItems: 'center', gap: 4 })

export const profileViewLineHeight = () => ({ lineHeight: 1.3 })

export const profileActionBox = () => ({ display: 'flex', justifyContent: 'center', gap: 4 })

export const typographyStyle = () => ({ fontSize: '16px', fontWeight: '400' })

export const driverStatusCustomChipStyle = () => ({
  height: 25,
  fontWeight: 400,
  fontSize: '0.875rem',
  textTransform: 'capitalize',
  '& .MuiChip-label': { mt: -0.25 }
})

export const preViewImageButton = () => ({
  width: '100%',
  height: '170px',
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(217, 217, 217, 0.5)',
  border: '2px dotted rgba(0, 0, 0, 0.5)',
  boxShadow: 'none',
  marginRight: '10px',
  position: 'relative'
})

export const noDataFoundBox = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
})

export const noDataFoundTypography = () => ({ mb: 2.5, letterSpacing: '0.18px', fontSize: '1.5rem !important' })
