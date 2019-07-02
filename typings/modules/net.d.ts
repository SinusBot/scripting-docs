import { NetClient } from "../interfaces/NetClient"

export interface NetConnectParams {

  /**
   * host to connect to
   */
  host?: string,

  /**
   * port to use
   */
  port?: number,

  /**
   * websocket url to use if protocol is "ws"
   */
  url?: string,

  /**
   * the protocol to use, either udp, tcp or ws
   */
  protocol: "udp"|"tcp"|"ws"
}

/**
 * if an error occured, exactly one parameter containing the error will be handed to the callback
 */
export function NetConnectCallback(error?: string): void

export module Net {
  export function connect(params: NetConnectParams, callback: typeof NetConnectCallback): NetClient
}