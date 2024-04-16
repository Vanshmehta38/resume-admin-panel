// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Strings Imports
import { strings } from '@strings'

// ** Endpoints Imports
import { permissions } from '@endpoints/permission'

// ** API Global Function Imports
import { callApi } from 'src/utils/api-utils'

// ** Permission List
export const fetchPermissionsList = async pages => {
  let url = pages
    ? {
        uriEndPoint: permissions.permissionsList,
        query: { page: pages.page, items_per_page: pages.pageSize, search: pages.search }
      }
    : { uriEndPoint: permissions.permissionsList }

  const response = await callApi(url)
    .then(res => res)
    .catch(err => toast.error(err?.message ?? strings.failPermissionList))

  return response?.data
}
