export const listTypographyStyle = () => ({
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

export const dataGridStyle = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const paperPropsStyle = () => ({ style: { minWidth: '8rem' } })

export const spinnerHeight = () => ({ height: '80vh' })

export const menuItemStyle = () => ({ '& svg': { mr: 2 } })

export const drawerStyle = () => ({ '& .MuiDrawer-paper': { width: { xs: 400, sm: 600 } } })

export const iconButtonStyle = () => ({ color: 'text.primary' })

export const marginBottomStyle = () => ({ mb: 6 })

export const actionBoxStyle = () => ({ display: 'flex', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const currencySymbolStyle = () => ({ display: 'flex', gap: 2 })

export const textStyle = () => ({
  lineHeight: '24px',
  fontWeight: '500',
  fontSize: '16px',
  color: 'text.primary',
  marginBottom: '5px'
})

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const spannerStyle = () => ({ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' })

export const reasonBox = () => ({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })

export const addLanguageButton = () => ({ mb: 6, ml: 3 })

export const drawerFormButton = () => ({ display: 'flex', alignItems: 'center' })

export const drawerFormMarginPosition = duplicateLanguage => ({
  mb: 6,
  position: 'relative',
  border: `1px solid ${duplicateLanguage ? 'red' : null}`,
  borderRadius: duplicateLanguage ? '10px' : null,
  animation: 'slide-in-anime 200ms linear'
})

export const reasonCancelIcon = () => ({
  position: 'absolute',
  right: '-12px',
  top: '-12px',
  backgroundColor: '#de2335',
  color: 'white'
})

export const errorMessage = () => ({ color: 'error.main', ml: 1 })

// question list

export const statusCustomChipStyle = () => ({
  height: 25,
  fontWeight: 400,
  fontSize: '0.875rem',
  textTransform: 'capitalize',
  '& .MuiChip-label': { mt: -0.25 }
})
