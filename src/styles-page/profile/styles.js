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

export const profileInfoBoxTypography = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21.98px'
})

export const viewTypography = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '20.02px'
})

export const profileLineHeight = () => ({ lineHeight: 1.3 })

export const profileCardContentMainBox = () => ({ display: 'flex', alignItems: 'center', justifyContent: 'center' })

export const profileCardContentBox = () => ({ mr: 8, display: 'flex', alignItems: 'center' })

export const profileCardContentDivider = () => ({ mt: theme => `${theme.spacing(4)} !important` })

export const profileInfoMainBox = () => ({ pt: 5, pb: 3 })

export const profileInfoBox = () => ({ display: 'flex', mb: 2.7, gap: 1 })

export const profileInfoBoxButton = () => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2.7 })

export const profileCardAction = () => ({ display: 'flex', justifyContent: 'center', gap: 3 })

export const profileTabList = () => ({ borderBottom: theme => `1px solid ${theme.palette.divider}` })

export const profilePadding = () => ({ p: 0 })

export const buttonStyle = () => ({ px: '2.5rem' })

export const overviewBox = () => ({ display: 'flex', alignItems: 'center', justifyContent: 'center' })

export const overviewText = () => ({ mb: 2 })

export const overviewCardContent = () => ({ my: 1 })
