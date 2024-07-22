import { TCommonType } from '@core/common/interfaces/types'

export interface IDataField {
  name: string;
  description: string;
  type: TCommonType;
  storageType: string;
}
