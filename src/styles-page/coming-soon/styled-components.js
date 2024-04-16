import { Box, styled } from '@mui/material'

// ** Styled Components
export const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

export const Img = styled('img')(({ theme }) => ({
  marginTop: theme.spacing(15),
  marginBottom: theme.spacing(15),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  }
}))

export const MaskImg = styled('img')(() => ({
  bottom: 0,
  zIndex: -1,
  width: '100%',
  position: 'absolute'
}))

export const ShapeImg = styled('img')(({ theme }) => ({
  left: '15%',
  bottom: '12%',
  position: 'absolute',
  [theme.breakpoints.down('lg')]: {
    bottom: '7%'
  }
}))
