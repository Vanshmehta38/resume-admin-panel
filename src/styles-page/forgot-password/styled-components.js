import { Box, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

// ** Styled Components
export const ForgotPasswordIllustrationWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export const ForgotPasswordIllustration = styled(Image)(({ theme }) => ({
  maxWidth: '12rem',
  height: 'auto',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '10rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '9rem'
  }
}))

export const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

export const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

export const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  '& svg': { mr: 1.5 },
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))
