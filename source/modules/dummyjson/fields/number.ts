import { IDataField } from '@core/data-layer/interfaces/field'
import { CommonTypeNumber } from '@core/common/types/number'

const number: IDataField = {
  name: 'number',
  description: 'Simple number field',
  type: new CommonTypeNumber(),
  storageType: 'number',
}

export default number
