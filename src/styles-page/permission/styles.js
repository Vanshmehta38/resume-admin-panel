export const subtitleTypographyStyle = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px'
})

export const dataGrid = () => ({
  '& .MuiDataGrid-columnHeaders': { borderRadius: 0 }
})

export const customChip = () => ({
  '& .MuiChip-label': { textTransform: 'capitalize' },
  '&:not(:last-of-type)': { mr: 3 }
})

export const spinnerHeight = () => ({ height: '80vh' })
