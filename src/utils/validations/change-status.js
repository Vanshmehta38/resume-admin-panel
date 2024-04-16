// ** React Import
import { useTranslation } from 'react-i18next'

export const changeStatusRules = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation()

  return {
    defaultValues: {
      status: ''
    },
    status: {
      required: { value: true, message: t('changeStatusDialogKeyTitleReqMsg') }
    }
  }
}
