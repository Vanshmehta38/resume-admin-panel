// ** React imports
import { useTranslation } from 'react-i18next'

// ** Constant imports
import { pattern } from '@patterns'

export const ProfileRules = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation()

  return {
    defaultValues: {
      name: '',
      last_name: '',
      mobile_no: '',
      email: '',
      password: '',
      country: '',
      role: ''
    },
    email: {
      required: { value: true, message: t('adminProfileEmailRequiredErrorMsg') },
      pattern: { value: pattern.email, message: t('adminProfileEmailValidationErrorMsg') }
    },
    name: {
      required: { value: true, message: t('optilabUserNameReqMsg') },
      minLength: { value: 2, message: t('minLengthMsg') },
      pattern: { value: pattern.alphaAllowed, message: t('alphabetsAllowed') }
    },
    last_name: {
      required: { value: true, message: t('lastNameReqMsg') },
      minLength: { value: 2, message: t('minLengthMsg') },
      pattern: { value: pattern.alphaAllowed, message: t('alphabetsAllowed') }
    },
    password: {
      required: { value: true, message: t('adminProfilePasswordRequiredErrorMsg') },
      pattern: { value: pattern.passwordPattern, message: t('passwordPatternMsg') }
    },
    country: {},
    role: {},
    mobile_no: {
      required: { value: true, message: t('optilabPhoneReqMsg') },

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
