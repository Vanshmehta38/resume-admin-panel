// ** React imports
import { useTranslation } from 'react-i18next'

// ** Constant imports
import { pattern } from '@patterns'

export const loginRulesFunction = () => {
  // ** Hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation()

  return {
    defaultValues: {
      password: '',
      email: ''
    },
    email: {
      required: { value: true, message: t('loginEmailRequiredErrorMsg') },
      pattern: { value: pattern.email, message: t('loginEmailValidationErrorMsg') }
    },
    password: {
      required: { value: true, message: t('loginPasswordRequiredErrorMsg') }
    }
  }
}
