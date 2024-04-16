// ** React Imports
import { forwardRef, useState } from 'react'

// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Grow from '@mui/material/Grow'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Iconify Imports
import { Icon } from '@iconify/react'

// ** Styles and Styled Components
import * as styles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />
})

export default function ImageComponent({ src, sx }) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={styles?.rootContainer}>
      <fieldset style={styles?.fieldsetContainer}>
        <legend>
          <Typography sx={styles?.legendText}>Car License Front</Typography>
        </legend>
        <Box sx={styles?.fieldsetInnerContainer}>
          <Box sx={styles?.imageStylesContainer}>
            <Button sx={styles?.imagePressButton} color='error' onClick={() => setOpen(true)}>
              <Image
                src={src}
                style={{ ...styles?.imageStyles, ...sx }}
                alt='Image Component'
                width={400}
                height={400}
              />
            </Button>
          </Box>
        </Box>
      </fieldset>
      <Dialog open={open} TransitionComponent={Transition} fullWidth maxWidth='sm'>
        <Image src={src} alt='Image Component' width={400} height={400} style={styles?.dialogImageStyles} />
        <IconButton aria-label='close' onClick={handleClose} sx={styles?.dialogIconButton}>
          <Icon icon='mdi:close' color='white' fontSize={'1.2rem'} />
        </IconButton>
      </Dialog>
    </Box>
  )
}
