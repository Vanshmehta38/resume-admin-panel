/* eslint-disable react-hooks/rules-of-hooks */
// ** React imports
import { useTranslation } from 'react-i18next'

// ** Constant imports
import { pattern } from '@patterns'

export const resetPasswordDialogRules = () => {
  const { t } = useTranslation()

  return {
    defaultValues: {
      password: '',
      confirm_password: ''
    },
    password: {
      required: { value: true, message: t('loginPasswordRequiredErrorMsg') },
      pattern: { value: pattern.passwordPattern, message: t('passwordPatternMsg') }
    },
    confirm_password: {
      required: { value: true, message: t('confirmPasswordRequiredErrorMsg') }
    }
  }
}
