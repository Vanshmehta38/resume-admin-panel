// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Strings Imports
import { strings } from '@strings'

// ** Endpoints Imports
import { moduleList } from '@endpoints/module-list'

// ** API Global Function Imports
import { callApi } from 'src/utils/api-utils'

// ** Permission List
export const ModuleList = async pages => {
  let url = pages
    ? {
        uriEndPoint: moduleList.moduleListData,
        query: { page: pages.page, items_per_page: pages.pageSize, search: pages.search }
      }
    : { uriEndPoint: moduleList.moduleListData }

  const response = await callApi(url)
    .then(res => res)
    .catch(err => toast.error(err?.message ?? strings.failPermissionList))

  return response?.data
}
