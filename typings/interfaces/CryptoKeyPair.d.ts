import { BytesWriter } from "./BytesWriter"

export interface CryptoKeypair {

  /**
   * returns the keypair bytes
   */
  export(): BytesWriter

  /**
   * returns the shared key
   */
  sharedKey(pair: BytesWriter): BytesWriter
}