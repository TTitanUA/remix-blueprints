import { ENativeType, IUndefinedType } from '../interfaces/types'

class CommonTypeUndefined implements IUndefinedType {
  nativeType = ENativeType.Undefined as const

  constructor (
    public name: string = 'undefined',
    public description: string = 'A undefined',
  ) {}
}
