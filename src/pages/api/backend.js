import { refreshToken } from '@api/auth'
import queryString from 'querystring'
import Axios from 'axios'
import cookie from 'cookie'
import { sign, verify } from 'jsonwebtoken'
import moment from 'moment'

const makeUrl = ({ uri = '', pathParams, query }, host) => {
  return `${host || `${process.env.NEXT_PUBLIC_API_URL}`}${uri
    .split('/')
    .map(param => (param.charAt(0) === ':' ? encodeURI(pathParams[param.slice(1)]) : param))
    .join('/')}${query ? `?${queryString.stringify(query)}` : ''}`
}

const checkTokenExpiration = async (verifiedToken, secret, res) => {
  let date = moment().toDate()
  try {
    if (verifiedToken?.tokenTime > date.getTime() / 1000) {
      return verifiedToken?.token
    } else if (verifiedToken?.refreshTokenTime > date.getTime() / 1000) {
      const newRefreshToken = await refreshToken({ refresh_token: verifiedToken.refresh_token })
      if (newRefreshToken) {
        const encJwt = await sign(
          {
            token: newRefreshToken?.data?.token,
            tokenTime: newRefreshToken?.data?.tokenTime,
            refreshTokenTime: newRefreshToken?.data?.refreshTokenTime,
            refresh_token: newRefreshToken?.data?.refreshToken
          },
          secret
        )

        res?.setHeader(
          'Set-Cookie',
          cookie.serialize('jwt', encJwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development', // Set to true for HTTPS
            maxAge: 60 * 60 * 24 * 365,
            sameSite: 'strict',
            path: '/'
          })
        )

        return newRefreshToken?.data?.token
      }
    } else {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('jwt', '', {
          maxAge: -1,
          path: '/'
        })
      )
    }
    res.status(403).json({ status: false, message: 'Invalid Token' })
  } catch (error) {
    // console.log('error :', error)
  }
}

export default async function handler(req, res) {
  const secret = process.env.NEXT_PUBLIC_API_SECRET_KEY
  const decParams = await verify(req.body?.params, secret)
  const { uriEndPoint, query, pathParams, apiHostUrl, body } = decParams

  try {
    if (req?.cookies?.jwt) {
      const verifiedToken = await verify(req.cookies?.jwt, secret)

      const response = await Axios({
        method: uriEndPoint.method,
        url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
        headers: {
          Authorization: 'Bearer ' + (await checkTokenExpiration(verifiedToken, secret, res)),
          'Content-Type': 'application/json',

          // 'Origin-api': window.location.origin,
          'Accept-Language': req?.headers?.['accept-language'] ?? 'en',
          SameSite: 'None',
          ...uriEndPoint.headerProps
        },
        data: body || {}
      })
      res.status(200).json(response?.data)
    }
  } catch (error) {
    // console.log(' API :', uriEndPoint?.uri)
    // console.log('BACKEND API ERROR :', error)
    res.status(500).json(error?.response?.data ?? { status: false, message: 'Internal Server Error' })
  }
}
