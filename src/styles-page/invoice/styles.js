import { color } from '@colors'

export const adminsRowOptionMenuItemStyle = {
  p: 0
}

export const dataGridStyle = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const buttonStyle = () => ({ px: '2.5rem' })

export const spinnerHeight = () => ({ height: '80vh' })

export const tabListStyle = () => ({ minHeight: '50px', '& .MuiTab-root': { gap: 1 } })

export const tabPanelStyle = () => ({ px: 0, pt: 5 })

export const typographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '28px'
})

export const typographyStyleRed = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '28px',
  color: color.primary
})

export const categoryTypographyStyle = () => ({
  textOverflow: 'ellipsis',
  whiteSpace: 'noWrap',
  overflow: 'hidden',
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

export const modelTypographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 700,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '28px'
})

export const viewTypographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px',
  opacity: '80%'
})

export const cardHeaderBox = { display: 'flex', alignItems: 'center', gap: 5 }

export const cardHeader = { pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }

export const columnsFieldsNoCaps = { fontWeight: 500 }

export const columnsFields = { fontWeight: 500, textTransform: 'capitalize' }

export const columnsFieldsModel = { fontWeight: 800 }

export const columnsFieldsCategories = {
  fontWeight: 500,
  textOverflow: 'ellipsis',
  whiteSpace: 'noWrap',
  overflow: 'hidden'
}

export const tabDesign = {
  '& .MuiTab-root.Mui-selected': { backgroundColor: 'primary.main', color: 'white' },
  '& .MuiTab-root': {
    borderRadius: '10px',
    px: 4,
    transition: 'all 100ms linear',
    textTransform: 'capitalize',
    fontWeight: 700,
    py: 0,
    gap: 3,
    minHeight: '40px'
  },
  transition: 'all 500ms linear',
  gap: 2
}

// drawer

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const drawerFormMargin = () => ({ mb: 6 })

export const drawerFormButton = () => ({ display: 'flex', alignItems: 'center' })

export const drawerFormButtonMargin = () => ({ mr: 3 })

export const imageBackgroundInputButton = error => ({
  width: '248px',
  height: '168px',
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: 'background.default',
  border: error ? `3px dotted red` : '3px dotted rgb(100,100 ,100,0.5)',
  boxShadow: 'none',
  marginRight: '10px',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'background.paper'
  }
})

export const imageUploadTextContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative'
}

export const imageUploadText = error => ({ color: error ? 'error.main' : 'text.primary', textTransform: 'capitalize' })

export const imageUploadFieldSet = {
  borderColor: 'rgb(100,100 ,100,0.5)',
  borderRadius: '10px',
  padding: '1.3rem',
  marginBottom: '1.4rem'
}

export const imageViewDivContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative'
}

export const imageView = {
  width: 'auto',
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '150px',
  borderRadius: '9px'
}

export const imageCloseIcon = { position: 'absolute', top: -10, right: -10 }

// view

export const actionBoxStyle = () => ({ display: 'flex', justifyContent: 'space-between' })

export const profileMargin = () => ({ my: 1 })

export const profileMarginRight = () => ({ mr: 3 })

export const profileTextTransform = () => ({ textTransform: 'capitalize' })

export const profileCardContent = () => ({ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' })

export const profileCustomAvatar = () => ({ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' })

export const profileCustomChip = () => ({
  height: 20,
  fontWeight: 400,
  fontSize: '13px',
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

export const profileActionBox = () => ({ display: 'flex', justifyContent: 'center', gap: 4 })

export const profileLineHeight = () => ({ lineHeight: 1.3 })

export const profileCardContentMainBox = () => ({ display: 'flex', alignItems: 'center', justifyContent: 'center' })

export const profileCardContentBox = () => ({ mr: 8, display: 'flex', alignItems: 'center' })

export const profileCardContentDivider = () => ({ my: theme => `${theme.spacing(4)} !important` })

export const profileInfoMainBox = () => ({ pt: 2, pb: 1 })

export const profileInfoBox = () => ({ display: 'flex', mb: 2.7, alignItems: 'center' })

export const profileInfoBoxTypography = () => ({ mr: 2, fontWeight: 600, fontSize: '0.9rem' })

export const profileCarCategoryTypography = () => ({
  mr: 2,
  fontWeight: 500,
  fontSize: '0.875rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
})

export const profileCardAction = () => ({ display: 'flex', justifyContent: 'center', gap: 3 })

export const profileTabList = () => ({ borderBottom: theme => `1px solid ${theme.palette.divider}` })

export const profilePadding = () => ({ p: 0 })

export const documentsMainContainer = {
  width: '100%',
  height: '168px',
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: 'background.default',
  border: '2px dotted rgba(0, 0, 0, 0.5)',
  boxShadow: 'none',
  marginRight: '10px',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'background.default'
  }
}

export const documentsImageContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative'
}

export const imageStyle = {
  width: 'auto',
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '150px',
  borderRadius: '9px'
}

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

export const noDataFoundBox = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
})

export const noDataFoundTypography = () => ({ mb: 2.5, letterSpacing: '0.18px', fontSize: '1.5rem !important' })

export const viewTypographyGrey = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '13px',
  lineHeight: '21px',
  opacity: '90%'
})

