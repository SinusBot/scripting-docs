/**
 * @interface Bytes
 * @since 0.9.16
 * @todo //TODO: add explanations
 */
class Bytes {
  /**
   * @param {Bytes}
   * @returns {number}
   */
  append() {}

  /**
   * @returns {Bytes}
   */
  bytes() {}

  /**
   * @returns {number}
   */
  length() {}

  /**
   * @returns {[]number}
   */
  marshalJSON() {}

  /**
   * @returns {Bytes}
   */
  newReader() {}

  /**
   * @returns {string}
   */
  toBase64() {}

  /**
   * @returns {string}
   */
  toHex() {}

  /**
   * @returns {string} String representation of the bytes
   */
  toString() {}

  /**
   * @param {string}
   */
  writeString() {}

  /**
   * @param {string}
   */
  writeCString() {}

  /**
   * @param {number} int8 Write 8-bit integer.
   */
  writeInt8() {}

  /**
   * @param {number} int16 Write 16-bit integer as big-endian.
   */
  writeInt16be() {}

  /**
   * @param {number} int16 Write 16-bit integer as little-endian.
   */
  writeInt16le() {}

  /**
   * @param {number} int32 Write 32-bit integer as big-endian.
   */
  writeInt32be() {}

  /**
   * @param {number} int32 Write 32-bit integer as little-endian.
   */
  writeInt32le() {}

  /**
   * @param {number} int64 Write 64-bit integer as big-endian.
   */
  writeInt64be() {}

  /**
   * @param {number} int64 Write 64-bit integer as little-endian.
   */
  writeInt64le() {}

  /**
   * @param {number} uint8 Write unsigned 8-bit integer.
   */
  writeUint8() {}

  /**
   * @param {number} uint16 Write unsigned 16-bit integer as big-endian.
   */
  writeUint16be() {}

  /**
   * @param {number} uint16 Write unsigned 16-bit integer as little-endian.
   */
  writeUint16le() {}

  /**
   * @param {number} uint32 Write unsigned 32-bit integer as big-endian.
   */
  writeUint32be() {}

  /**
   * @param {number} uint32 Write unsigned 32-bit integer as little-endian.
   */
  writeUint32le() {}

  /**
   * @param {number} uint64 Write unsigned 64-bit integer as big-endian.
   */
  writeUint64be() {}

  /**
   * @param {number} uint64 Write unsigned 64-bit integer as little-endian.
   */
  writeUint64le() {}
}