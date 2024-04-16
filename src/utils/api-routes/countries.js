// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Endpoints Imports
import { country } from '@endpoints/countries'

// ** API Global Function Imports
import { callApi } from 'src/utils/api-utils'

// ** Constant imports
import { strings } from '@strings'

// ** Country List
export const countryList = async pages => {
  let url = pages
    ? {
        uriEndPoint: country.countryList,
        query: {
          page: pages.page,
          items_per_page: pages.items_per_page,
          search: pages.search,
          is_on_board: pages.is_on_board
        }
      }
    : { uriEndPoint: country.countryList }

  const response = await callApi(url)
    .then(res => res)

    .catch(err => toast.error(err?.message ?? strings.failToGetCountryList))

  return response?.data
}

// ** Update Country Status
export const updateCountryStatus = async ({ id, status }) => {
  return callApi({
    uriEndPoint: country.updateCountryStatus,
    pathParams: { id: id },
    body: { activity_status: status }
  })
    .then(res => {
      toast.success(res.message ?? strings.updateCountryStatusMsg)

      return res
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failToUpdateCountryStatusMsg)

      return err
    })
}

// ** Update Country
export const addOnBoardCountryStatus = async (id, status) => {
  return callApi({
    uriEndPoint: country.addOnBoardCountry,
    body: { is_on_board: status },
    pathParams: { id: id }
  })
    .then(res => {
      toast.success(res.message ?? strings.updateOnBoardCountryStatusMsg)

      return res
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failToOnBoardUpdateCountryMsg)

      return err
    })
}

// ** Update Country
export const updateCountry = async ({ data, viewId }) => {
  return callApi({
    uriEndPoint: country.updateCountry,
    pathParams: { id: viewId },
    body: data
  })
    .then(res => {
      toast.success(res.message ?? strings.updateCountryMsg)

      return res
    })
    .catch(err => {
      toast.error(err?.message ?? strings.failToUpdateCountryMsg)

      return err
    })
}
