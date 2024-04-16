// ** MUI Imports
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ModeToggler = props => {
  // ** Props
  const { settings, saveSettings } = props

  const handleModeChange = mode => {
    saveSettings({ ...settings, mode: mode })
  }

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else if (settings.mode === 'dark') {
      handleModeChange('semi-dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
      <Icon
        icon={
          settings.mode === 'dark'
            ? 'mdi:lightbulb-on-10'
            : settings.mode === 'semi-dark'
              ? 'mdi:lightbulb-on-40'
              : 'mdi:lightbulb-on-90'
        }
      />
    </IconButton>
  )
}

export default ModeToggler
