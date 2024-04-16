// ** Redux Imports
import { callApi } from '../api-utils'
import toast from 'react-hot-toast'

// ** API Imports
import { admins } from '@endpoints/admins'

// ** Strings Imports
import { strings } from '@strings'

// ** Admins List
export const fetchAdminsList = async pages => {
  const response = await callApi({
    uriEndPoint: admins.adminsList,
    query: {
      page: pages.page,
      items_per_page: pages.items_per_page,
      search: pages.search
    }
  })
    .then(res => res)
    .catch(err => toast.error(err.message ?? strings.failToGetAdminsList))

  return response
}

// ** Add Admins
export const addAdmins = async body => {
  return callApi({ uriEndPoint: admins.addAdmins, body })
    .then(res => {
      toast.success(res.data.message ?? strings.addAdminsMsg)

      return res
    })
    .catch(err => {
      toast.error(err.message ?? strings.failToAddAdminsMsg)
    })
}

// ** View Admins
export const viewAdmins = async id => {
  const response = callApi({
    uriEndPoint: admins.viewAdmins,
    pathParams: { adminsId: id },
    query: {}
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      toast.error(err.message ?? strings.failToGetAdminsDetailMsg)
    })

  return response
}

// ** Update Admins
export const updateAdmins = async ({ data, viewId }) => {
  return callApi({
    uriEndPoint: admins.updateAdmins,
    pathParams: { adminsId: viewId },
    body: data
  })
    .then(res => {
      toast.success(res.message ?? strings.updateAdminsMsg)

      return res
    })
    .catch(err => {
      toast.error(err.message ?? strings.failToUpdateAdminsMsg)
    })
}

// ** Update Admins Status
export const updateAdminsStatus = async data => {
  return callApi({
    uriEndPoint: admins.updateAdminsStatus,
    pathParams: { adminsId: data.id },
    body: { activity_status: data.status }
  })
    .then(res => {
      toast.success(res.data.message ?? strings.updateAdminsStatusMsg)
    })
    .catch(err => {
      toast.error(err.message ?? strings.failToUpdateAdminsStatusMsg)
    })
}

// ** Delete Admins
export const deleteAdmins = async id => {
  return callApi({
    uriEndPoint: admins.deleteAdmins,
    pathParams: { adminsId: id }
  })
    .then(res => {
      toast.success(res.message ?? strings.deleteAdminsMsg)

      return res
    })
    .catch(err => {
      toast.error(err.message ?? strings.failToDeleteAdminsMsg)
    })
}

// ** Update Admins
export const updateAdminsPassword = async ({ viewId, body }) => {
  return callApi({
    uriEndPoint: admins.updateAdminsPassword,
    pathParams: { adminsId: viewId },
    body: body
  })
    .then(res => {
      toast.success(res.message ?? strings.updateAdminsPasswordMsg)

      return res
    })
    .catch(err => {
      toast.error(err.message ?? strings.failedToUpdateAdminsPasswordMsg)
    })
}
