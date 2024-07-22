import { ENativeType, IStringType } from '../interfaces/types'

export class CommonTypeString implements IStringType {
  nativeType = ENativeType.String as const

  constructor (
    public name: string = 'string',
    public description: string = 'A string',
  ) {}
}
