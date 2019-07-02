import { Bytes } from "../interfaces/Bytes"

export module WebSocket {

  /**
   * writes some data to the connection with given connectionId
   */
  export function write(connectionId: string, messageType: number, message: string|Bytes)

  /**
   * broadcasts some data to all connected clients
   */
  export function broadcast(messageType: number, message: string|Bytes): void

  /**
   * closes the connection to a specific connectionId
   */
  export function close(connectionId: string): void
}