export const errorMessage = () => ({
  color: 'error.main'
})

export const adminTitle = () => ({
  mb: 3,
  overflow: 'auto'
})

export const fieldSet = theme => ({
  // color: '#333',
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

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const drawerformMargin = () => ({ mb: 6 })

export const drawerformText = () => ({ color: 'grey', fontSize: '15px', ml: 1 })

export const drawerformButton = () => ({ display: 'flex', alignItems: 'center' })

export const drawerformButtonMargin = () => ({ mr: 3 })
