import { IDriver } from 'src/shared/dtos/driver'
import { Fetcher, IResponse } from '.'

export interface AuthApiInterface {
  login(cpf: string): Promise<IResponse<IDriver>>
}

export class AuthApi implements AuthApiInterface {
  private fetcher: Fetcher

  constructor(fetcher: Fetcher) {
    this.fetcher = fetcher
  }

  async login(cpf: string) {
    return this.fetcher<IResponse<IDriver>>({
      url: `/track-location/login/${cpf}`,
      method: 'POST',
    })
  }

  async chackCode(code: string) {
    return this.fetcher<IResponse<IDriver>>({
      url: `/track-location/check-code/${code}`,
      method: 'POST',
    })
  }
}
