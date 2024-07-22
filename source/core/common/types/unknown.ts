import { ENativeType, IUnknownType } from '../interfaces/types'

export class CommonTypeUnknown implements IUnknownType {
  nativeType = ENativeType.Unknown as const

  constructor (
    public name: string = 'unknown',
    public description: string = 'A unknown',
  ) {}
}
