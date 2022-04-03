import { NextApiRequest, NextApiResponse } from 'next'
import { externalLogin } from '../../services/external/_auth'
import { ExternalResponse } from '../../types/external/ExternalResponse'

type ResponseData = {
  success: boolean;
  error?: {
    status: number;
    message: string;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    //unable to normalize login response
    const loginResponse = await externalLogin(req.body)
    
    if (loginResponse.jwt) {
      res.setHeader('Set-Cookie', `jwt=${loginResponse.jwt}; Path=/; HttpOnly`)
      res.status(200).json({
        success: true
      })
    } else {
      let errorResponse = loginResponse as ExternalResponse<any>
      if (errorResponse.error) {
        const { error } = errorResponse
        return res.status(errorResponse.error.status).json({
          success: false,
          error
        })
      } else {
        return res.status(500).json({
          success: false,
          error: {
            status: 500,
            message: 'Internal server error'
          }
        })
      }
    }
  } catch(e) {
    return res.status(500).json({
      success: false,
      error: {
        status: 500,
        message: 'Internal server error'
      }
    })
  }
}