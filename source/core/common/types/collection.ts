import { ENativeType, ICollectionType, TCommonType } from '../interfaces/types'

export class CommonTypeCollection implements ICollectionType {
  nativeType = ENativeType.Collection as const

  constructor (
    public name: string = 'collection',
    public description: string = 'A collection of items',
    public itemType: TCommonType
  ) {}
}
