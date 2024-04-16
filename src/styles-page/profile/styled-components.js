// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Styled Components
export const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))
