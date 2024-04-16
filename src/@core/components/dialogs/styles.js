export const dialogMainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  alignItems: 'center',
  px: 6
}

export const mainTitleText = {
  fontSize: '1.4rem',
  fontWeight: 500,
  textTransform: 'capitalize',
  textAlign: 'center'
}

export const subTitleText = {
  color: 'rgba(80,80,80,1)',
  letterSpacing: '0.03rem'
}

export const descriptionText = {
  fontSize: '1rem',
  fontWeight: 400
}

export const buttonsContainer = {
  paddingTop: 3,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 3
}

export const closeButtonIcon = { top: 8, right: 10, position: 'absolute', color: 'grey.500' }

export const channelsText = { color: theme => theme.palette.text.primary, fontSize: '15px' }

export const channelsFormGroup = { gap: 3 }

export const makeStylesObject = {
  dialog: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 0
  },
  dialogHiddenDrawer: {
    position: 'absolute',
    left: '46%',
    transform: 'translateX(-50%)',
    top: 0
  }
}

// Excel Dialog Style
export const makeExcelStylesObject = {
  dialog: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 0,
    maxWidth: '700px'
  },
  dialogHiddenDrawer: {
    position: 'absolute',
    left: '46%',
    transform: 'translateX(-50%)',
    top: 0
  }
}

export const dialogExcelMainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  alignItems: 'center'
}

export const mainExcelTitleText = {
  fontSize: '1.4rem',
  fontWeight: 500,
  textTransform: 'capitalize',
  textAlign: 'center',
  ml: 2
}

export const excelMainBox = {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  flexWrap: 'wrap',
  mt: 6,
  mb: 6
}

export const excelButtonStyle = {
  width: '100%',
  height: '160px',
  textAlign: 'center',
  justifyContent: 'center',
  border: '2px dotted rgba(0, 0, 0, 0.4)',
  background: 'rgba(0, 0, 0, 0.07)',
  padding: '10px',
  boxShadow: 'none'
}

export const iconButtonStyle = {
  position: 'absolute',
  top: -13,
  right: -9
}

export const excelBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  color: '#00000080',
  textTransform: 'capitalize'
}

export const excelDownloadTextStyle = {
  textDecoration: 'underline'
}

export const excelFieldSet = (smBreakpoint, xsBreakpoint) => ({
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  padding: '13px 18px 18px 18px',
  ...(smBreakpoint && {
    width: '80%'
  }),
  ...(xsBreakpoint && {
    width: '100%'
  })
})

export const excelUploadFieldSetDiv = smBreakpoint => ({
  width: smBreakpoint && '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: smBreakpoint && 'center'
})

export const excelUploadFieldSet = (smBreakpoint, xsBreakpoint) => ({
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  padding: '13px 18px 18px 18px',
  width: '270px',
  ...(smBreakpoint && {
    width: '80%'
  }),
  ...(xsBreakpoint && {
    width: '100%'
  })
})

export const excelLegend = {
  fontSize: '14px',
  fontWeight: 500,
  color: 'rgba(76, 78, 100, 0.6)'
}

export const line = (lgBreakpoint, smBreakpoint, xsBreakpoint) => ({
  height: '47dvh',
  width: '1px',
  margin: '8px 40px 0px 40px',
  background: 'rgba(76, 78, 100, 0.3)',
  ...(lgBreakpoint && {
    margin: '8px 24px 0px 24px'
  }),
  ...(smBreakpoint && {
    margin: '17px 0px 10px 0px',
    height: '1px',
    width: '80%'
  }),
  ...(xsBreakpoint && {
    width: '100%'
  })
})

export const excelButtonsContainer = {
  paddingTop: 3,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 3,
  mt: 5
}

export const marginTopStyle = {
  marginTop: 4
}
