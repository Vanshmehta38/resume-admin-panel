// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Endpoints Imports
import { dashboard } from '@endpoints/dashboard'

// ** API Global Function Imports
import { callApi } from 'src/utils/api-utils'

// ** Constant imports
import { strings } from '@strings'

// ** Car List
export const dashboardDetails = async () => {
  const response = await callApi({ uriEndPoint: dashboard.dashboardDetails })
    .then(res => res)

    .catch(err => toast.error(err?.message ?? strings.failToGetDashboardDetails))

  return response?.data
}
