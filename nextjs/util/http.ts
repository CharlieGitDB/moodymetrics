enum RequestMethod {
  GET,
  POST,
  PUT,
  DELETE
}

type Headers = {
  [key: string]: string
}

type RequestOptions = {
  method: string
  headers: Headers
  body: string
}

function createRequestOptions(method: RequestMethod, body: unknown): RequestOptions {
  return {
    method: RequestMethod[method],
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
}

export async function get<T>(url: string): Promise<T> {
  const response = await fetch(url)
  return response.json()
}

export async function post<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, createRequestOptions(RequestMethod.POST, body))
  return response.json()
}

export async function put<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, createRequestOptions(RequestMethod.PUT, body))
  return response.json()
}

export async function remove<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, createRequestOptions(RequestMethod.DELETE, body))
  return response.json()
}