export const viewTypographyBold = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none',
  fontSize: '15px',
  lineHeight: '28px'
})

export const emailTypography = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '21px',
  opacity: '75%'
})

export const marginDiv = () => ({
  mt: 2,
  mb: 2
})

export const invoiceColumnBox = () => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start'
})

// pdf

export const invoicePdfFirstGrid = () => ({
  mb: { sm: 0, xs: 4 }
})

export const invoicePdfFirstBox = () => ({ display: 'flex', flexDirection: 'column' })

export const invoicePdfFirstBoxImg = () => ({ mb: 6, display: 'flex', alignItems: 'center' })

export const invoicePdfFirstBoxText = () => ({
  ml: 2,
  fontWeight: 700,
  lineHeight: 1.2,
  '@media print': {
    color: 'rgba(76, 78, 100, 0.87)'
  }
})

export const invoicePdfFirstBoxMargin = () => ({
  mb: 1,
  '@media print': {
    color: 'rgba(76, 78, 100, 0.6)'
  }
})

export const invoiceIdPrintStyle = () => ({
  '@media print': {
    color: 'rgba(76, 78, 100, 0.87)'
  }
})

export const invoiceSubPrintStyle = () => ({
  '@media print': {
    color: 'rgba(76, 78, 100, 0.6)'
  }
})

export const invoicePdfFirstInvoiceTextBox = () => ({
  display: 'flex',
  justifyContent: { xs: 'flex-start', sm: 'flex-end' }
})

export const invoicePdfFirstTable = () => ({ maxWidth: '200px' })

export const invoicePdfDivider = () => ({
  mt: theme => `${theme.spacing(6.5)} !important`,
  mb: theme => `${theme.spacing(5.5)} !important`,
  '@media print': {
    borderColor: 'rgba(76, 78, 100, 0.12)'
  }
})

export const invoicePdfSecondDivider = () => ({ mt: theme => `${theme.spacing(6.5)} !important`, mb: '0 !important' })

export const invoicePdfSecondGrid = () => ({ mb: { lg: 0, xs: 4 } })

export const invoicePdfSecondTitle = () => ({
  mb: 3,
  color: 'text.primary',
  letterSpacing: '.1px',
  '@media print': {
    color: 'rgba(76, 78, 100, 0.87)'
  }
})

export const invoicePdfSecondBoxMargin = () => ({
  mb: 2,
  '@media print': {
    color: 'rgba(76, 78, 100, 0.6)'
  }
})

export const invoicePdfSecondBillGrid = () => ({ display: 'flex', justifyContent: ['flex-start', 'flex-end'] })

export const invoicePdfFourthCard = () => ({ pt: 8 })

export const invoicePdfFourthGridOne = () => ({ order: { sm: 1, xs: 2 } })

export const invoicePdfFourthTitle = () => ({
  mr: 2,
  color: 'text.primary',
  fontWeight: 600,
  letterSpacing: '.25px',
  '@media print': {
    color: 'rgba(76, 78, 100, 0.87)'
  }
})

export const invoicePdfFourthGridTwo = () => ({ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } })

export const invoicePdfFourthSubTitle = () => ({
  color: 'text.primary',
  letterSpacing: '.25px',
  fontWeight: 600,
  '@media print': {
    color: 'rgba(76, 78, 100, 0.6)'
  }
})

export const invoicePdfFourthDivider = () => ({
  mt: theme => `${theme.spacing(5)} !important`,
  mb: theme => `${theme.spacing(3)} !important`,
  '@media print': {
    borderColor: 'rgba(76, 78, 100, 0.12)'
  }
})

export const invoicePdfFourthDividerTwo = () => ({
  mt: theme => `${theme.spacing(4.5)} !important`,
  mb: '0 !important',
  '@media print': {
    borderColor: 'rgba(76, 78, 100, 0.12)'
  }
})

export const invoicePdfLastText = () => ({
  color: 'text.primary',
  '@media print': {
    color: 'rgba(76, 78, 100, 0.87)'
  }
})

export const invoicePdfButtonBox = () => ({ display: 'flex', justifyContent: 'center' })

export const invoicePdfPrintButton = () => ({ mb: 3.5, mr: 2, width: '20%' })

export const invoicePdfDownloadButton = () => ({ mb: 3.5 })

export const partnerViewStyle = () => ({
  textDecoration: 'none',
  color: color.primary,
  textTransform: 'capitalize'
})

export const cardMargin = () => ({
  margin: '2rem 3rem'
})

export const cardNoteMargin = () => ({
  margin: '2rem'
})

export const tableBorder = () => ({
  border: theme => `1px solid ${theme.palette.divider}`,
  width: 'auto',
  margin: '0px 3rem',
  '@media print': {
    border: '1px solid rgba(76, 78, 100, 0.12)'
  }
})

export const tableStyles = () => ({
  tableLayout: 'fixed'
})

export const tableCellPrintStyle = () => ({
  '@media print': {
    color: 'rgba(76, 78, 100, 0.87)',
    borderBottom: '1px solid rgba(76, 78, 100, 0.12)'
  }
})
