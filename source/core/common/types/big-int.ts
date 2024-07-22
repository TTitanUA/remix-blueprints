import { ENativeType, IBigIntType } from '../interfaces/types'

export class CommonTypeBigInt implements IBigIntType {
  nativeType = ENativeType.BigInt as const

  constructor (
    public name: string = 'bigInt',
    public description: string = 'A bigInt',
  ) {}
}
