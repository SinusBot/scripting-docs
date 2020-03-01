export interface SinusbotMeta {
  name: string,
  version: string,
  description: string,
  author: string,
  hidden?: boolean,
  requiredModules?: string[],
  backends?: Backends[],
  engine?: string,
  vars?: Config<any>[],
  autorun?: boolean,
  enableweb?: boolean
}

export declare type Backends = "ts3"|"discord"


export interface Config<T> {
  type: string
  /** key name in the config object */
  name: string,
  /** display name in the webinterface */
  title: string,
  /** default variable if nothing has been set */
  default?: T,
  /** placeholder data in the webinterface */
  placeholder?: string
  indent?: number,
  //displays a config option depending on the config name and the value
  conditions?: {
    field: string,
    value: any
  }[]
  options?: string[]
  vars?: Config<any>[]
}

//maybe for future sinusbot versions
export type ConfigEntry = 
  StringEntry |
  StringsEntry |
  PasswordEntry |
  MultilineEntry |
  NumberEntry |
  TrackEntry |
  TracksEntry |
  ChannelEntry |
  CheckboxEntry |
  SelectEntry |
  ArrayEntry<any>

export interface StringEntry extends Config<String> {
  type: "string",
}

export interface StringsEntry extends Config<String[]> {
  type: "strings",
}

export interface PasswordEntry extends Config<String> {
  type: "password",
}

export interface MultilineEntry extends Config<String> {
  type: "multiline",
}

export interface NumberEntry extends Config<Number> {
  type: "number",
}

export interface TrackEntry extends Config<never> {
  type: "track",
}

export interface TracksEntry extends Config<never> {
  type: "tracks",
}

export interface ChannelEntry extends Config<never> {
  type: "channel",
}

export interface CheckboxEntry extends Config<Number> {
  type: "checkbox",
}

export interface SelectEntry extends Config<Number> {
  type: "select",
  options: string[]
}

export interface ArrayEntry<T> extends Config<T[]> {
  type: "array",
  vars: ConfigEntry[]
}