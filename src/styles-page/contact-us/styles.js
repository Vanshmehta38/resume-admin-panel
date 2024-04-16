export const cardHeader = () => ({ fontWeight: '700', fontSize: '1.25rem' })

export const indexPageDataGrid = () => ({ display: 'flex', justifyContent: 'end', padding: '20px' })

export const viewTypography = () => ({
  textTransform: 'capitalize'
})

export const spannerStyle = () => ({ height: '80vh' })

export const viewTypographyBlack = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none',
  fontSize: '15px',
  lineHeight: '21.98px'
})

export const viewTypographyGrey = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '21.98px'
})

export const emailTypography = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21px',
  opacity: '70%'
})

export const dialogBox = () => ({ overflow: 'hidden' })

export const dialogBoxIcon = () => ({
  position: 'absolute',
  right: 13,
  top: 0
})

export const contactLink = () => ({ textDecoration: 'none' })

export const dialogBoxSubject = () => ({
  p: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important`,
  textTransform: 'capitalize'
})

export const dialogBoxDivider = () => ({ my: theme => `${theme.spacing(5)} !important` })

export const dialogBoxMessage = () => ({
  pt: ['0 !important', '1.5rem !important'],
  pl: ['1.5rem !important', '0 !important']
})

export const removePadding = () => ({ p: 0 })

export const dialogBoxCard = () => ({ padding: '0.8rem !important' })

export const dialogBoxCardContent = () => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'action.hover',
  borderRadius: '1rem'
})

export const CardBox = () => ({
  mb: 2,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  textTransform: 'capitalize'
})

export const CardBoxContent = () => ({ mb: 7, display: 'flex', flexDirection: 'column' })

export const genderChipCell = () => ({
  '& .MuiChip-label': { textTransform: 'capitalize' },
  '&:not(:last-of-type)': { mr: 3 },
  backGroundColorL: 'primary'
})

export const cardHeaderMainBox = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const drawerformMargin = () => ({ mb: 6, position: 'relative', animation: 'slide-in-anime 200ms linear' })

export const drawerformMarginPosition = duplicateLanguage => ({
  mb: 6,
  position: 'relative',
  border: `1px solid ${duplicateLanguage ? 'red' : null}`,
  borderRadius: duplicateLanguage ? '10px' : null,
  animation: 'slide-in-anime 200ms linear'
})

export const drawerformButtonAdd = () => ({ mb: 6, ml: 3 })

export const drawerformText = () => ({ color: 'grey', fontSize: '15px', ml: 1 })

export const drawerformButton = () => ({ display: 'flex', alignItems: 'center' })

export const drawerformButtonMargin = () => ({ mr: 3 })
