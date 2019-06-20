export interface SinusbotMeta {
  name: string,
  version: string,
  description: string,
  author: string,
  hidden?: boolean,
  requiredModules?: string[],
  backends?: string[],
  engine?: string,
  vars?: SinusbotConfig[],
  autorun?: boolean,
  enableweb?: boolean
}

export declare enum Backends {
  ts3 = "ts3",
  discord = "discord"
}

export declare enum VarType {
  string = "string",
  password = "password",
  strings = "string",
  multiline = "multiline",
  number = "number",
  track = "track",
  tracks = "tracks",
  channel = "channel",
  select = "select",
  checkbox = "checkbox",
  array = "array",
}

export interface SinusbotConfig {
  type: VarType,
  name: string,
  title: string,
  placeholder?: string,
  default?: any,
  options?: string[],
  conditions?: ConfigCondition[]
}

export interface ConfigCondition {
  field: string,
  value: any
}

export interface ConfigMetaData {
  [key: string]: any
}