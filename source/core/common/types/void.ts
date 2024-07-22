import { ENativeType, IVoidType } from '../interfaces/types'

export class CommonVoidType implements IVoidType {
  nativeType = ENativeType.Void as const

  constructor (
    public name: string = 'void',
    public description: string = 'A void',
  ) {}
}
