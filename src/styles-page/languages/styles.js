// ** list page card header style ** //

// index
export const viewTypographyBlack = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none'
})

// drawer

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const drawerFormMargin = () => ({ mb: 6 })

export const drawerFormButton = () => ({ display: 'flex', alignItems: 'center' })

export const drawerFormButtonMargin = () => ({ mr: 3 })

export const cardHeaderMainBox = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const genderChipCell = () => ({
  '& .MuiChip-label': { textTransform: 'capitalize' },
  '&:not(:last-of-type)': { mr: 3 },
  backGroundColorL: 'primary'
})

export const spinner = () => ({
  height: '80vh'
})
