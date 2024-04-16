// ** Redux Imports
import { callApi } from '../api-utils'
import toast from 'react-hot-toast'

// ** API Imports
import { basic } from '@endpoints/basic'

// ** Strings Imports
import { strings } from '@strings'

// ** View Basic
export const viewBasic = async id => {
  const response = callApi({
    uriEndPoint: basic.viewBasic,
    pathParams: { basicId: id },
    query: {}
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      toast.error(err.message ?? strings.failToGetBasicDetailMsg)
    })

  return response
}

// ** Update Basic
export const updateSetting = async data => {
  return callApi({
    uriEndPoint: basic.updateSetting,
    body: data.body,
    query: { type: data.type }
  })
    .then(res => {
      toast.success(res.message ?? strings.updateBasicMsg)

      return res
    })
    .catch(err => {
      toast.error(err.message ?? strings.failToUpdateBasicMsg)
    })
}
