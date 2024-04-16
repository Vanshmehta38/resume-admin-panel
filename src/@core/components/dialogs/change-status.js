// ** React Imports
import { forwardRef, useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Autocomplete, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

// ** Iconify Icon Imports
import { Icon } from '@iconify/react'

// ** Language Translation Imports
import { useTranslation } from 'react-i18next'

// ** Strings, routes and other constants
import { strings } from '@strings'

// ** Form Validations
import { errorMessage } from '@functions/error-message'
import { changeStatusRules } from '@validations/change-status'
import { Controller, useForm } from 'react-hook-form'

// ** Styles and Styled Components
import { capitalizeText } from '@functions/capitalize-text'
import * as styles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(styles?.makeStylesObject)

export default function ChangeStatusDialog({ open, setOpen, title, onConfirm, confirmText, option, ...props }) {
  // ** Hooks
  const theme = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const classes = useStyles()
  const { t } = useTranslation()
  const changeStatusValidation = changeStatusRules()

  const {
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: changeStatusValidation.defaultValues
  })

  const [valueData, setValueData] = useState({})

  // ** Functions
  const handleClose = () => {
    setOpen(false)
    if (!open) {
      setValueData(null)
    } else {
      setValueData(valueData)
    }
    reset()
  }

  const onSubmit = data => {
    setValueData(data?.status)
    onConfirm(data?.status)
    setValueData(null)
    handleClose()
  }

  useEffect(() => {
    if (!open) {
      setValueData(null)
    } else {
      setValueData(valueData)
      const statusData = option?.find(i => i?.status === props?.value)
      setValue('status', statusData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueData, open, props])

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
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Box sx={styles.dialogMainContainerStyle}>
            <Typography sx={styles.mainTitleText}>{title ?? strings.changeStatusDialogDefaultHeading}</Typography>

            <Grid container spacing={6}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    name='status'
                    control={control}
                    rules={changeStatusValidation.status}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <Autocomplete
                          readOnly={title === 'view' ? true : false}
                          value={value}
                          error={Boolean(errors.status)}
                          id={'select-status'}
                          options={option || []}
                          onChange={(event, value) => {
                            onChange(value)
                          }}
                          getOptionLabel={option => {
                            return capitalizeText(option.status) || ''
                          }}
                          renderOption={(props, option) => {
                            return <li {...props}>{capitalizeText(option?.status ?? '')}</li>
                          }}
                          renderInput={params => (
                            <TextField
                              id={'select-status'}
                              error={Boolean(errors.status)}
                              {...params}
                              label={t('Status')}
                            />
                          )}
                          data-testid='change-driver-status'
                        />
                      )
                    }}
                  />
                  {errorMessage(errors?.status)}
                </FormControl>
              </Grid>
            </Grid>

            <Box sx={styles.buttonsContainer}>
              <Button variant='contained' data-testid='change-status-button' type='submit' id='update-status-submit'>
                {confirmText ?? strings.changeStatusDialogConfirmText}
              </Button>
              <Button
                variant='outlined'
                type='button'
                color='secondary'
                onClick={handleClose}
                id='update-status-cancel'
              >
                {strings.cancel}
              </Button>
            </Box>
          </Box>
          {/* Close Icon */}
          <IconButton aria-label='close' onClick={handleClose} sx={styles?.closeButtonIcon} id='update-status-cancel'>
            <Icon icon='mdi:close' />
          </IconButton>
        </form>
      </DialogContent>
    </Dialog>
  )
}
