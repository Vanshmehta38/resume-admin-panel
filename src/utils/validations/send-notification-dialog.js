// ** React Import
import { useTranslation } from 'react-i18next'

export const sendNotificationDialogRules = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation()

  return {
    defaultValues: {
      title: '',
      description: '',
      channels: { app: false, sms: false, email: false }
    },
    title: {
      required: { value: true, message: t('sendNotificationDialogKeyTitleReqMsg') }
    },
    description: {
      required: { value: true, message: t('sendNotificationDialogKeyDescriptionReqMsg') }
    },
    channels: {
      required: { value: true, message: t('sendNotificationDialogKeyChannelsReqMsg') }
    }
  }
}
