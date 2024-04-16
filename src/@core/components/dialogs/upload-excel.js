// ** React Imports
import { forwardRef, useEffect, useState } from 'react'

// ** Next Imports
import Image from 'next/image'
import Link from 'next/link'

// ** Image Imports
import excelImage from '@images/excel-icon.png'

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

const useStyles = makeStyles(styles?.makeExcelStylesObject)

export default function UploadExcelDialog({ open, setOpen, excelPath, onConfirm, ...props }) {
  // ** Vars
  const { t } = useTranslation()
  const theme = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const lgBreakpoint = useMediaQuery('(max-width: 1199px)')
  const smBreakpoint = useMediaQuery('(max-width: 662px)')
  const xsBreakpoint = useMediaQuery('(max-width: 450px)')
  const classes = useStyles()

  // ** State
  const [excelFile, setExcelFile] = useState(null)

  const handleClose = () => {
    setOpen(false)
    setExcelFile(null)
  }

  useEffect(() => {
    if (!open) {
      setExcelFile(null)
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
        <Box sx={styles.dialogExcelMainContainerStyle}>
          <Typography sx={styles.mainExcelTitleText}>{t(strings.uploadViaExcel)}</Typography>
          <Box sx={styles.excelMainBox}>
            <fieldset style={styles.excelFieldSet(smBreakpoint, xsBreakpoint)}>
              <legend style={styles.excelLegend}>{t(strings.downloadSampleExcel)}</legend>
              <Button
                style={styles.excelButtonStyle}
                component={Link}
                variant='contained'
                href={excelPath}
                id={'download-excel'}
              >
                <Box sx={styles.excelBoxStyle}>
                  <Image src={excelImage} width={50} height={50} alt={t(strings.excel)} />
                  <Typography fontSize={'1rem'} mt={3} sx={styles.excelDownloadTextStyle}>
                    {t(strings.download)}
                  </Typography>
                </Box>
              </Button>
            </fieldset>

            <div style={styles.line(lgBreakpoint, smBreakpoint, xsBreakpoint)}></div>

            <div style={styles.excelUploadFieldSetDiv(smBreakpoint)}>
              <fieldset style={styles.excelUploadFieldSet(smBreakpoint, xsBreakpoint)}>
                <legend style={styles.excelLegend}>{t(strings.selectExcel)}</legend>
                {excelFile !== null && (
                  <Button style={styles.excelButtonStyle} variant='contained'>
                    <Box sx={styles.excelBoxStyle}>
                      <Image src={excelImage} width={50} height={50} alt={t(strings.excel)} />
                      <Typography fontSize={'0.95rem'} mt={3}>
                        {excelFile?.name}
                      </Typography>
                    </Box>
                    <Icon
                      icon='carbon:close-filled'
                      color='red'
                      fontSize={22}
                      style={styles.iconButtonStyle}
                      onClick={() => setExcelFile(null)}
                    />
                  </Button>
                )}
                {!excelFile && (
                  <Button
                    style={styles.excelButtonStyle}
                    component='label'
                    variant='contained'
                    htmlFor={'excel'}
                    id={'upload-excel-file'}
                  >
                    <Box sx={styles.excelBoxStyle}>
                      <Typography fontSize={'1rem'}>{t(strings.uploadFile)}</Typography>
                    </Box>
                    <input
                      type='file'
                      accept='.xlsx'
                      onChange={e => {
                        setExcelFile(e.currentTarget.files[0])
                      }}
                      hidden
                      id='excel'
                    />
                  </Button>
                )}
              </fieldset>
              {/* Button */}
              <Box sx={styles.excelButtonsContainer}>
                <Button
                  variant='contained'
                  onClick={() => onConfirm(excelFile)}
                  id={'confirm-upload'}
                  disabled={excelFile ? false : true}
                >
                  {t(strings.upload)}
                </Button>
                <Button variant='outlined' color='secondary' onClick={handleClose} id={'cancel-upload'}>
                  {t(strings.cancel)}
                </Button>
              </Box>
            </div>
          </Box>
        </Box>
        {/* Close Icon */}
        <IconButton aria-label='close' onClick={handleClose} id='close-icon' sx={styles?.closeButtonIcon}>
          <Icon icon='mdi:close' />
        </IconButton>
      </DialogContent>
    </Dialog>
  )
}
