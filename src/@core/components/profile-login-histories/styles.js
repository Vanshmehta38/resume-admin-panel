export const profileLoginHistoriesDivider = () => ({ m: '0 !important' })

export const profileLoginHistoriesTable = () => ({ minWidth: 500 })

export const profileLoginHistoriesTableHeader = () => ({
  backgroundColor: theme => (theme.palette.mode === 'light' ? 'grey.50' : 'background.default')
})

export const profileLoginHistoriesTableRow = () => ({ '&:last-of-type td': { border: 0 } })

export const bodyTypographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21px',
  opacity: '80%'
})

export const subtitleTypographyStyle = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px'
})
