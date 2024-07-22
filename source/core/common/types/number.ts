import { ENativeType, INumberType } from '../interfaces/types'

export class CommonTypeNumber implements INumberType {
  nativeType = ENativeType.Number as const

  constructor (
    public name: string = 'number',
    public description: string = 'A number',
  ) {}
}
