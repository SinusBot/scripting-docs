import { engine } from "./modules/engine"
import { backend } from "./modules/backend"
import { store } from "./modules/store"
import { event } from "./modules/event"
import { media } from "./modules/media"
import { format } from "./modules/format"
import { helpers } from "./modules/helpers"
import { net } from "./modules/net"
import { http } from "./modules/http"
import { audio } from "./modules/audio"
import { ws } from "./modules/ws"
import { db } from "./modules/db"
import { fs } from "./modules/fs"
import { graphics } from "./modules/graphics"
import { crypto } from "./modules/crypto"
//import { console as Console } from "./modules/console"

import { command } from "./external/command"

import type { SinusbotMeta } from "./meta"

export interface Module {
  exports: any
}

declare global {
  /**
   * ```typescript
   * registerPlugin({
   *  name: "Example",
   *  version: "1.0.0",
   *  description: "simple showcase",
   *  author: "John Doe <john.doe@example.com>"
   * }, () => {
   *  const engine = require("engine")
   *  engine.log("Hello World!")
   * })
   * ```
   * @param meta basic script informations
   * @param callback script environment
   */
  function registerPlugin<T>(
    meta: SinusbotMeta,
    callback: (sinusbot: null, config: T, meta: SinusbotMeta) => void
  ): void

  /** enumerations */

  function clearInterval(interval: number): void
  function clearTimeout(interval: number): void
  function setInterval(callback: (...args: any[]) => void, interval: number, ...args: any[]): number
  function setTimeout(callback: (...args: any[]) => void, timeout: number, ...args: any[]): number

  //const console: typeof Console
  const module: Module

  function require(name: "engine"): typeof engine
  function require(name: "backend"): typeof backend
  function require(name: "store"): typeof store
  function require(name: "event"): typeof event
  function require(name: "media"): typeof media
  function require(name: "audio"): typeof audio
  function require(name: "format"): typeof format
  function require(name: "helpers"): typeof helpers
  function require(name: "http"): typeof http
  function require(name: "net"): typeof net
  function require(name: "ws"): typeof ws
  function require(name: "db"): typeof db
  function require(name: "fs"): typeof fs
  function require(name: "graphics"): typeof graphics
  function require(name: "crypto"): typeof crypto

  /** 3rd party scripts */
  function require(name: "command"): typeof command

  function require(name: string): any
}