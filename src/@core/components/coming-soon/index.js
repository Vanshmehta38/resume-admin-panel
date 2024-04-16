// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// ** Styles Imports
import * as Styled from '@styles-page/coming-soon/styled-components'

// ** Third Party Imports
import { useTranslation } from 'react-i18next'

const ComingSoon = () => {
  // ** Hook
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Box className='content-center'>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign={'center'} p={5}>
        <Styled.BoxWrapper>
          <Typography fontSize={'1.8rem'} mb={2.5} fontWeight={500}>
            {t('comingSoonLabel')}! 🚧
          </Typography>
          <Typography variant='body2'>{t('comingSoonMsg')}</Typography>
        </Styled.BoxWrapper>
        <Styled.Img height='500' alt='under-maintenance-illustration' src='/images/pages/misc-under-maintenance.png' />
        <Button href='/' component={Link} variant='contained'>
          {t('backToHomeButton')}
        </Button>
      </Box>
      <Styled.ShapeImg alt='shape' src={'/images/pages/misc-under-maintenance-object.png'} />
      <Styled.MaskImg alt='mask' src={`/images/pages/misc-mask-${theme.palette.mode}.png`} />
    </Box>
  )
}

ComingSoon.acl = {
  action: 'read',
  subject: 'dashboard'
}

export default ComingSoon
