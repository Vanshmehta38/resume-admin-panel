// ** list page card header style ** //

// index
export const dataGrid = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const viewTypography = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none',
  fontSize: '15px',
  lineHeight: '21.98px'
})

export const bodyTypographyStyle = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21px'
})

export const typographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '28px'
})

export const subtitleTypographyStyle = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px',
  opacity: '80%'
})

export const cardHeaderMainBox = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const spinnerHeight = () => ({ height: '80vh' })

export const paperPropsStyle = () => ({ style: { minWidth: '8rem' } })

export const menuItemStyle = () => ({ '& svg': { mr: 2 } })

export const drawerStyle = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const iconButtonStyle = () => ({ color: 'text.primary' })

export const marginBottomStyle = () => ({ mb: 6 })

export const actionBoxStyle = () => ({ display: 'flex', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const viewCardContent = () => ({ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' })

export const viewCardContentDivider = () => ({ mt: theme => `${theme.spacing(4)} !important` })

export const viewInfoMainBox = () => ({ pt: 2, pb: 1 })

export const viewInfoBox = () => ({ display: 'flex', mb: 2.7 })

export const viewInfoBoxTypography = () => ({ mr: 2, fontWeight: 500, fontSize: '0.875rem' })

export const viewCardAction = () => ({ display: 'flex', justifyContent: 'center', gap: 3 })

export const viewTabList = () => ({ borderBottom: theme => `1px solid ${theme.palette.divider}` })

export const viewPadding = () => ({ p: 0 })

export const statusButtonStyle = () => ({ display: 'flex', justifyContent: 'center' })
