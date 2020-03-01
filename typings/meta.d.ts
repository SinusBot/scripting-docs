export interface SinusbotMeta {
  name: string,
  version: string,
  description: string,
  author: string,
  hidden?: boolean,
  requiredModules?: string[],
  backends?: Backends[],
  engine?: string,
  vars?: SinusbotConfig[],
  autorun?: boolean,
  enableweb?: boolean
}

export declare type Backends = "ts3"|"discord"

export type SinusbotConfig = 
  SinusbotStringConfig |
  SinusbotStringsConfig |
  SinusbotPasswordConfig |
  SinusbotMultilineConfig |
  SinusbotNumberConfig |
  SinusbotTrackConfig |
  SinusbotTracksConfig |
  SinusbotChannelConfig |
  SinusbotCheckboxConfig |
  SinusbotSelectConfig |
  SinusbotArrayConfig<any>


export interface Config<T> {
  /** key name in the config object */
  name: string,
  /** display name in the webinterface */
  title: string,
  /** default variable if nothing has been set */
  default: T,
  /** placeholder data in the webinterface */
  placeholder?: string
  indent?: number,
  //displays a config option depending on the config name and the value
  conditions?: {
    field: string,
    value: any
  }[]
}

export interface SinusbotStringConfig extends Config<String> {
  type: "string",
}

export interface SinusbotStringsConfig extends Config<String[]> {
  type: "strings",
}

export interface SinusbotPasswordConfig extends Config<String> {
  type: "password",
}

export interface SinusbotMultilineConfig extends Config<String> {
  type: "multiline",
}

export interface SinusbotNumberConfig extends Config<Number> {
  type: "number",
}

export interface SinusbotTrackConfig extends Config<never> {
  type: "track",
}

export interface SinusbotTracksConfig extends Config<never> {
  type: "tracks",
}

export interface SinusbotChannelConfig extends Config<never> {
  type: "channel",
}

export interface SinusbotCheckboxConfig extends Config<Number> {
  type: "checkbox",
}

export interface SinusbotSelectConfig extends Config<Number> {
  type: "select",
  options: string[]
}

export interface SinusbotArrayConfig<T> extends Config<T[]> {
  type: "array",
  vars: SinusbotConfig[]
}