// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'

// ** Iconify Imports
import { Icon } from '@iconify/react'

// ** Styles and styled components
import { Divider, MenuItem, Typography, Zoom } from '@mui/material'
import { Box } from '@mui/system'
import * as styles from './styles'

export default function ActionMenu({ anchorElement, data_testid, setAnchorElement, options }) {
  const ITEM_HEIGHT = 48

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
    setAnchorElement(null)
  }

  useEffect(() => {
    setAnchorEl(anchorElement)
  }, [anchorElement])

  return (
    <Menu
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={Boolean(anchorEl)}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          borderRadius: 10
        }
      }}
      TransitionComponent={Zoom}
      data-testid={`menu-item-${data_testid}`}
    >
      {options?.map((option, index) => (
        <div key={index}>
          <MenuItem
            onClose={handleClose}
            onClick={option?.onClick}
            sx={styles?.adminsRowOptionMenuItemStyle}
            id={option.id}
            data-testid={`menu-item-${data_testid}-${option.id}`}
          >
            <Box sx={styles.menuItemsContainer}>
              <Icon icon={option?.icon} fontSize={option?.iconSize ?? '1.3rem'} />
              <Typography fontSize={'0.9rem'} letterSpacing={'0.04rem'}>
                {option?.title}
              </Typography>
            </Box>
          </MenuItem>
          {index !== options.length - 1 && <Divider sx={{ my: 0 }} />}
        </div>
      ))}
    </Menu>
  )
}
