import { Bytes } from "./Bytes"

export interface NetClient {

  /**
   * sends data over this connection
   */
  write(bytes: string|Bytes|number[], format?: string): void

  /**
   * registers a new event handler
   * gets fired whenever data is received
   */
  on(event: "data", callback: (data: Bytes) => void): void

  /**
   * registers a new event handler
   * gets fired when the connection gets closed
   */
  on(event: "close", callback: () => void): void

  /**
   * registers a new event handler for errors
   * gets fired whenever an error occured
   */
  on(event: "error", callback: (...args: any[]) => void): void

  /**
   * closes the current connection
   */
  close(): void
}