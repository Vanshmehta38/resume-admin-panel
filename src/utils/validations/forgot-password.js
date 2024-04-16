import { pattern } from '@patterns'
import { useTranslation } from 'react-i18next'

export const forgotPasswordRulesFunction = () => {
  // ** Hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation()

  return {
    defaultValues: {
      email: ''
    },
    email: {
      required: { value: true, message: t('loginEmailRequiredErrorMsg') },
      pattern: { value: pattern.email, message: t('loginEmailValidationErrorMsg') }
    }
  }
}
