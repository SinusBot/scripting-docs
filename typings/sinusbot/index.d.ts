import { Engine } from "@sinusbot/modules/engine"
import { Backend } from "@sinusbot/modules/backend"
import { Store } from "@sinusbot/modules/store"
import { Event } from "@sinusbot/modules/event"
import { Media } from "@sinusbot/modules/media"
import { Format } from "@sinusbot/modules/format"
import { Helpers } from "@sinusbot/modules/helpers"
import { Net } from "@sinusbot/modules/net"
import { Http } from "@sinusbot/modules/http"
import { Audio } from "@sinusbot/modules/audio"
import { WebSocket } from "@sinusbot/modules/ws"
import { Database } from "@sinusbot/modules/database"
import { Filesystem } from "@sinusbot/modules/filesystem"

import { command } from "@sinusbot/modules/command"

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
  /** @todo function require(name: "graphics"): typeof Graphics */
  /** @todo function require(name: "crypto"): typeof Crypto */

  /** 3rd party scripts */
  function require(name: "command"): typeof command
}