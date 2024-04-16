/* eslint-disable no-console */
/**
 * Utility methods to be used for invoking API methods
 */

import Axios from 'axios'
import queryString from 'querystring'
import authConfig from 'src/configs/auth'

// ** Moment
import moment from 'moment'
import { authentication } from '@endpoints/authentication'
import { sign } from 'jsonwebtoken'

const showLogs = false

export const getDefaultHeaders = async () => {
  const isCypressTest = (window.Cypress && Cypress.testingType === 'e2e') || false

  if (localStorage.getItem('accessToken')) {
    const rememberMe = JSON.parse(localStorage.getItem('rememberMe'))

    if (rememberMe?.rememberMe === false) {
      const rememberMeDate = moment(rememberMe?.date)
      const checkDate = isCypressTest ? rememberMeDate.add(10, 'seconds') : rememberMeDate.add(24, 'hours')

      if (moment().isSameOrAfter(checkDate)) {
        localStorage.removeItem(authConfig.userData)
        localStorage.removeItem(authConfig.storageTokenKeyName)
        localStorage.removeItem(authConfig.storageUId)
        localStorage.removeItem(authConfig.storageRoleName)
        window.location.href = '/login'
        await callApi({ uriEndPoint: authentication.clearCookies })
      }
    }

    const language = localStorage.getItem('i18nextLng')

    return {
      // Authorization: 'Bearer ' + (await checkTokenExpired()),
      'Content-Type': 'application/json',
      'Origin-api': window.location.origin,
      'Accept-Language': language,
      SameSite: 'None'
    }
  } else {
    return { 'Content-Type': 'application/json', 'Origin-api': window.location.origin, SameSite: 'None' }
  }
}

export const makeUrl = ({ uri = '', pathParams, query }, host) => {
  return `${host || `${window?.location?.origin}`}${uri
    .split('/')
    .map(param => (param.charAt(0) === ':' ? encodeURI(pathParams[param.slice(1)]) : param))
    .join('/')}${query ? `?${queryString.stringify(query)}` : ''}`
}

const callAxios = async ({ uriEndPoint, pathParams, query, body, apiHostUrl, nextUrl }) => {
  showLogs && console.log('Call AXIOS ==>', { uriEndPoint, pathParams, query, body, apiHostUrl })

  const payload = { uriEndPoint, pathParams, query, body, apiHostUrl }

  const encPayload = sign(payload, process.env.NEXT_PUBLIC_API_SECRET_KEY)

  if (uriEndPoint?.headerProps?.type === 'formData')
    return Axios({
      method: uriEndPoint.method,
      url: makeUrl({ ...uriEndPoint, uri: '/api/form-data' + uriEndPoint.uri, pathParams, query }, apiHostUrl),
      headers: {
        ...(await getDefaultHeaders()),
        ...uriEndPoint.headerProps
      },
      data: body || {}
    })

  if (nextUrl)
    return Axios({
      method: uriEndPoint.method,
      url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
      headers: {
        ...(await getDefaultHeaders()),
        ...uriEndPoint.headerProps
      },
      data: body || {}
    })

  return Axios({
    method: 'POST',
    url: '/api/backend',
    headers: {
      ...(await getDefaultHeaders())
    },
    data: { params: encPayload }
  })
}

export const callApi = props => {
  const { uriEndPoint = { uri: '', method: '', headerProps: {} }, pathParams, query, body, apiHostUrl, nextUrl } = props

  return new Promise((resolve, reject) => {
    callAxios({
      uriEndPoint,
      pathParams,
      query,
      body,
      apiHostUrl,
      nextUrl
    })
      .then(response => {
        showLogs && console.log('callApi RES ==>', response.data)
        resolve(response?.data)
      })
      .catch(err => {
        showLogs && console.log('callApi ERR ==>', err)
        reject(err.response?.data ?? err)
      })
  })
}
