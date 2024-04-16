export const tabPanel = () => ({ p: 0 })

export const dataGrid = () => ({ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } })

export const cardHeaderBox = () => ({ display: 'flex', alignItems: 'center', gap: 5 })

export const cardHeader = () => ({ pb: 6, '& .MuiCardHeader-title': { letterSpacing: '.15px' } })

export const columnsFields = () => ({ color: 'secondary.main', fontWeight: 500 })

export const documentDrawer = () => ({ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } })

export const closeButton = () => ({ color: 'text.primary' })

export const documentBox = () => ({ p: 5 })

export const documentFormControl = () => ({ mb: 6 })

export const documentStatusFormControl = () => ({ mb: 6, width: 'fit-content' })

export const documentButtonBox = () => ({ display: 'flex', alignItems: 'center' })

export const documentSaveButton = () => ({ mr: 3 })

export const rowOptionMenuItemStyle = () => ({
  p: 0,
  '&:hover': {
    backgroundColor: 'transparent'
  }
})

export const menuItem = () => ({
  pt: 0.9,
  pb: 0.9
})

export const iconButton = () => ({
  color: '#636578',
  '&:hover': { backgroundColor: 'transparent' },
  mr: 2
})

export const divider = () => ({
  p: 0,
  m: 0
})

export const spinner = () => ({
  height: '80vh'
})

export const menu = ITEM_HEIGHT => ({
  maxHeight: ITEM_HEIGHT * 4.5,
  borderRadius: '10px',
  top: '382px',
  left: '1140px !important'
})

export const tabDesign = () => ({
  '& .MuiTab-root.Mui-selected': { backgroundColor: 'primary.main', color: 'white' },
  '& .MuiTab-root': {
    borderRadius: '10px',
    px: 4,
    transition: 'all 100ms linear',
    textTransform: 'capitalize',
    fontWeight: 700,
    py: 0,
    gap: 3,
    mr: 3,
    minHeight: '40px',
    transition: 'all 100ms ease'
  }
})

export const buttonStyle = () => ({ px: '2.5rem' })
