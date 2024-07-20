import { ENativeType, IStringType } from '../interfaces/types'

class CommonTypeString implements IStringType {
  nativeType = ENativeType.String as const

  constructor (
    public name: string = 'string',
    public description: string = 'A string',
  ) {}
}
