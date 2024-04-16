// ** React Imports
import { forwardRef, useState } from 'react'

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
import { makeStyles } from '@mui/styles'
import { TextField } from '@mui/material'

// ** Iconify Icon Imports
import { Icon } from '@iconify/react'

// ** Language Translation Imports
import { useTranslation } from 'react-i18next'

// ** react DatePicker
import DatePicker from 'react-datepicker'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Moment imports
import moment from 'moment'

// ** Form Validations
import { errorMessage } from '@functions/error-message'
import { generateInvoiceRules } from '@validations/generate-invoice'
import { Controller, useForm } from 'react-hook-form'

// ** Styles and Styled Components
import * as styles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(styles?.makeStylesObject)

export default function GenerateInvoice({ open, setOpen, title, onConfirm, confirmText, isDisabled, ...props }) {
  // ** Hooks
  const theme = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const classes = useStyles()
  const { t } = useTranslation()
  const generateInvoiceValidation = generateInvoiceRules()
  const previousMonth = moment().subtract(1, 'months').startOf('month')._d

  // ** States
  const [month, setMonth] = useState(previousMonth)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: generateInvoiceValidation.defaultValues
  })

  // ** Functions
  const handleClose = () => {
    setOpen(false)
    setMonth(previousMonth)
  }

  const onSubmit = () => {
    onConfirm(month)
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
      <DatePickerWrapper>
        <DialogContent>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Box sx={styles.dialogMainContainerStyle}>
              <Grid container spacing={5} alignItems={'center'}>
                <Grid item xs={6}>
                  <Typography sx={styles.mainTitleText}>{title ?? t('generateInvoiceForLabel')}</Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <Controller
                      name='invoice_date'
                      control={control}
                      rules={generateInvoiceValidation.invoice_date}
                      render={({ field: { onChange } }) => {
                        return (
                          <DatePicker
                            showMonthYearPicker
                            selected={month}
                            value={month}
                            disabled={isDisabled}
                            id='select-month'
                            dateFormat='MMMM-yyyy'
                            onChange={date => {
                              onChange(date)
                              setMonth(date)
                            }}
                            customInput={<TextField id={'select-month'} error={Boolean(errors.invoice_date)} />}
                          />
                        )
                      }}
                    />
                    {errors.invoice_date && errorMessage(errors?.invoice_date)}
                  </FormControl>
                </Grid>
              </Grid>

              <Box sx={styles.buttonsContainer}>
                <Button variant='contained' type='submit' id='generate-button'>
                  {confirmText ?? t('generateButton')}
                </Button>
                <Button variant='outlined' type='button' color='secondary' onClick={handleClose} id='cancel-button'>
                  {t('Cancel')}
                </Button>
              </Box>
            </Box>
            {/* Close Icon */}
            <IconButton aria-label='close' onClick={handleClose} sx={styles?.closeButtonIcon} id='update-status-cancel'>
              <Icon icon='mdi:close' />
            </IconButton>
          </form>
        </DialogContent>
      </DatePickerWrapper>
    </Dialog>
  )
}
