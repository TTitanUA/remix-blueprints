import { IDataField } from './field'
import { TCommonType } from '@core/common/interfaces/types'

export interface IDataModelField extends IDataField {
  nullable: boolean;
  unique: boolean;
  defaultValue: TCommonType;
}

export interface IDataModelIndex {
  name: string;
  description: string;
  fields: string[];
  unique: boolean;
}

export enum EDataRelationType {
  OneToOne = 'OneToOne',
  OneToMany = 'OneToMany',
}

export interface IDataRelation {
  name: string;
  description: string;
  type: EDataRelationType;
  sourceModel: string;
  targetModel: string;
  sourceField: string;
  targetField: string;
}

export interface IDataModel {
  name: string;
  description: string;
  fields: IDataModelField[];
  indexes: IDataModelIndex[];
  relations: IDataRelation[];
  primaryKey: string[];
}
