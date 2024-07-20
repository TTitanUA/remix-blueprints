import { ENativeType, IVoidType } from '../interfaces/types'

class CommonVoidType implements IVoidType {
  nativeType = ENativeType.Void as const

  constructor (
    public name: string = 'void',
    public description: string = 'A void',
  ) {}
}
