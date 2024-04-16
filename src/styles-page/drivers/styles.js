// ** list page card header style ** //

export const spinnerHeight = () => ({ height: '80vh' })

export const paperPropsStyle = () => ({ style: { minWidth: '8rem' } })

// index
export const customImage = () => ({ mr: 3, width: 38, height: 38, cursor: 'pointer' })

export const customWithoutImage = () => ({ mr: 3, width: 38, height: 38, fontSize: '1rem' })

export const linkStyle = () => ({ display: 'flex', alignItems: 'center', textDecoration: 'none' })

export const dataGridStyle = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

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

export const typographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '28px'
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

export const driverStatusCustomChipStyle = () => ({
  height: 25,
  fontWeight: 400,
  fontSize: '0.875rem',
  textTransform: 'capitalize',
  '& .MuiChip-label': { mt: -0.25 }
})

export const cardHeaderMainBox = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const cardHeaderBox = () => ({ display: 'flex', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const driversRowOptionMenuItemStyle = () => ({
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

export const driversTableHeaderSecondBoxStyle = () => ({
  gap: 4,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'end'
})

export const driversTableHeaderThirdBoxStyle = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center'
})

// form
export const gridStyle = mdBreakpoint => ({ display: mdBreakpoint ? 'none' : 'block' })

export const fragmentBoxStyle = () => ({ borderColor: 'rgb(255,250,255,0.5)', borderRadius: '10px', padding: '1.3rem' })

export const fragmentLegendStyle = () => ({ fontWeight: '400', fontSize: '12px', lineHeight: '12px', opacity: '80%' })

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

export const actionButton = () => ({ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 })

export const actionCard = () => ({ mt: 4, pt: 4 })

// view
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

export const profileCardContentBox = () => ({ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 })

export const profileCardContentSubBox = () => ({ display: 'flex', alignItems: 'center', gap: 4 })

export const profileViewLineHeight = () => ({ lineHeight: 1.3 })

export const profileActionBox = () => ({ display: 'flex', justifyContent: 'center', gap: 4 })

export const profileCardContentDivider = () => ({ mt: theme => `${theme.spacing(4)} !important` })

export const profileInfoMainBox = () => ({ pt: 3, pb: 1 })

export const profileInfoBox = () => ({ display: 'flex', mb: 2.7, alignItems: 'baseline', gap: 2 })

export const profileInfoBoxTypography = () => ({ fontWeight: 500, fontSize: '14px', lineHeight: '21.98px' })

export const profileInfoSubTypography = () => ({ fontWeight: 500, fontSize: '14px', lineHeight: '20.02px' })

export const profileTabList = () => ({ borderBottom: theme => `1px solid ${theme.palette.divider}` })

export const profileTabPadding = () => ({ p: 0 })

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

export const columnBox = () => ({
  display: 'flex',
  alignItems: 'center'
})

export const columnMainBox = () => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column'
})

export const columnTypography = () => ({
  color: 'text.primary',
  textDecoration: 'none',
  cursor: 'pointer'
})

export const cardHeader = () => ({ pb: 6, '& .MuiCardHeader-title': { letterSpacing: '.15px' } })

export const textDecoration = () => ({ textDecoration: 'none', cursor: 'pointer' })

export const columnsFields = () => ({ color: 'secondary.main', fontWeight: 500 })

export const columnsFieldsLight = () => ({ color: 'secondary', fontWeight: 500 })

export const customChip = () => ({
  '& .MuiChip-label': { textTransform: 'capitalize' },
  '&:not(:last-of-type)': { mr: 2 }
})

export const marginBottomStyle = () => ({ mb: { xs: 0, sm: 6 } })

export const userTripCostSlider = () => ({ mt: { xs: 4, sm: 0 } })

export const searchButtonStyle = () => ({ px: '2rem' })

export const userTripCard = () => ({ mt: 6 })

export const dataGrid = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const userRatingIcon = () => ({ color: '#4C4E6461' })

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const driverTripMainBox = () => ({
  px: 5,
  py: 2
})

export const driverTripImage = () => ({
  width: '100%',
  height: 'auto',
  marginTop: '15px',
  marginBottom: '20px'
})

export const driverTrackingText = () => ({
  mb: 3
})

export const driverTripDetailBox = () => ({
  display: 'flex',
  mb: 1.2,
  alignItems: 'baseline',
  justifyContent: 'space-between'
})

export const driverTripDetailsText = () => ({
  fontSize: '17px',
  fontWeight: 500
})

export const driverTripTypography = () => ({
  fontWeight: 500,
  fontSize: '16px',
  wordBreak: 'break-word',
  textAlign: 'end'
})

export const tripCancelButtonStyle = () => ({ px: '3.5rem', mt: 6 })

export const noDataFoundBox = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
})

export const noDataFoundTypography = () => ({ mb: 2.5, letterSpacing: '0.18px', fontSize: '1.5rem !important' })
