export interface SinusbotMeta {
  name: string,
  version: string,
  description: string,
  author: string,
  hidden?: boolean,
  requiredModules?: string[],
  backends?: Array<"ts3"|"discord">,
  engine?: string,
  vars?: SinusbotConfig[],
  autorun?: boolean,
  enableweb?: boolean
}

/*export declare enum Backends {
  ts3 = "ts3",
  discord = "discord"
}*/

/*export declare enum VarType {
  string = "string",
  password = "password",
  strings = "strings",
  multiline = "multiline",
  number = "number",
  track = "track",
  tracks = "tracks",
  channel = "channel",
  select = "select",
  checkbox = "checkbox",
  array = "array",
}*/

export interface SinusbotConfig {
  type: "string"|"strings"|"password"|"multiline"|"number"|"track"|"tracks"|"channel"|"checkbox"|"array"|"select",
  options?: string[],
  name: string,
  title: string,
  placeholder?: string,
  default?: any,
  indent?: number,
  conditions?: ConfigCondition[]
}

export interface ConfigCondition {
  field: string,
  value: any
}

export interface ConfigMetaData {
  [key: string]: any
}