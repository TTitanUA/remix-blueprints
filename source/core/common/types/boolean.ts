import { ENativeType, IBooleanType } from '../interfaces/types'

export class CommonTypeBoolean implements IBooleanType {
  nativeType = ENativeType.Boolean as const

  constructor (
    public name: string = 'boolean',
    public description: string = 'A boolean',
  ) {}
}
