// ** Next Imports
import Link from 'next/link'

// ** Mui imports
import { styled } from '@mui/material'
import MuiTab from '@mui/material/Tab'
import { Box, Button } from '@mui/material'
import MuiTabList from '@mui/lab/TabList'

// ** Styled Components
export const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'capitalize',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary?.main
  }
}))

export const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))

export const AvatarWithImageLink = styled(Link)(() => ({
  textDecoration: 'none'
}))

export const AvatarWithoutImageLink = styled(Link)(() => ({
  textDecoration: 'none'
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
    backgroundColor: theme.palette.primary?.main,
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

export const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

export const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    height: 250,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 200
  },
  height: '40dvh'
}))
