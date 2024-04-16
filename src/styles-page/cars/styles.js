export const adminsRowOptionMenuItemStyle = {
  p: 0
}

export const customImage = () => ({ mr: 3, width: 38, height: 38, cursor: 'pointer' })

export const customWithoutImage = () => ({ mr: 3, width: 38, height: 38, fontSize: '1rem' })

export const dataGridStyle = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const buttonStyle = () => ({ px: '2.5rem' })

export const spinnerHeight = () => ({ height: '80vh' })

export const componentCard = () => ({ mt: 4, pt: 4 })

export const tabListStyle = () => ({ minHeight: '50px', '& .MuiTab-root': { gap: 1 } })

export const tabPanelStyle = () => ({ px: 0, pt: 5 })

export const typographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '28px'
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
  fontWeight: 600,
  borderRadius: '5px',
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

export const imageRemoveIcon = () => ({ position: 'absolute', top: -17, right: -14, padding: '0' })

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
