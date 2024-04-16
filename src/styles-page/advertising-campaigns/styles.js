export const spinner = () => ({
  height: '80vh'
})

export const cardHeader = () => ({ pb: 6, '& .MuiCardHeader-title': { letterSpacing: '.15px' } })

export const cardHeaderBox = () => ({ display: 'flex', alignItems: 'center', gap: 5 })

export const columnsFields = () => ({ color: 'secondary.main', fontWeight: 500 })

export const columnsFieldsLight = () => ({ color: 'secondary', fontWeight: 500 })

export const customChip = () => ({
  '& .MuiChip-label': { textTransform: 'capitalize' },
  '&:not(:last-of-type)': { mr: 2 }
})

export const dataGrid = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const errorMessage = () => ({
  color: 'error.main'
})

export const fieldSet = theme => ({
  border: theme?.palette?.mode === 'dark' ? '1px solid #777' : '1px solid #ccc',
  padding: '25px 12px',
  marginTop: '22px',
  borderRadius: '5px'
})

export const buttonsGrid = () => ({
  mt: 5
})

export const submitButton = () => ({
  mr: 4
})

export const legendTitle = () => ({
  fontWeight: 600
})

export const optionSelected = (option, value) => ({
  backgroundColor: option?.name === value?.name ? '#de223514' : 'transparent'
})

export const optionValueSelected = (option, value) => ({
  backgroundColor: option?.value === value?.value ? '#de223514' : 'transparent'
})

export const optionChannelsSelected = (channels, option) => ({
  backgroundColor: channels.some(v => v.id === option?.id) ? '#de223514' : 'transparent'
})

export const optionTemplateSelected = (option, value) => ({
  backgroundColor: option?.id === value?.id ? '#de223514' : 'transparent'
})

export const buttonStyle = () => ({ px: '2.5rem' })
