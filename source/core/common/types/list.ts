import { ENativeType, IListType, TCommonType } from '../interfaces/types'

class CommonTypeList implements IListType {
  nativeType = ENativeType.List as const

  constructor (
    public name: string = 'boolean',
    public description: string = 'A boolean',
    public items: TCommonType[] = [],
  ) {}
}
