// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { makeStyles } from '@mui/styles'
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@mui/material'

// ** Iconify Icon Imports
import { Icon } from '@iconify/react'

// ** Language Translation Imports
import { useTranslation } from 'react-i18next'

// ** Form Validations
import { errorMessage } from '@functions/error-message'
import { Controller, useForm } from 'react-hook-form'
import { sendNotificationDialogRules } from '@validations/send-notification-dialog'

// ** Strings, routes and other constants
import { strings } from '@strings'

// ** Styles and Styled Components
import * as styles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(styles?.makeStylesObject)

export default function SendNotificationDialog({ open, setOpen, title, onConfirm, confirmText, ...props }) {
  // ** Hooks
  const theme = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const classes = useStyles()
  const { t } = useTranslation()
  const sendNotificationValidation = sendNotificationDialogRules()

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    setError,
    getValues,
    formState: { errors }
  } = useForm({ defaultValues: sendNotificationValidation.defaultValues })

  // ** Functions
  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const onSubmit = data => {
    onConfirm(data)
    handleClose()
    reset()
  }

  return (
    <Dialog
      classes={{
        paper: theme ? classes.dialogHiddenDrawer : classes.dialog
      }}
      open={open}
      fullWidth
      maxWidth='md'
      TransitionComponent={Transition}
      {...props}
    >
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={styles.dialogMainContainerStyle}>
            <Typography sx={styles.mainTitleText}>
              {title ?? t(strings.sendNotificationDialogDefaultHeading)}
            </Typography>

            <Grid container spacing={6}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    name={strings.sendNotificationDialogKeyTitle}
                    control={control}
                    rules={sendNotificationValidation.title}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        id={'title'}
                        value={value}
                        label={t(strings.sendNotificationDialogKeyTitleLabel)}
                        onChange={onChange}
                        error={Boolean(errors.title)}
                        inputProps={{ maxLength: 150 }}
                      />
                    )}
                  />

                  {errors.title && errorMessage(errors?.title)}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    name={strings.sendNotificationDialogKeyDescription}
                    control={control}
                    rules={sendNotificationValidation.description}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        multiline
                        rows={3}
                        value={value}
                        id={'description'}
                        label={t(strings.sendNotificationDialogKeyDescriptionLabel)}
                        onChange={onChange}
                        error={Boolean(errors.description)}
                        inputProps={{ maxLength: 600 }}
                      />
                    )}
                  />
                  {errors.description && errorMessage(errors?.description)}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={strings.sendNotificationDialogKeyChannels}
                  control={control}
                  rules={{
                    validate: value => {
                      if (value?.app || value?.email || value?.sms) {
                        return true
                      } else {
                        return sendNotificationValidation.channels?.required?.message
                      }
                    }
                  }}
                  render={({ field: { value } }) => {
                    return (
                      <FormControl>
                        <FormLabel sx={styles.channelsText}>
                          {t(strings.sendNotificationDialogKeyChannelsLabel)}
                        </FormLabel>
                        <FormGroup row sx={styles.channelsFormGroup}>
                          <FormControlLabel
                            label={t(strings.sendNotificationDialogAppNotificationLabel)}
                            control={
                              <Checkbox
                                checked={value?.app}
                                onChange={e => {
                                  setValue('channels', { ...value, app: e.target.checked })
                                  if (
                                    getValues('channels')?.app ||
                                    getValues('channels')?.email ||
                                    getValues('channels')?.sms
                                  ) {
                                    setError('channels', '')
                                  } else {
                                    setError('channels', {
                                      type: 'required',
                                      message: t(strings.sendNotificationDialogKeyChannelsReqMsg)
                                    })
                                  }
                                }}
                              />
                            }
                          />
                          <FormControlLabel
                            label={t(strings.sendNotificationDialogSMSLabel)}
                            control={
                              <Checkbox
                                checked={value?.sms}
                                onChange={e => {
                                  setValue('channels', { ...value, sms: e.target.checked })
                                  if (
                                    getValues('channels')?.app ||
                                    getValues('channels')?.email ||
                                    getValues('channels')?.sms
                                  ) {
                                    setError('channels', '')
                                  } else {
                                    setError('channels', {
                                      type: 'required',
                                      message: t(strings.sendNotificationDialogKeyChannelsReqMsg)
                                    })
                                  }
                                }}
                              />
                            }
                          />
                          <FormControlLabel
                            label={t(strings.sendNotificationDialogEmailLabel)}
                            control={
                              <Checkbox
                                checked={value?.email}
                                onChange={e => {
                                  setValue('channels', { ...value, email: e.target.checked })
                                  if (
                                    getValues('channels')?.app ||
                                    getValues('channels')?.email ||
                                    getValues('channels')?.sms
                                  ) {
                                    setError('channels', '')
                                  } else {
                                    setError('channels', {
                                      type: 'required',
                                      message: t(strings.sendNotificationDialogKeyChannelsReqMsg)
                                    })
                                  }
                                }}
                              />
                            }
                          />
                        </FormGroup>
                        {errors.channels && errorMessage(errors?.channels)}
                      </FormControl>
                    )
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={styles.buttonsContainer}>
              <Button variant='contained' type='submit' id={'send-button'}>
                {confirmText ?? t(strings.sendNotificationDialogConfirmText)}
              </Button>
              <Button variant='outlined' type='button' color='secondary' onClick={handleClose} id={'cancel-button'}>
                {t(strings.cancel)}
              </Button>
            </Box>
          </Box>
          {/* Close Icon */}
          <IconButton aria-label='close' onClick={handleClose} sx={styles?.closeButtonIcon}>
            <Icon icon='mdi:close' />
          </IconButton>
        </form>
      </DialogContent>
    </Dialog>
  )
}
