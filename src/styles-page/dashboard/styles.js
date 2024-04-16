export const datePickerTextFieldWidth = () => ({ width: '280px' })

export const datePickerClearIcon = () => ({
  cursor: 'pointer',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const userCardStyle = () => ({ position: 'relative', height: '100%' })

export const userCardContentStyle = () => ({ p: theme => `${theme.spacing(7, 7.5)} !important` })

export const tripOverviewStyle = () => ({ overflow: 'visible' })

export const tripOverviewCardHeaderStyle = () => ({ pb: 3.25 })

export const cardContentStyle = () => ({ py: theme => `${theme.spacing(4.125)} !important` })

export const characterCardStyle = () => ({ overflow: 'visible', position: 'relative' })

export const characterCardContentStyle = () => ({ pb: '0 !important' })

export const characterCardTypographyStyle = () => ({ mb: 1.5, fontWeight: 600, whiteSpace: 'nowrap' })

export const characterCardCustomChipStyle = () => ({ mb: 5.5, height: 20, fontWeight: 500, fontSize: '0.75rem' })
