// ** list page card header style ** //

// index
export const adminsRowOptionMenuItemStyle = () => ({
  p: 0
})

export const viewTypographyBlack = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none'
})

export const viewTypography = () => ({
  textTransform: 'capitalize',
  textDecoration: 'none'
})

export const listCardHeaderMainBox = () => ({ display: 'flex', alignItems: 'center', gap: 6 })

export const listCardHeaderInsideBox = () => ({
  gap: 2,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-end'
})

export const listPageCardHeaderTextField = () => ({
  width: {
    xs: 1,
    sm: 'auto'
  },
  '& .MuiInputBase-root > svg': {
    mr: 2
  }
})

export const adminsTableHeaderSecondBoxStyle = () => ({
  gap: 4,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'end'
})

export const adminsTableHeaderThirdBoxStyle = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center'
})

// drawer

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const drawerformMargin = () => ({ mb: 6 })

export const drawerformButtonAdd = () => ({ mb: 6, ml: 3 })

export const drawerformText = () => ({ color: 'grey', fontSize: '15px', ml: 1 })

export const drawerformButton = () => ({ display: 'flex', alignItems: 'center' })

export const drawerformButtonMargin = () => ({ mr: 3 })

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

export const tabPanel = () => ({ p: 0, mt: 5 })

export const spinner = () => ({
  height: '80vh'
})

export const reasonBox = () => ({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })

export const reasonCancelIcon = () => ({
  position: 'absolute',
  right: '-12px',
  top: '-12px',
  backgroundColor: '#de2335',
  color: 'white'
})

export const drawerformMarginPosition = duplicateLanguage => ({
  mb: 6,
  position: 'relative',
  border: `1px solid ${duplicateLanguage ? 'red' : null}`,
  borderRadius: duplicateLanguage ? '10px' : null,
  animation: 'slide-in-anime 200ms linear'
})
