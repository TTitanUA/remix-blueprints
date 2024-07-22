import { IDataField } from '@core/data-layer/interfaces/field'
import { CommonTypeString } from '@core/common/types/string'

const string: IDataField = {
  name: 'string',
  description: 'Simple string field',
  type: new CommonTypeString(),
  storageType: 'string',
}

export default string
