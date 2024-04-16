// ** React Imports
import { forwardRef, useEffect, useState } from 'react'

// ** Next Imports
import Image from 'next/image'
import Link from 'next/link'

// ** Image Imports
import jsonImage from '@images/json-icon.png'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { makeStyles } from '@mui/styles'

// ** Translation Imports
import { useTranslation } from 'react-i18next'

// ** Icon Imports
import { Icon } from '@iconify/react'

// ** Strings, routes and other constants
import { strings } from '@strings'

// ** Custom Component imports
import { errorMessage } from '@functions/error-message'
import { Controller, useForm } from 'react-hook-form'
import { uploadJsonDialogRules } from '@validations/upload-json'

// ** JSON file imports
import translateData from '@json/translate-data.json'

// ** Styles and Styled Components
import * as styles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const useStyles = makeStyles(styles?.makeExcelStylesObject)

export default function UploadJsonDialog({ open, setOpen, jsonPath, languageId, onConfirm, ...props }) {
  // ** Hook
  const { t } = useTranslation()
  const uploadJsonValidation = uploadJsonDialogRules()

  // ** Vars
  const theme = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const lgBreakpoint = useMediaQuery('(max-width: 1199px)')
  const smBreakpoint = useMediaQuery('(max-width: 662px)')
  const xsBreakpoint = useMediaQuery('(max-width: 450px)')
  const classes = useStyles()

  // ** State
  const [jsonFile, setJsonFile] = useState(null)
  const [fileName, setFileName] = useState(null)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: uploadJsonValidation.defaultValues })

  const handleClose = () => {
    setOpen(false)
    setJsonFile(null)
    reset()
  }

  const handleFileUpload = event => {
    const file = event.target.files[0]
    setFileName(file)

    const reader = new FileReader()
    reader.onload = event => {
      setJsonFile(event.target.result)
    }

    reader.readAsText(file)
  }

  const onSubmit = data => {
    const jsonData = JSON.parse(jsonFile)

    const body = {
      key: data?.key,
      type: data?.type?.module_name,
      fields: jsonData,
      language_u_id: languageId
    }

    onConfirm(body)
    handleClose()
  }

  useEffect(() => {
    if (!open) {
      setJsonFile(null)
    }
  }, [open])

  return (
    <Dialog
      classes={{
        paper: theme ? classes.dialogHiddenDrawer : classes.dialog
      }}
      open={open}
      fullWidth
      TransitionComponent={Transition}
      {...props}
    >
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={styles.dialogExcelMainContainerStyle}>
            <Typography sx={styles.mainExcelTitleText}>{t('uploadJsonFileTitle')}</Typography>
            <Box sx={styles.excelMainBox}>
              {/* Download sample json file */}
              <fieldset style={styles.excelFieldSet(smBreakpoint, xsBreakpoint)}>
                <legend style={styles.excelLegend}>{t('downloadSampleJson')}</legend>
                <Button
                  style={styles.excelButtonStyle}
                  component={Link}
                  variant='contained'
                  href={jsonPath}
                  download={'Sample JSON File.json'}
                  target='_blank'
                  id={'download-excel'}
                >
                  <Box sx={styles.excelBoxStyle}>
                    <Image src={jsonImage} width={60} height={60} alt={t(strings.excel)} />
                    <Typography fontSize={'1rem'} mt={2} sx={styles.excelDownloadTextStyle} id={'download-sample-file'}>
                      {t(strings.download)}
                    </Typography>
                  </Box>
                </Button>
              </fieldset>

              <div style={styles.line(lgBreakpoint, smBreakpoint, xsBreakpoint)}></div>

              <Box style={styles.excelUploadFieldSetDiv(smBreakpoint)}>
                {/* Upload json */}
                <fieldset style={styles.excelUploadFieldSet(smBreakpoint, xsBreakpoint)}>
                  <legend style={styles.excelLegend}>{t('selectJson')}</legend>
                  {jsonFile !== null && (
                    <Button style={styles.excelButtonStyle} variant='contained'>
                      <Box sx={styles.excelBoxStyle}>
                        <Image src={jsonImage} width={50} height={50} alt={t('jsonAltText')} />
                        <Typography fontSize={'0.95rem'} mt={3}>
                          {fileName?.name}
                        </Typography>
                      </Box>
                      <Icon
                        icon='carbon:close-filled'
                        color='red'
                        fontSize={22}
                        id={'delete-file'}
                        style={styles.iconButtonStyle}
                        onClick={() => setJsonFile(null)}
                      />
                    </Button>
                  )}
                  {!jsonFile && (
                    <Button
                      style={styles.excelButtonStyle}
                      component='label'
                      variant='contained'
                      htmlFor={'json'}
                      id={'upload-json-file'}
                    >
                      <Box sx={styles.excelBoxStyle}>
                        <Typography fontSize={'1rem'}>{t(strings.uploadFile)}</Typography>
                      </Box>
                      <input
                        type='file'
                        accept='.json'
                        onChange={e => {
                          handleFileUpload(e)
                        }}
                        hidden
                        id='json'
                      />
                    </Button>
                  )}
                </fieldset>

                {/* Key */}
                <FormControl fullWidth sx={styles.marginTopStyle}>
                  <Controller
                    name={'key'}
                    control={control}
                    rules={uploadJsonValidation.key}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        autoComplete='off'
                        id={'module-name'}
                        value={value}
                        label={t('jsonUploadKeyHeader')}
                        onChange={onChange}
                        error={Boolean(errors.key)}
                        inputProps={{ maxLength: 50 }}
                      />
                    )}
                  />

                  {errors.key && errorMessage(errors?.key)}
                </FormControl>

                {/* Type */}
                <FormControl fullWidth sx={styles.marginTopStyle}>
                  <Controller
                    name='type'
                    control={control}
                    rules={uploadJsonValidation.type}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <Autocomplete
                          value={value}
                          error={Boolean(errors.type)}
                          id={'select-type'}
                          options={translateData || []}
                          onChange={(event, value) => {
                            onChange(value)
                          }}
                          getOptionLabel={option => {
                            return option.module_name || ''
                          }}
                          renderOption={(props, option) => {
                            return <li {...props}>{option?.module_name ?? ''}</li>
                          }}
                          renderInput={params => (
                            <TextField
                              id={'select-module-name'}
                              error={Boolean(errors.type)}
                              {...params}
                              label={t('jsonUploadTypeHeader')}
                              autoComplete='off'
                            />
                          )}
                        />
                      )
                    }}
                  />
                  {errors.type && errorMessage(errors?.type)}
                </FormControl>

                {/* Button */}
                <Box sx={styles.excelButtonsContainer}>
                  <Button variant='contained' type='submit' id={'confirm-upload'} disabled={jsonFile ? false : true}>
                    {t(strings.upload)}
                  </Button>
                  <Button variant='outlined' color='secondary' onClick={handleClose} id={'cancel-upload'}>
                    {t(strings.cancel)}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Close Icon */}
          <IconButton aria-label='close' onClick={handleClose} id='close-icon' sx={styles?.closeButtonIcon}>
            <Icon icon='mdi:close' />
          </IconButton>
        </form>
      </DialogContent>
    </Dialog>
  )
}
