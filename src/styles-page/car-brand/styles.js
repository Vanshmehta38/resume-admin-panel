export const carBrandTypography = () => ({
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

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const paperPropsStyle = () => ({ style: { minWidth: '8rem' } })

export const spinnerHeight = () => ({ height: '80vh' })

export const menuItemStyle = () => ({ '& svg': { mr: 2 } })

export const drawerStyle = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const iconButtonStyle = () => ({ color: 'text.primary' })

export const marginBottomStyle = () => ({ mb: 6 })

export const actionBoxStyle = () => ({ display: 'flex', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const cardHeader = () => ({ '& .MuiCardHeader-action': { width: '100%' } })

export const dataGrid = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })
