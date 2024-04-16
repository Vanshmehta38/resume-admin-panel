export const listTypographyStyle = () => ({ fontSize: '16px', fontWeight: '400', textTransform: 'capitalize' })

export const gridStyle = () => ({ mb: 6 })

export const dataGridStyle = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const cardHeaderMainBox = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const spinnerHeight = () => ({ height: '80vh' })

export const typographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px'
})

export const typographyStyleSlug = () => ({
  textTransform: 'lowercase',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px'
})

export const paperPropsStyle = () => ({ style: { minWidth: '8rem' } })

export const menuItemStyle = () => ({ '& svg': { mr: 2 } })

export const drawerStyle = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const iconButtonStyle = () => ({ color: 'text.primary' })

export const marginBottomStyle = () => ({ mb: 6 })

export const actionBoxStyle = () => ({ display: 'flex', alignItems: 'center', gap: 5, mt: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const currencySymbolStyle = () => ({ display: 'flex', gap: 2 })

export const legendTagStyle = () => ({
  border: '1px solid lightgray',
  borderRadius: '5px',
  fontSize: '13px',
  padding: '20px'
})

export const legendTestStyle = () => ({
  fontWeight: '800'
})

export const textStyle = () => ({
  lineHeight: '24px',
  fontWeight: '500',
  fontSize: '16px',
  color: 'text.primary',
  marginBottom: '5px'
})

export const formControlWidth = () => ({ width: '30dvh' })

export const staticPageGrid = () => ({ position: 'relative' })

export const staticPageRemoveButton = () => ({
  position: 'absolute',
  top: '-2%',
  right: '-1%',
  border: 'none',
  zIndex: '1',
  backgroundColor: 'white',
  ':hover': { cursor: 'pointer', backgroundColor: 'white' }
})

export const selectLanguageBox = () => ({
  backgroundColor: 'background.default',
  width: '100%',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '15px',
  boxShadow: '0px 0px 5px 5px rgba(0,0,0,0.05)',
  mt: 5,
  position: 'relative'
})

export const selectLanguageTypography = () => ({
  fontWeight: 500,
  position: 'absolute',
  fontSize: '1.2rem',
  top: '2rem'
})
