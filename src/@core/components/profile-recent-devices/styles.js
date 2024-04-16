export const profileRecentDeviceDivider = () => ({ m: '0 !important' })

export const profileRecentDeviceTable = () => ({ minWidth: 500 })

export const profileRecentDeviceTableHeader = () => ({
  backgroundColor: theme => (theme.palette.mode === 'light' ? 'grey.50' : 'background.default')
})

export const profileRecentDeviceTableRow = () => ({ '&:last-of-type td': { border: 0 } })

export const bodyTypographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21px',
  opacity: '80%'
})
