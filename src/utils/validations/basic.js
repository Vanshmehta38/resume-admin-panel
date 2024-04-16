// ** React imports
import { useTranslation } from 'react-i18next'

// ** Constant imports
import { pattern } from '@patterns'

export const basicRules = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation()

  return {
    defaultValues: {
      company_name: '',
      mobile_number: '',
      alternate_mobile_number: '',
      address_line_one: '',
      address_line_two: '',
      pan_number: '',
      gst_number: '',
      country: '',
      website: '',
      email: ''
    },
    company_name: {
      minLength: {
        value: 2,
        message: t('optilabBasicCompanyNameMinLengthMsg')
      },
      pattern: {
        value: pattern.alphaAllowed,
        message: t('optilabBasicAlphabetsAllowed')
      }
    },
    mobile_number: {
      minLength: {
        value: 12,
        message: t('optilabBasicPhoneMinLengthMsg')
      },
      pattern: {
        value: pattern.internationalNumber,
        message: t('optilabBasicNumberAllowedFormat')
      }
    },
    alternate_mobile_number: {
      minLength: {
        value: 12,
        message: t('optilabBasicAltPhoneMinLengthMsg')
      },
      pattern: {
        value: pattern.internationalNumber,
        message: t('optilabBasicNumberAllowedFormat')
      }
    },
    pan_number: {
      pattern: {
        value: pattern.panCardAllowed,
        message: t('optilabBasicPanCardMinLength')
      }
    },
    gst_number: {
      minLength: {
        value: 15,
        message: t('optilabBasicGstNumberMinLengthMsg')
      }
    },
    email: {
      pattern: { value: pattern.email, message: t('optilabBasicEmailValidationErrorMsg') }
    },

    website: {
      pattern: { value: pattern.urlPattern, message: t('optilabBasicWebsiteValidUrlMsg') }
    }
  }
}
