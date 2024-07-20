import { ENativeType, ISchemaType, ISchemaField, TCommonType } from '../interfaces/types'

class CommonTypeSchema implements ISchemaType {
  nativeType = ENativeType.Schema as const

  constructor (
    public name: string = 'schema',
    public description: string = 'A schema type',
    public fields: ISchemaField[] = []
  ) {}
}

class CommonTypeSchemaField implements ISchemaField {
  constructor (
    public name: string = 'schema field',
    public description: string = 'A schema field type',
    public type: TCommonType
  ) {}
}
