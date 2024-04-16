import { color } from '@colors'
import { Icon } from '@iconify/react'

export const toastOptionsDefault = {
  className: 'react-hot-toast',
  success: {
    icon: <Icon icon={`mdi:tick-circle-outline`} fontSize={'1.3rem'}></Icon>,
    style: {
      color: color.toastTextSuccess,
      backgroundColor: color.toastBgSuccess,
      boxShadow: 'none'
    }
  },
  error: {
    icon: <Icon icon={`mdi:information-outline`} fontSize={'1.3rem'}></Icon>,
    style: {
      color: color.toastTextError,
      backgroundColor: color.toastBgError,
      boxShadow: 'none'
    }
  }
}
