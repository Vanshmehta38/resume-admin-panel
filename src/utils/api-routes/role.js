// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Strings Imports
import { strings } from '@strings'

// ** Endpoints Imports
import { roles } from '@endpoints/role'

// ** API Global Function Imports
import { callApi } from 'src/utils/api-utils'

// ** Role List
export const roleList = async pages => {
  let url = pages
    ? {
        uriEndPoint: roles.roleList,
        query: { page: pages.page, items_per_page: pages.pageSize, search: pages.search }
      }
    : { uriEndPoint: roles.roleList }

  const response = await callApi(url)
    .then(res => res)
    .catch(err => toast.error(err?.message ?? strings.failToGetRoleList))

  return response?.data
}

// ** Add Role
export const addRole = async data => {
  return callApi({
    uriEndPoint: roles.addRole,
    body: data
  })
    .then(res => {
      toast.success(res.message ?? strings.addRoleMsg)
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failToAddRoleMsg)
    })
}

// ** Update Role
export const updateRole = async ({ id, data }) => {
  return callApi({
    uriEndPoint: roles.updateRole,
    pathParams: { id: id },
    body: data
  })
    .then(res => {
      toast.success(res.message ?? strings.updateRoleMsg)
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failToUpdateRoleMsg)
    })
}

// ** View Role
export const viewRole = async id => {
  return callApi({
    uriEndPoint: roles.viewRole,
    pathParams: { id: id }
  })
    .then(res => {
      return res
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failViewRoleMsg)
    })
}

// ** View Employees By Its Role
export const viewEmployeeByRoles = async id => {
  return callApi({
    uriEndPoint: roles.viewEmployeeByRoles,
    pathParams: { id: id }
  })
    .then(res => {
      return res
    })
    .catch(err => {
      toast.error(err?.message ?? 'Failed to fetch role data', {
        style: {
          color: '#fff',
          backgroundColor: '#da4567'
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#da4567'
        }
      })
    })
}

// ** Delete Role
export const deleteRole = async id => {
  return callApi({
    uriEndPoint: roles.deleteRole,
    pathParams: { id: id }
  })
    .then(res => {
      toast.success(res.message ?? strings.deleteRoleMsg)
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failToDeleteRoleMsg)
    })
}
