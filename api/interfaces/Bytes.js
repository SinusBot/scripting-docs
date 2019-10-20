/**
 * @interface Bytes
 * @since 0.9.16
 * @todo //TODO: add explanations
 */
class Bytes {
  /**
   * @returns {number[]} uint8 array
   */
  bytes() {}

  /**
   * @param {number} length
   * @returns {string}
   */
  string(length) {}

  /**
   * @returns {string}
   */
  cString() {}

  /**
   * @returns {number} int16
   */
  int16be() {}

  /**
   * @returns {number} int16
   */
  int16le() {}

  /**
   * @returns {number} int32
   */
  int32be() {}

  /**
   * @returns {number} int32
   */
  int32le() {}

  /**
   * @returns {number}
   */
  length() {}

  /**
   * @returns {number}
   */
  pos() {}

  /**
   * @param {number} pos
   * @returns {boolean}
   */
  seek(pos) {}

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
   * @returns {number} uint8
   */
  uint8() {}

  /**
   * @returns {number} uint16
   */
  uint16be() {}

  /**
   * @returns {number} uint16
   */
  uint16le() {}

  /**
   * @returns {number} uint32
   */
  uint32be() {}

  /**
   * @returns {number} uint32
   */
  uint32le() {}
}