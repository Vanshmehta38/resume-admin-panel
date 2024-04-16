// ** Moment Import
import moment from 'moment'

// ** API Functions
import cookie from 'cookie'
import { promises as fs } from 'fs'
import { sign, verify } from 'jsonwebtoken'
import multiparty from 'multiparty'
import queryString from 'querystring'

// ** API Imports
import Axios from 'axios'
import { refreshToken } from '@api/auth'

export const config = {
  api: {
    bodyParser: false
  }
}

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

const makePath = path => {
  if (!path) return { backendPath: path, query: null }

  if (path?.[0] === 'api') {
    return { backendPath: `/${path?.[0]}/${path?.[1]}`, query: path?.slice(2)?.join('/') }
  } else {
    return { backendPath: `/${path?.[1]}`, query: path.slice(1)?.join('/') }
  }
}

export default async function handler(req, res) {
  const secret = process.env.NEXT_PUBLIC_API_SECRET_KEY

  const { path } = req.query
  const { backendPath, query } = makePath(path)

  const form = new multiparty.Form()
  try {
    await form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ status: false, message: 'Failed to parse form data' })

        return
      }

      // Now you have access to fields and files
      // Make a request to your backend API with the parsed data
      const formDataToSend = new FormData()

      const keys = Object.keys(files)
      for (let k = 0; k < keys.length; k++) {
        const element = keys[k]

        const imageFile = files?.[element][0]
        const tempImagePath = imageFile.path
        const image = await fs.readFile(tempImagePath)

        const blob = new Blob([image], {
          type: imageFile.headers['content-type']
        })

        formDataToSend.append('file', blob)
      }
      try {
        if (req?.cookies?.jwt) {
          const verifiedToken = await verify(req.cookies?.jwt, secret)

          const response = await Axios({
            method: req.method,
            url: makeUrl({ uri: backendPath, query: query }),
            headers: {
              Authorization: 'Bearer ' + (await checkTokenExpiration(verifiedToken, secret, res)),
              'Accept-Language': req?.headers?.['accept-language'] ?? 'en',
              SameSite: 'None',
              'Content-Type': 'multipart/form-data',
              Accept: 'application/json',
              type: 'formData'
            },
            data: formDataToSend || {}
          })
          res.status(200).json(response?.data)
        } else {
          throw Error
        }
      } catch (error) {
        // console.log('BACKEND API ERROR :', error?.response?.data)
        res.status(500).json({ status: false, message: 'Internal Server Error' })
      }
    })
  } catch (error) {
    // console.log('🚀 ~ FORM DATA ERROR:', error)
    res.status(500).json({ status: false, message: 'Upload Error' })
  }
}
