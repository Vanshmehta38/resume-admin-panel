/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import { forwardRef, useEffect } from 'react'

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

// ** Iconify Icon Imports
import { Icon } from '@iconify/react'

import { useTranslation } from 'react-i18next'

// ** Form Validations
import { errorMessage } from '@functions/error-message'
import { translateUpdateDialogRules } from '@validations/translate-update'
import { Controller, useForm } from 'react-hook-form'

// ** Strings, routes and other constants
import { strings } from '@strings'

// ** Styles and Styled Components
import * as styles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(styles?.makeStylesObject)

export default function TranslateUpdateDialog({ open, setOpen, title, data, onConfirm, confirmText, ...props }) {
  // ** Hooks
  const { t } = useTranslation()

  // ** Vars
  const theme = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const classes = useStyles()
  const translateUpdateDialogRulesVal = translateUpdateDialogRules()

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors }
  } = useForm({ defaultValues: translateUpdateDialogRulesVal.defaultValues })

  // ** Functions
  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const onSubmit = data => {
    const body = {
      key: data?.type
    }
    onConfirm(body)
    reset()
    handleClose()
  }

  useEffect(() => {
    setValue('type', data)
  }, [data])

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
                  <Controller
                    name={strings.translateTypeFieldKey}
                    control={control}
                    rules={translateUpdateDialogRulesVal.type}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        autoComplete='off'
                        value={value}
                        label={strings.translateTypeFieldTitle}
                        onChange={onChange}
                        id='update-type'
                        error={Boolean(errors.type)}
                        inputProps={{ maxLength: 80 }}
                      />
                    )}
                  />

                  {errors.type && errorMessage(errors?.type)}
                </FormControl>
              </Grid>
            </Grid>

            <Box sx={styles.buttonsContainer}>
              <Button variant='contained' type='submit' id={'update-type-button'}>
                {confirmText ?? t('update')}
              </Button>
              <Button variant='outlined' type='button' color='secondary' onClick={handleClose} id={'cancel-type'}>
                {strings.cancel}
              </Button>
            </Box>
          </Box>
          {/* Close Icon */}
          <IconButton aria-label='close' onClick={handleClose} sx={styles?.closeButtonIcon} id={'cancel-type'}>
            <Icon icon='mdi:close' />
          </IconButton>
        </form>
      </DialogContent>
    </Dialog>
  )
}
