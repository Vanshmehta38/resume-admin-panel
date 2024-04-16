export const columnBox = () => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

export const columnMainBox = () => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column'
})

export const columnTypography = () => ({
  color: 'text.primary',
  textDecoration: 'none',
  cursor: 'pointer',
  textTransform: 'capitalize'
})

export const phone = () => ({ textDecoration: 'none', cursor: 'pointer' })

export const customImage = () => ({ mr: 3, width: 38, height: 38, cursor: 'pointer' })

export const customWithoutImage = () => ({
  mr: 3,
  width: 38,
  height: 38,
  fontSize: '1rem',
  textTransform: 'uppercase'
})

export const textDecoration = () => ({ textDecoration: 'none' })

export const spinner = () => ({
  height: '80vh'
})

export const cardHeader = () => ({ pb: 6, '& .MuiCardHeader-title': { letterSpacing: '.15px' } })

export const cardHeaderBox = () => ({ display: 'flex', alignItems: 'center', gap: 5 })

export const columnsFields = () => ({ color: 'secondary.main', fontWeight: 500, textTransform: 'capitalize' })

export const columnsFieldsLight = () => ({ color: 'secondary', fontWeight: 500 })

export const dataGrid = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const errorMessage = () => ({
  color: 'error.main'
})

export const fieldSet = theme => ({
  border: theme?.palette?.mode === 'dark' ? '1px solid #777' : '1px solid #ccc',
  padding: '25px 12px',
  marginTop: '22px',
  borderRadius: '5px'
})

export const buttonsGrid = () => ({
  mt: 5
})

export const submitButton = () => ({
  mr: 4
})

export const submitEditButton = () => ({
  mr: 4,
  mt: { xs: 2, sm: 0 }
})

export const submitCancelButton = () => ({
  mt: { xs: 2, sm: 0 }
})

export const legendTitle = () => ({
  fontWeight: 600
})

export const optionSelected = (option, value) => ({
  backgroundColor: option?.name === value?.name ? '#de223514' : 'transparent'
})

export const optionValueSelected = (option, value) => ({
  backgroundColor: option?.value === value?.value ? '#de223514' : 'transparent'
})

export const optionChannelsSelected = (channels, option) => ({
  backgroundColor: channels.some(v => v.id === option?.id) ? '#de223514' : 'transparent'
})

export const optionTemplateSelected = (option, value) => ({
  backgroundColor: option?.id === value?.id ? '#de223514' : 'transparent'
})

export const buttonStyle = () => ({ px: '2.5rem' })

export const userMargin = () => ({ my: 1 })

export const userMarginRight = () => ({ mr: 4 })

export const userTextTransform = () => ({ textTransform: 'capitalize' })

export const userAddressTextTransform = () => ({ textTransform: 'capitalize', wordBreak: 'break-word' })

export const userStatusCustomChipStyle = () => ({
  height: 25,
  fontWeight: 400,
  fontSize: '0.875rem',
  textTransform: 'capitalize',
  '& .MuiChip-label': { mt: -0.25 }
})

export const userCardContent = () => ({ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' })

export const userCustomAvatar = () => ({ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' })

export const userCustomChip = () => ({
  height: 20,
  fontWeight: 600,
  borderRadius: '5px',
  fontSize: '0.875rem',
  textTransform: 'capitalize',
  '& .MuiChip-label': { mt: -0.25 }
})

export const userLineHeight = () => ({ lineHeight: 1.3 })

export const userCardContentMainBox = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
})

export const userCardContentBox = () => ({ display: 'flex', alignItems: 'center' })

export const userCardContentDivider = () => ({ mt: theme => `${theme.spacing(4)} !important` })

export const userInfoMainBox = () => ({ pt: 3, pb: 1 })

export const userInfoBox = () => ({ display: 'flex', mb: 2.7, alignItems: 'baseline' })

export const userInfoBoxTypography = () => ({ mr: 2, fontWeight: 500, fontSize: '0.875rem' })

export const userEmailInfoBoxTypography = () => ({
  mr: 2,
  fontWeight: 500,
  fontSize: '0.875rem',
  minWidth: '110px',
  wordBreak: 'break-word'
})

export const userAddressInfoBoxTypography = () => ({
  mr: 2,
  fontWeight: 500,
  fontSize: '0.875rem',
  minWidth: '130px',
  wordBreak: 'break-word'
})

export const userDataTypography = () => ({ wordBreak: 'break-word' })

export const userCardAction = () => ({ display: 'flex', justifyContent: 'center', gap: 3 })

export const userTabList = () => ({ borderBottom: theme => `1px solid ${theme.palette.divider}` })

export const userPadding = () => ({ p: 0 })

export const userCardActions = () => ({ display: 'flex', justifyContent: 'center', alignItems: 'center' })

export const userName = () => ({ mb: 3, textTransform: 'capitalize' })

export const userOverview = () => ({ mb: 2 })

export const userWalletHistoryAmountField = row => ({
  color: row?.operation === '+' ? 'green' : 'red',
  fontWeight: 500
})

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const userTripDetailBox = () => ({
  display: 'flex',
  mb: 1.2,
  alignItems: 'baseline',
  justifyContent: 'space-between'
})

export const tripCancelButtonStyle = () => ({ px: '3.5rem', mt: 6 })

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
  width: '100%',
  height: 'auto',
  marginTop: '15px',
  marginBottom: '20px'
})

export const userTrackingText = () => ({
  mb: 3
})

export const userTripDetailsText = () => ({
  fontSize: '17px',
  fontWeight: 500
})

export const userRatingIcon = () => ({ color: '#4C4E6461' })

export const customChip = () => ({
  '& .MuiChip-label': { textTransform: 'capitalize' },
  '&:not(:last-of-type)': { mr: 2 }
})

export const searchButtonStyle = () => ({ px: '2rem' })

export const marginBottomStyle = () => ({ mb: { xs: 0, sm: 6 } })

export const userTripCard = () => ({ mt: 6 })

export const userTripCostSlider = () => ({ mt: { xs: 4, sm: 0 } })

export const userImageContainer = () => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  '@media (max-width: 420px)': {
    alignItems: 'start',
    flexDirection: 'column'
  }
})

export const userUploadImageButton = () => ({
  mt: 0,
  '@media (max-width: 420px)': {
    mt: 2.5
  }
})

export const formHelperTextStyle = () => ({
  color: 'error.main',
  mt: 3,
  ml: 0
})

export const userEditTabList = () => ({ mt: 2 })

export const userEditTab = () => ({ textTransform: 'uppercase', fontSize: '15px' })

export const userEditImageErrorText = () => ({ mt: 4 })

export const userEditImageInput = () => ({ display: 'none' })

export const userEditSpinner = () => ({
  height: '65vh'
})

export const contactLink = () => ({ textDecoration: 'none' })

export const genderChipCell = () => ({
  '& .MuiChip-label': { textTransform: 'capitalize' },
  '&:not(:last-of-type)': { mr: 3 },
  backGroundColorL: 'primary'
})
