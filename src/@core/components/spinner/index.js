// ** MUI Imports
import Box from '@mui/material/Box'
import Image from 'next/image'
import optilabLogo from '@images/optilab-name-logo.png'

const FallbackSpinner = ({ sx }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
      data-testid='loading-spinner'
    >
      <Image src={optilabLogo} alt='OPTILAB LOGO' priority={true} style={{ width: 180, height: 'auto' }} />
    </Box>
  )
}

export default FallbackSpinner
