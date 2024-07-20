import { ENativeType, ITupleItem, ITupleType, TCommonType } from '../interfaces/types'

class CommonTypeTuple implements ITupleType {
  nativeType = ENativeType.Tuple as const

  constructor (
    public name: string = 'tuple',
    public description: string = 'A tuple',
    public items: ITupleItem[] = [],
  ) {}
}

class CommonTypeTupleItem implements ITupleItem {
  constructor (
    public name: string = 'tuple',
    public description: string = 'A tuple',
    public index: number = 0,
    public type: TCommonType,
  ) {}
}
