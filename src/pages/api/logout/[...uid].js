import cookie from 'cookie'
import axios from 'axios'
import { verify } from 'jsonwebtoken'
import { makeUrl } from 'src/utils/api-utils'
import { authentication } from '@endpoints/authentication'

export default async function handler(req, res) {
  const secret = process.env.NEXT_PUBLIC_API_SECRET_KEY
  if (req.method === 'PATCH') {
    const { uid } = req.query
    try {
      if (req?.cookies?.jwt) {
        const verifiedToken = await verify(req?.cookies?.jwt, secret)

        res.setHeader(
          'Set-Cookie',
          cookie.serialize('jwt', '', {
            maxAge: -1,
            path: '/'
          })
        )

        const response = await axios.patch(
          makeUrl({ ...authentication.logout, pathParams: { u_id: uid } }, process?.env?.NEXT_PUBLIC_API_URL),
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${verifiedToken?.token}`
            }
          }
        )

        res.status(200).json(response?.data)
      } else {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('jwt', '', {
            maxAge: -1,
            path: '/'
          })
        )
        res.status(204).end()
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
