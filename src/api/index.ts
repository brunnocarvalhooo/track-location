import { AuthApi, AuthApiInterface } from './auth'
import { LocationApi, LocationApiInterface } from './location'
import { API_URL } from '@env'

interface IFetcherProps {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  body?: Record<string, any> | FormData
}

export interface IResponse<T = object> {
  statusCode?: number
  message: string
  data: T
}

export type Fetcher = <T>(params: IFetcherProps) => Promise<T>

class Api {
  private fetcher = async <T>({
    url,
    method = 'GET',
    body,
  }: IFetcherProps): Promise<T> => {
    const headers: HeadersInit = {}

    let finalBody: BodyInit | undefined

    const isFormData = body instanceof FormData

    if (!isFormData) {
      headers['Content-Type'] = 'application/json'
      finalBody = JSON.stringify(body)
    } else {
      finalBody = body
    }

    const res = await fetch(`${API_URL}${url}`, {
      method,
      headers,
      body: finalBody,
    })

    const json = await res.json()
    return json
  }

  auth: AuthApiInterface
  location: LocationApiInterface

  constructor() {
    this.auth = new AuthApi(this.fetcher)
    this.location = new LocationApi(this.fetcher)
  }
}

const api = new Api()

export { api }
