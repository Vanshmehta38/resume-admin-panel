import { color } from '@colors'

//index

export const spinnerHeight = () => ({ height: '80vh' })

export const listTypographyStyle = () => ({ fontSize: '16px', fontWeight: '400', textTransform: 'capitalize' })

export const progressBoxStyle = () => ({ display: 'flex', alignItems: 'center', width: '80%', gap: 2 })

export const linearProgressBoxStyle = () => ({ width: '100%' })

export const progressTypographyStyle = () => ({ minWidth: 35 })

export const dataGridStyle = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const cardHeaderMainBox = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const cardHeaderBox = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5 })

export const buttonStyle = () => ({ px: '2.5rem' })

// view

export const textFieldDiv = () => ({
  marginRight: 5
})

export const deleteIconBox = () => ({
  backgroundColor: color.grey,
  padding: '15px 17px 15px 17px',
  borderRadius: 1,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center'
})

export const deleteIconDiv = () => ({
  backgroundColor: color.grey,
  padding: '15px 17px 15px 17px',
  borderRadius: 1,
  cursor: 'pointer'
})

export const deleteIcon = () => ({
  color: color.primary,
  fontSize: '1.5rem'
})

export const viewTypographyBlack = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none'
})

export const spinner = () => ({
  height: '80vh'
})

// drawer
export const drawerMain = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const drawerCloseIcon = () => ({ color: 'text.primary' })

export const addButton = () => ({ color: color.white, backgroundColor: color.primary, marginLeft: '12px' })

export const grid = () => ({ position: 'relative' })

export const removeButton = value => ({
  p: 0,
  position: 'absolute',
  top: '9%',
  right: value ? '9.4%' : '-2.6%',
  border: 'none',
  zIndex: '1',
  backgroundColor: 'white',
  ':hover': { cursor: 'pointer', backgroundColor: 'white' }
})

export const drawerformButton = () => ({ display: 'flex', alignItems: 'center', mt: 8 })

export const drawerformButtonMargin = () => ({ mr: 3 })
