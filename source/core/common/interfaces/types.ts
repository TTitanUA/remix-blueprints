export enum ENativeType {
  String = 'String',
  Number = 'Number',
  BigInt = 'BigInt',
  Boolean = 'Boolean',
  Schema = 'Schema',
  Function = 'Function',
  Void = 'Void',
  Null = 'Null',
  Undefined = 'Undefined',
  List = 'List',
  Tuple = 'Tuple',
  Collection = 'Collection',
  Unknown = 'Unknown',
}

export type TCommonType = IStringType | INumberType | IBigIntType | IBooleanType | ISchemaType | IFunctionType | IVoidType | INullType | IUndefinedType | IListType | ITupleType | ICollectionType | IUnknownType;

export interface IStringType {
  name: string;
  description: string;
  nativeType: ENativeType.String;
}

export interface INumberType {
  name: string;
  description: string;
  nativeType: ENativeType.Number;
}

export interface IBigIntType {
  name: string;
  description: string;
  nativeType: ENativeType.BigInt;
}

export interface IBooleanType {
  name: string;
  description: string;
  nativeType: ENativeType.Boolean;
}

export interface ISchemaType {
  name: string;
  description: string;
  nativeType: ENativeType.Schema;
  fields: ISchemaField[];
}

export interface ISchemaField {
  name: string;
  description: string;
  type: TCommonType;
}

export interface IFunctionType {
  name: string;
  description: string;
  nativeType: ENativeType.Function;
  args: ITupleType;
  returnType: TCommonType;
}

export interface IVoidType {
  name: string;
  description: string;
  nativeType: ENativeType.Void;
}

export interface INullType {
  name: string;
  description: string;
  nativeType: ENativeType.Null;
}

export interface IUndefinedType {
  name: string;
  description: string;
  nativeType: ENativeType.Undefined;
}

export interface IListType {
  name: string;
  description: string;
  nativeType: ENativeType.List;
  items: TCommonType[];
}

export interface ICollectionType {
  name: string;
  description: string;
  nativeType: ENativeType.Collection;
  itemType: TCommonType;
}

export interface ITupleType {
  name: string;
  description: string;
  nativeType: ENativeType.Tuple;
  items: ITupleItem[];
}

export interface ITupleItem {
  name: string;
  description: string;
  index: number;
  type: TCommonType;
}

export interface IUnknownType {
  name: string;
  description: string;
  nativeType: ENativeType.Unknown;
}

