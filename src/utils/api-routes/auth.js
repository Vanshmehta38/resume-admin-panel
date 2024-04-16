/* eslint-disable no-console */

import authConfig from 'src/configs/auth'
import Axios from 'axios'
import { authentication } from '@endpoints/authentication'
import { callApi } from '../api-utils'
import toast from 'react-hot-toast'
import { strings } from '@strings'

export const userLogin = body => {
  return callApi({ uriEndPoint: authentication.login, body, nextUrl: true })
    .then(res => {
      if (res.statusCode === 200) {
        localStorage.setItem(authConfig.storageTokenKeyName, true)
        localStorage.setItem(authConfig.storageUId, res.data.u_id)
        localStorage.setItem(authConfig.storageRoleName, res.data.name)
        localStorage.setItem('userData', JSON.stringify(res.data))

        return res
      } else {
        delete res.data

        return res
      }
    })

    .catch(err => {
      toast.error(err?.message ?? 'Failed to login')
      throw err
    })
}

export const verifyToken = () => {
  return callApi({ uriEndPoint: authentication.verifyToken, nextUrl: true })
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}

export const refreshToken = body => {
  return Axios({
    method: authentication.refreshToken.method,
    url: process.env.NEXT_PUBLIC_API_URL + authentication.refreshToken.uri,
    headers: {
      'Content-Type': 'application/json'
    },
    data: body
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      throw err
    })
}

export const verifyEmail = body => {
  return callApi({
    uriEndPoint: authentication.emailVerification,
    body,
    nextUrl: true,
    apiHostUrl: process.env.NEXT_PUBLIC_API_URL
  })
    .then(res => {
      return res
    })
    .catch(err => toast.error(err.message ?? strings.failToGetAdminsList))
}

export const verifyOtp = body => {
  return callApi({
    uriEndPoint: authentication.otpVerification,
    body,
    nextUrl: true,
    apiHostUrl: process.env.NEXT_PUBLIC_API_URL
  })
    .then(res => {
      toast.success(res.message)

      return res
    })
    .catch(err => toast.error(err.message ?? strings.invalidEmail))
}

export const resetPassword = body => {
  return callApi({
    uriEndPoint: authentication.resetPassword,
    body,
    nextUrl: true,
    apiHostUrl: process.env.NEXT_PUBLIC_API_URL
  })
    .then(res => {
      toast.success(res.message)

      return res
    })
    .catch(err => {
      throw err
    })
}

export const permissionList = () => {
  return callApi({ uriEndPoint: authentication.getPermissions })
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}

export const userLogout = id => {
  return callApi({ uriEndPoint: authentication.logout, pathParams: { u_id: id }, nextUrl: true })
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}

export const clearCookies = () => {
  return callApi({ uriEndPoint: authentication.clearCookies, nextUrl: true })
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}
