import Link from 'next/link'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import { Box, Button } from '@mui/material'
import MuiTabList from '@mui/lab/TabList'

export const AvatarWithImageLink = styled(Link)(() => ({
  textDecoration: 'none'
}))

export const AvatarWithoutImageLink = styled(Link)(() => ({
  textDecoration: 'none'
}))

export const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

export const TabList = styled(MuiTabList)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 38,
    minWidth: 110,
    borderRadius: 8,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginRight: theme.spacing(4),
    textTransform: 'capitalize',
    gap: 3,
    fontSize: '1rem',
    fontWeight: 600
  },
  '& .MuiTabs-scroller': {
    overflow: 'scroll !important'
  }
}))

export const ImgStyled = styled('img')(({ theme }) => ({
  width: 150,
  height: 150,
  marginRight: theme.spacing(4),
  borderRadius: theme.shape.borderRadius
}))

export const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

export const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))
