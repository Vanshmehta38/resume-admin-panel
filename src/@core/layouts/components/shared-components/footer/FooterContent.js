// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRouter } from 'next/router'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FooterContent = () => {
  const router = useRouter()

  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`Copyright© ${new Date().getFullYear()} - `}
        <LinkStyled href={router?.asPath}>Optilab</LinkStyled>
      </Typography>
      {hidden ? null : (
        <Typography sx={{ mr: 2 }}>
          {`Made with `}
          <Box component='span' sx={{ color: 'error.main' }}>
            ❤️
          </Box>
          {` by `}
          <LinkStyled target='_blank' href='https://www.codenticsoftware.com/'>
            Codentic Software
          </LinkStyled>
        </Typography>
      )}
    </Box>
  )
}

export default FooterContent
