// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { makeStyles } from '@mui/styles'

// ** Translation Imports
import { useTranslation } from 'react-i18next'

// ** Iconify Icon Imports
import { Icon } from '@iconify/react'

// ** Strings, routes and other constants
import { strings } from '@strings'

// ** Styles and Styled Components
import * as styles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(styles?.makeStylesObject)

export default function DeleteDialog({
  open,
  setOpen,
  title,
  subTitle,
  description,
  force,
  forceText,
  forceButtonText,
  onConfirm,
  condition,
  confirmText,
  ...props
}) {
  // ** Vars
  const { t } = useTranslation()
  const theme = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      classes={{
        paper: theme ? classes.dialogHiddenDrawer : classes.dialog
      }}
      open={open}
      fullWidth
      maxWidth='sm'
      TransitionComponent={Transition}
      {...props}
    >
      <DialogContent>
        <Box sx={styles.dialogMainContainerStyle}>
          <Typography sx={styles.mainTitleText}>{title ?? t(strings.deleteDialogDefaultHeading)}</Typography>

          {(force || condition) && subTitle && (
            <Box>
              <Typography variant='body2' fontWeight={800} sx={styles.subTitleText}>
                {subTitle ?? ''}
              </Typography>
            </Box>
          )}
          {force && (
            <Box>
              <Typography variant='body2' fontWeight={800}>
                {forceText ?? t(strings.deleteDialogForceDeleteText)}
              </Typography>
            </Box>
          )}

          <Typography variant='body2' color={'secondary'} fontWeight={500}>
            {description ?? t(strings.deleteDialogDefaultDescription)}
          </Typography>

          {/* Button */}
          {condition || condition === undefined ? (
            <Box sx={styles.buttonsContainer}>
              <Button
                variant='contained'
                onClick={onConfirm}
                id={'confirm-delete'}
                data-testid={'confirm-delete-button'}
              >
                {force
                  ? forceButtonText ?? strings.deleteDialogForceDeleteButtonText
                  : confirmText ?? strings.deleteDialogDeleteButtonText}
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                onClick={handleClose}
                id={'cancel-delete'}
                data-testid={'cancel-delete-button'}
              >
                {t(strings.cancel)}
              </Button>
            </Box>
          ) : (
            <Box sx={styles.buttonsContainer}>
              <Button variant='contained' onClick={handleClose} id={'confirm-delete'}>
                {strings.deleteDialogOkButtonText}
              </Button>
            </Box>
          )}
        </Box>
        {/* Close Icon */}
        <IconButton aria-label='close' onClick={handleClose} id='close-icon' sx={styles?.closeButtonIcon}>
          <Icon icon='mdi:close' />
        </IconButton>
      </DialogContent>
    </Dialog>
  )
}
