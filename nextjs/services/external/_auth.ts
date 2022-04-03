import { post } from '../../util/http'

const BASE_URL = process.env.EXTERNAL_API_URL || 'http://localhost:1337'

export type ExternalLoginResponse = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
}

type LoginRequestData = {
  email: string
  password: string
}

export async function externalLogin({ email, password }: LoginRequestData): Promise<any> {
  return post<ExternalLoginResponse>(`${BASE_URL}/api/auth/local`, {
    identifier: email,
    password
  })
} 