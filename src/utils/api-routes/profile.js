// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Strings Imports
import { strings } from '@strings'

// ** Endpoints Imports
import { profile } from '@endpoints/profile'

// ** API Global Function Imports
import { callApi } from 'src/utils/api-utils'

// ** Profile view
export const viewProfile = async loginId => {
  return callApi({
    uriEndPoint: profile.viewProfile,
    pathParams: { id: loginId }
  })
    .then(res => {
      return res
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failToViewProfileDataMsg)
    })
}

// ** Change password
export const updatePassword = async body => {
  return callApi({ uriEndPoint: profile.updatePassword, pathParams: { id: body.id }, body: body.data })
    .then(res => {
      toast.success(res.message ?? strings.passwordUpdateSuccessfulMsg)

      return res
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failToUpdateProfilePassword)
    })
}
