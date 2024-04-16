// ** React imports
import { useTranslation } from 'react-i18next'

// ** Constant imports
import { pattern } from '@patterns'

export const resetPasswordRulesFunction = () => {
  // ** Hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
