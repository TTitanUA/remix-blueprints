import { ENativeType, IFunctionType, ITupleType, TCommonType } from '../interfaces/types'

export class CommonTypeFunction implements IFunctionType {
  nativeType = ENativeType.Function as const

  constructor (
    public name: string = 'function',
    public description: string = 'A function',
    public args: ITupleType,
    public returnType: TCommonType,
  ) {}
}
