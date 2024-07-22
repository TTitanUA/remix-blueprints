export enum EModuleType {
  DataSource = 'DataSource',
  Repository = 'Repository',
}

export type TModuleName = string;
export type TModuleVersion = number;
export type TDependency = [TModuleName, TModuleVersion];

export interface IBaseModule {
  name: TModuleName;
  description: string;
  version: TModuleVersion;
  tags: string[];
  type: EModuleType;
  dependencies: TDependency[];
}
