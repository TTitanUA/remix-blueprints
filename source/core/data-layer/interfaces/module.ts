import { IBaseModule, EModuleType } from '@core/common/interfaces/modules';
import { IDataField } from '@core/data-layer/interfaces/field'
import { IDataModel } from '@core/data-layer/interfaces/model'

export interface IDataSourceModule extends IBaseModule {
  type: EModuleType.DataSource;
  availableFields: IDataField[];
  internalModels: IDataModel[]
}
