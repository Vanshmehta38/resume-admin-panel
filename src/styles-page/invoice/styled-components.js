// ** Mui imports
import { Box, styled } from '@mui/material'
import TableCell from '@mui/material/TableCell'

// ** Styled Components
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

export const MUITableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: 0,
  padding: `${theme.spacing(1, 0)} !important`
}))

export const CalcWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))
