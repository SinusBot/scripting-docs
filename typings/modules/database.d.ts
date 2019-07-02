import { DBConn } from "../interfaces/DBConn"

export enum DatabaseDriver {
  sqlite3 = "sqlite3",
  mysql = "mysql",
  postgres = "postgres"
}

export interface DatabaseConnectParams {

  /**
   * driver to use
   * SQLITE driver is currently in memory only
   */
  driver: DatabaseDriver
  host?: string
  username?: string
  password?: string
  port?: string
}

/**
 * if an error occured, exactly one parameter containing the error will be handed to the callback
 */
export function DatabaseConnectCallback(error?: string): void

export module Database {

  /**
   * connects to a database
   */
  export function connect(params: DatabaseConnectParams, callback: typeof DatabaseConnectCallback): DBConn

}