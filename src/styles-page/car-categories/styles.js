// ** list page card header style ** //

export const dataGridStyle = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const spinnerHeight = () => ({ height: '80vh' })

export const noOptionStyle = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 3,
  py: 3,
  backgroundColor: 'background.default'
})

// index
export const typographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px'
})

export const adminsRowOptionMenuItemStyle = {
  p: 0
}

export const dataGrid = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const cardHeaderBox = { display: 'flex', alignItems: 'center', gap: 5 }

export const cardHeader = { pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }

export const columnsFieldsCapitalize = { fontWeight: 500, textTransform: 'capitalize', fontSize: 15 }

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

export const imageInputStyle = () => {
  display: 'none'
}

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
