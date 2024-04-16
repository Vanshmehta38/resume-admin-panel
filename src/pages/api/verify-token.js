import { authentication } from '@endpoints/authentication'
import axios from 'axios'
import cookie from 'cookie'
import { verify } from 'jsonwebtoken'

export default async function handler(req, res) {
  const privateKey = process.env.NEXT_PUBLIC_API_SECRET_KEY
  if (req.method === 'GET') {
    try {
      if (req?.cookies?.jwt) {
        const verifiedToken = await verify(req.cookies?.jwt, privateKey)

        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + authentication.verifyToken.uri, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${verifiedToken?.token}`
          }
        })

        delete response?.data?.data?.token
        res.status(200).json(response?.data)
      } else {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('jwt', '', {
            maxAge: -1,
            path: '/'
          })
        )
        res.status(422).json({ status: false, message: 'Session Timed Out' })
      }
    } catch (error) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('jwt', '', {
          maxAge: -1,
          path: '/'
        })
      )
      res.status(422).json(error?.response?.data)
    }
  }
}
