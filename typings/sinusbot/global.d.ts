import { Engine } from "../modules/engine"
import { Backend } from "../modules/backend"
import { Store } from "../modules/store"
import { Event } from "../modules/event"
import { Media } from "../modules/media"
import { Format } from "../modules/format"
import { Helpers } from "../modules/helpers"
import { Net } from "../modules/net"
import { Http } from "../modules/http"
import { Audio } from "../modules/audio"
import { WebSocket } from "../modules/ws"
import { Database } from "../modules/database"
import { Filesystem } from "../modules/filesystem"
import { Graphics } from "../modules/graphics"
import { Crypto } from "../modules/crypto"
import { Console } from "../modules/console"

import { command } from "../external/command"

import { SinusbotMeta, ConfigMetaData } from "./meta"

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
  function registerPlugin(meta: SinusbotMeta, callback: (sinusbot: null, config: ConfigMetaData, meta: SinusbotMeta) => void) :void

  function clearInterval(interval: number): void
  function clearTimeout(interval: number): void
  function setInterval(callback: (...args: any[]) => void, interval: number, ...args: any[]): number
  function setTimeout(callback: (...args: any[]) => void, timeout: number, ...args: any[]): number

  const console: typeof Console
  const module: Module

  function require(name: "engine"): typeof Engine
  function require(name: "backend"): typeof Backend
  function require(name: "store"): typeof Store
  function require(name: "event"): typeof Event
  function require(name: "media"): typeof Media
  function require(name: "audio"): typeof Audio
  function require(name: "format"): typeof Format
  function require(name: "helpers"): typeof Helpers
  function require(name: "http"): typeof Http
  function require(name: "net"): typeof Net
  function require(name: "ws"): typeof WebSocket
  function require(name: "db"): typeof Database
  function require(name: "fs"): typeof Filesystem
  function require(name: "graphics"): typeof Graphics
  function require(name: "crypto"): typeof Crypto

  /** 3rd party scripts */
  function require(name: "command"): typeof command
}