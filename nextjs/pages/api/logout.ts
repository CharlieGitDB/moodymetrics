// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from 'iron-session/next/dist'
import type { NextApiRequest, NextApiResponse } from 'next'
import { sessionOptions } from '../../lib/session-options'

type Data = {
  success: boolean
}

export default withIronSessionApiRoute(handler, sessionOptions)

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader('Set-Cookie', 'jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
  req.session.destroy()
  res.status(200).json({ success: true })
}