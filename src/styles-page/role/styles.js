export const bodyTypographyStyle = () => ({
  fontWeight: 400,
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21px'
})

export const roleTypographyStyle = () => ({
  textTransform: 'capitalize',
  fontWeight: 500,
  textDecoration: 'none',
  fontSize: '20px',
  lineHeight: '32px',
  opacity: '70%'
})

export const capitalizeFont = () => ({
  textTransform: 'capitalize'
})

export const mainBox = () => ({
  p: 5,
  pb: 3,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const box = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center'
})

export const textField = () => ({
  mr: 6,
  mb: 2
})

export const itemPadding = () => ({
  p: 0
})

export const rowOptions = () => ({
  mr: 2
})

export const columnBox = () => ({
  display: 'flex',
  alignItems: 'center'
})

export const columnMainBox = () => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column'
})

// export const editBox = () => ({
//   display: 'flex',
//   justifyContent: 'right',
//   alignItems: 'center'
// })

export const editBox = () => ({
  // display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const editBoxIcons = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const editBoxIconsEdit = () => ({
  cursor: 'pointer'
})

export const editBoxTypography = () => ({
  color: 'primary.main',
  cursor: 'pointer'
})

export const columnRole = () => ({
  color: 'text.secondary',
  textTransform: 'capitalize'
})

export const capitalize = () => ({
  textTransform: 'capitalize',
  color: 'text.primary',
  textDecoration: 'none'
})

export const columnTypography = () => ({
  color: 'text.primary',
  textDecoration: 'none'
})

export const textDecoration = () => ({
  textDecoration: 'none'
})

export const addButton = () => ({
  mb: 2
})

export const grid = () => ({
  mb: 5
})

export const menuItem = () => ({
  p: 0
})

export const userRoleError = () => ({
  mr: 2,
  color: 'error.main'
})

export const userRoleWarning = () => ({
  mr: 2,
  color: 'warning.main'
})

export const userRoleInfo = () => ({
  mr: 2,
  color: 'info.main'
})

export const userRoleSuccess = () => ({
  mr: 2,
  color: 'success.main'
})

export const userRolePrimary = () => ({
  mr: 2,
  color: 'primary.main'
})

export const errorText = () => ({
  mr: 2,
  color: 'primary.main'
})

export const boxImage = () => ({
  display: 'flex',
  alignItems: 'center'
})

export const resetButton = () => ({
  my: 4
})

export const errorTypography = () => ({
  mt: 4
})

export const formHelperTextError = () => ({
  color: 'error.main',
  mt: 3
})

export const submitButton = () => ({
  mr: 4
})

export const errorMessage = () => ({
  color: 'error.main',
  ml: 1
})

export const imageTypography = () => ({ mt: 4 })

export const divider = () => ({ mt: 4 })

export const viewBox = () => ({ pt: 2, pb: 1 })

export const viewTypography = () => ({ textTransform: 'capitalize' })

export const image = () => ({ width: '80%', height: '100%', mb: 4 })

export const customImage = () => ({ width: 34, height: 34 })

export const customImageRender = () => ({ width: 34, height: 34, fontSize: '1rem' })

export const dialogTitle = () => ({ pt: 12, mx: 'auto', textAlign: 'center' })

export const dialogTypography = () => ({ mb: 2 })

export const dialogContent = () => ({ pb: 12, mx: 'auto' })

export const formGroup = () => ({ mb: 1 })

// export const rolesBox = () => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   height: '50px',
// })

export const rolesBox = role => {
  return {
    mb: role === 'admin' ? 6 : 6,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px'
  }
}

export const rolesCard = () => ({
  height: '120px'
})

export const staffBox = () => ({
  mt: 10,
  display: 'flex',
  justifyContent: 'space-between'
})

export const ownerAdminBox = () => ({
  mt: 10,
  display: 'flex',
  justifyContent: 'space-between'
})

export const rolesAvatarGroup = () => ({
  '& .MuiAvatarGroup-avatar': { fontSize: '.875rem' },
  '& .MuiAvatar-root, & .MuiAvatarGroup-avatar': { width: 40, height: 40 }
})

export const cursorPointer = () => ({ cursor: 'pointer' })

export const spinnerHeight = () => ({ height: '80vh' })

export const spinnerEditHeight = () => ({ height: '70vh' })

export const gridHeight = () => ({ height: '100%' })

export const textAlign = () => ({ textAlign: 'right' })

export const dialogText = () => ({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: { xs: 6, sm: 12 },
  pt: { xs: 6, sm: 12 }
})

export const dialogTextData = () => ({ textAlign: 'starts', py: { xs: 6, sm: 6 } })

export const addRoleButton = () => ({ mb: 2.5, whiteSpace: 'nowrap' })

export const gridImage = () => ({
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'start',
  marginLeft: '15px'
})

export const dialogBox = () => ({
  my: 4,
  display: 'flex',
  gap: 10
})

export const dialogViewBox = () => ({
  my: 1
})

export const dialogBoxContent = () => ({ p: { xs: 6, sm: 12 }, pb: '0 !important' })

export const tableCell = () => ({ pl: '0 !important' })

export const informationOutline = () => ({ ml: 1, fontSize: '1rem' })

export const tableCellBox = () => ({
  display: 'flex',
  fontSize: '0.875rem',
  alignItems: 'center',
  textTransform: 'capitalize'
})

export const formControlLabel = () => ({ '& .MuiTypography-root': { textTransform: 'capitalize' } })

export const tableRow = () => ({ '& .MuiTableCell-root:first-of-type': { pl: 0 } })

export const tableSpanStyle = () => ({
  cursor: 'pointer',
  fontSize: '18px',
  marginRight: '10px',
  width: '20px'
})

export const tableRowSpan = () => ({ paddingLeft: '40px' })

export const roleTableCell = theme => ({
  fontWeight: 600,
  color: () => `${theme.palette.text.primary} !important`
})

export const dialogActions = () => ({
  pt: 0,
  display: 'flex',
  justifyContent: 'center',
  mt: 3
})

export const dataGrid = () => ({
  '& .MuiDataGrid-columnHeaders': { borderRadius: 0 }
})

export const dialogEditTitle = () => ({ mx: 'auto', textAlign: 'center' })

export const dialogEditContent = () => ({ mx: 'auto' })

export const alert = () => ({ maxWidth: '500px' })

export const permissionsBox = () => ({ mt: 8 })

export const permissionsText = () => ({ mr: [0, 4], mb: [3, 0] })

export const permissionsFormGroup = () => ({
  mb: 2,
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: ['wrap', 'nowrap']
})

export const roleIconButton = () => ({
  color: 'text.secondary'
})

export const cardHeader = () => ({ fontWeight: '700', fontSize: '1.25rem' })

export const closeButtonIcon = { color: 'grey.500' }
