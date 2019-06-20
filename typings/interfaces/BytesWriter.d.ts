import Bytes from "./Bytes"

export default interface BytesWriter {

  /**
   * @todo
   */
  append(data: Bytes): void

  /**
   * returns the current bytes
   */
  bytes(): Bytes

  /**
   * returns the length of bytes
   */
  length(): number

  /**
   * @todo
   */
  newReader(): Bytes

  /**
   * @todo
   */
  toBase64(): string

  /**
   * @todo
   */
  toHex(): string

  /**
   * @todo
   */
  toString(): string

  /**
   * @todo
   */
  writeString(str: string): void

  /**
   * @todo
   */
  writeCString(str: string): void

  writeInt8(int: number): void
  writeInt16be(int: number): void
  writeInt16le(int: number): void
  writeInt32be(int: number): void
  writeInt32le(int: number): void
  writeInt64be(int: number): void
  writeInt64le(int: number): void
  writeUint8(int: number): void
  writeUint16be(int: number): void
  writeUint16le(int: number): void
  writeUint32be(int: number): void
  writeUint32le(int: number): void
  writeUint64be(int: number): void
  writeUint64le(int: number): void
}