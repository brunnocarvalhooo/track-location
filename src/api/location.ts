import { Fetcher, IResponse } from '.'

export interface ILogLocationProps {
  latitude: number
  longitude: number
  timestamp: number
}

export interface LocationApiInterface {
  logLocation(cpf: string, data: ILogLocationProps): Promise<IResponse<void>>
}

export class LocationApi implements LocationApiInterface {
  private fetcher: Fetcher

  constructor(fetcher: Fetcher) {
    this.fetcher = fetcher
  }

  async logLocation(cpf: string, data: ILogLocationProps) {
    return this.fetcher<IResponse<void>>({
      url: `/amelia/${cpf}/location`,
      method: 'POST',
      body: data,
    })
  }
}
