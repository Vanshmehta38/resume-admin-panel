// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { makeStyles } from '@mui/styles'

// ** Iconify Icon Imports
import { Icon } from '@iconify/react'

// ** Form Validations
import { Controller, useForm } from 'react-hook-form'
import { errorMessage } from '@functions/error-message'
import { resetPasswordDialogRules } from '@validations/reset-password-dialog'

// ** Strings, routes and other constants
import { strings } from '@strings'

// ** Styles and Styled Components
import * as styles from './styles'
import { InputAdornment, InputLabel, OutlinedInput } from '@mui/material'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(styles?.makeStylesObject)

export default function ResetPasswordDialog({ open, setOpen, title, onConfirm, confirmText, ...props }) {
  // ** Hooks
  const theme = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const classes = useStyles()

  const resetPasswordDialogRulesVal = resetPasswordDialogRules()

  const {
    handleSubmit,
    control,
    getValues,
    reset,
    trigger,
    formState: { errors }
  } = useForm({ defaultValues: resetPasswordDialogRulesVal.defaultValues })

  // ** States
  const [show, setShow] = useState({ showPassword: false, confirmShowPassword: false })

  // ** Functions
  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const handleShowPassword = () => {
    setShow({ ...show, showPassword: !show.showPassword })
  }

  const handleConfirmShowPassword = () => {
    setShow({ ...show, confirmShowPassword: !show.confirmShowPassword })
  }

  const onSubmit = data => {
    const body = {
      password: data?.password
    }
    onConfirm(body)
    reset()
    handleClose()
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={styles.dialogMainContainerStyle}>
            <Typography sx={styles.mainTitleText}>{title ?? strings.resetPasswordDialogDefaultHeading}</Typography>

            <Grid container spacing={6}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel error={Boolean(errors.password)}>{strings.resetPasswordFieldLabelPassword}</InputLabel>
                  <Controller
                    name={strings.resetPasswordFieldKeyPassword}
                    control={control}
                    rules={resetPasswordDialogRulesVal.password}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        autoComplete='off'
                        value={value}
                        label={strings.resetPasswordFieldLabelPassword}
                        onChange={e => {
                          onChange(e)
                          trigger(strings.resetPasswordFieldKeyPassword)
                        }}
                        inputProps={{ 'data-testid': 'new-password' }}
                        id='reset-password-new-password'
                        type={show.showPassword ? 'text' : 'password'}
                        error={Boolean(errors.password)}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              id={'show-new-password'}
                              onClick={handleShowPassword}
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                              data-testid={'show-new-password'}
                            >
                              <Icon
                                icon={show.showPassword ? 'ph:eye' : 'ph:eye-slash'}
                                style={{ color: errors.password && 'red' }}
                              />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />

                  {errorMessage(errors?.password)}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel error={Boolean(errors.confirm_password)}>
                    {strings.resetPasswordFieldLabelConfirmPassword}
                  </InputLabel>
                  <Controller
                    name={strings.resetPasswordFieldKeyConfirmPassword}
                    control={control}
                    rules={{
                      ...resetPasswordDialogRulesVal.confirm_password,
                      validate: value => value === getValues('password') || strings.confirmPasswordMatchErrorMsg
                    }}
                    render={({ field: { value, onChange } }) => (
                      <OutlinedInput
                        autoComplete='off'
                        value={value}
                        label={strings.resetPasswordFieldLabelConfirmPassword}
                        onChange={e => {
                          onChange(e)
                          trigger(strings.resetPasswordFieldKeyConfirmPassword)
                        }}
                        inputProps={{ 'data-testid': 'confirm-password' }}
                        id='reset-password-confirm-password'
                        type={show.confirmShowPassword ? 'text' : 'password'}
                        error={Boolean(errors.confirm_password)}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleConfirmShowPassword}
                              id={'show-confirm-password'}
                              data-testid={'show-new-confirm-password'}
                            >
                              <Icon
                                icon={show?.confirmShowPassword ? 'ph:eye' : 'ph:eye-slash'}
                                style={{ color: errors.confirm_password && 'red' }}
                              />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  {errorMessage(errors?.confirm_password)}
                </FormControl>
              </Grid>
            </Grid>

            <Box sx={styles.buttonsContainer}>
              <Button variant='contained' type='submit' id={'confirm-password'} data-testid={'reset-password-button'}>
                {confirmText ?? strings.resetPasswordDialogConfirmText}
              </Button>
              <Button variant='outlined' type='button' color='secondary' onClick={handleClose} id={'cancel-password'}>
                {strings.cancel}
              </Button>
            </Box>
          </Box>
          {/* Close Icon */}
          <IconButton aria-label='close' onClick={handleClose} sx={styles?.closeButtonIcon} id={'cancel-password'}>
            <Icon icon='mdi:close' />
          </IconButton>
        </form>
      </DialogContent>
    </Dialog>
  )
}
