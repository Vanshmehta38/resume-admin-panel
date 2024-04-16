// ** React imports
import { useTranslation } from 'react-i18next'

// ** Constant imports
import { pattern } from '@patterns'

export const adminRules = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation()

  return {
    defaultValues: {
      first_name: '',
      last_name: '',
      mobile_no: '',
      email: '',
      password: '',
      country_u_id: '',
      role_u_id: '',
      activity_status: true
    },
    email: {
      required: { value: true, message: t('adminEmailRequiredErrorMsg') },
      pattern: { value: pattern.email, message: t('adminEmailValidationErrorMsg') }
    },
    first_name: {
      required: { value: true, message: t('FirstNameReqMsg') },
      minLength: { value: 2, message: t('MinLengthMsg') },
      pattern: { value: pattern.alphaAllowed, message: t('alphabetsAllowed') }
    },
    last_name: {
      required: { value: true, message: t('LastNameReqMsg') },
      minLength: { value: 2, message: t('MinLengthMsg') },
      pattern: { value: pattern.alphaAllowed, message: t('alphabetsAllowed') }
    },
    password: {
      required: { value: true, message: t('loginPasswordRequiredErrorMsg') },
      pattern: { value: pattern.passwordPattern, message: t('passwordPatternMsg') }
    },
    country_u_id: {
      required: { value: true, message: t('adminCountryReqMsg') }
    },
    role_u_id: {
      required: { value: true, message: t('adminRoleReqMsg') }
    },
    mobile_no: {
      required: { value: false, message: t('adminMobileRequiredMsg') },

      minLength: {
        value: 10,
        message: t('mobileMinLengthMsg')
      },
      pattern: {
        value: pattern.numbersAllowed,
        message: t('numberAllowedOnly')
      }
    }
  }
}
