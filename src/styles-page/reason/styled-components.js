import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import MuiTabList from '@mui/lab/TabList'

// ** Styled Components
export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

// ** Styled Components
export const TabList = styled(MuiTabList)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(5)
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 35,
    minWidth: 120,
    borderRadius: 8,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    textTransform: 'capitalize',
    gap: 3,
    fontSize: '1rem',
    fontWeight: 600
  },
  '& .MuiTabs-scroller': {
    overflow: 'scroll !important'
  }
}))
