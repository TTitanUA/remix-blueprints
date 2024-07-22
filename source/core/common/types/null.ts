import { ENativeType, INullType } from '../interfaces/types'

export class CommonTypeNull implements INullType {
  nativeType = ENativeType.Null as const

  constructor (
    public name: string = 'null',
    public description: string = 'A null',
  ) {}
}
