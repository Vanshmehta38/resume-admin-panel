import { styled } from '@mui/material'

// ** Styled Components
export const Img = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('lg')]: {
    height: 250,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 200
  },
  height: '34dvh'
}))
