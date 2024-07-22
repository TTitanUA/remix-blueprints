import { IDataSourceModule } from '@core/data-layer/interfaces/module'
import { EModuleType } from '@core/common/interfaces/modules'
import string from './fields/string'
import number from './fields/number'
import user from './models/user'

const module: IDataSourceModule = {
  name: 'Dummy JSON API',
  description: 'A dummy JSON API for testing purposes',
  type: EModuleType.DataSource as const,
  tags: ['dummyjson'],
  version: 1,
  dependencies: [],
  availableFields: [string, number],
  internalModels: [user]
}

export default module
