// ** Redux Imports
import { callApi } from '../api-utils'
import toast from 'react-hot-toast'

// ** API Imports
import { settings } from '@endpoints/settings'

// ** Strings Imports
import { strings } from '@strings'

// ** Setting List
export const fetchSettingList = async () => {
  const response = await callApi({
    uriEndPoint: settings.settingView
  })
    .then(res => res)
    .catch(err => toast.error(err.message ?? strings.failToGetSettingList))

  return response
}

// ** Add Setting
export const settingEdit = async body => {
  return callApi({ uriEndPoint: settings.settingEdit, body })
    .then(res => {
      toast.success(res.data.message ?? strings.updateSettingMsg)

      return res
    })
    .catch(err => {
      toast.error(err.message ?? strings.updateSettingMsg)
    })
}
