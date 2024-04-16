// ** Next Imports
import Link from 'next/link'

// ** Mui imports
import { styled } from '@mui/material'
import MuiTab from '@mui/material/Tab'
import Box from '@mui/material/Box'

// ** Styled Components
export const AvatarWithImageLink = styled(Link)(() => ({
  textDecoration: 'none'
}))

export const AvatarWithoutImageLink = styled(Link)(() => ({
  textDecoration: 'none'
}))

export const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'capitalize',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
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
