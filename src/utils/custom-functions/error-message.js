import { FormHelperText } from '@mui/material'

export const errorMessage = errors => {
  if (errors) return <FormHelperText sx={{ color: 'error.main', ml: 1 }}>{errors?.message}</FormHelperText>

  return null
}
