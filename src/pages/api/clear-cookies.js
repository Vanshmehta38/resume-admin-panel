import cookie from 'cookie'

export default async function handler(req, res) {
  try {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('jwt', '', {
        maxAge: -1,
        path: '/'
      })
    )
    res.status(200).json({ status: true, message: 'Cookies Cleared' })
  } catch (error) {
    console.error('Cookie Clear Error :', error)
    res.status(422).json({ status: true, message: 'Failed To Clear Cookies' })
  }
}
