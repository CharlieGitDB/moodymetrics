export type ExternalResponse<T> = {
  data: T
  meta?: unknown
  error?: {
    status: number
    name: string
    message: string
    detail: unknown
  }
}