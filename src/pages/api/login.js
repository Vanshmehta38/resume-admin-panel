import axios from 'axios'
import cookie from 'cookie'
import { sign } from 'jsonwebtoken'

export default async function handler(req, res) {
  const privateKey = process.env.NEXT_PUBLIC_API_SECRET_KEY
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/login', req.body)

    const jwt = response?.data?.data?.token

    const userData = response?.data?.data

    const encData = {
      token: jwt,
      tokenTime: userData?.tokenTime,
      refreshTokenTime: userData?.refreshTokenTime,
      refresh_token: userData?.refresh_token
    }

    const encJwt = await sign(encData, privateKey)

    delete userData?.token
    delete userData?.tokenTime
    delete userData?.refreshTokenTime
    delete userData?.refresh_token

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

    if (response?.data?.statusCode == 200) {
      res.status(200).json({ ...response?.data, data: userData })
    }
  } catch (error) {
    console.error('error :', error)
    res.status(422).json(error?.response?.data)
  }
}
