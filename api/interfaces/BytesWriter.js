/**
 * @interface BytesWriter
 * @since 0.9.16
 * @todo //TODO: add explanations
 */
class BytesWriter {
    /**
     * @param {Bytes} bytes
     * @returns {number}
     */
    append(bytes) {}
  
    /**
     * @returns {Bytes}
     */
    bytes() {}
  
    /**
     * @returns {number}
     */
    length() {}
  
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
     * @param {string} str
     */
    writeString(str) {}
  
    /**
     * @param {string} str
     */
    writeCString(str) {}
  
    /**
     * @param {number} int8 Write 8-bit integer.
     */
    writeInt8(int8) {}
  
    /**
     * @param {number} int16 Write 16-bit integer as big-endian.
     */
    writeInt16be(int16) {}
  
    /**
     * @param {number} int16 Write 16-bit integer as little-endian.
     */
    writeInt16le(int16) {}
  
    /**
     * @param {number} int32 Write 32-bit integer as big-endian.
     */
    writeInt32be(int32) {}
  
    /**
     * @param {number} int32 Write 32-bit integer as little-endian.
     */
    writeInt32le(int32) {}
  
    /**
     * @param {number} int64 Write 64-bit integer as big-endian.
     */
    writeInt64be(int64) {}
  
    /**
     * @param {number} int64 Write 64-bit integer as little-endian.
     */
    writeInt64le(int64) {}
  
    /**
     * @param {number} uint8 Write unsigned 8-bit integer.
     */
    writeUint8(uint8) {}
  
    /**
     * @param {number} uint16 Write unsigned 16-bit integer as big-endian.
     */
    writeUint16be(uint16) {}
  
    /**
     * @param {number} uint16 Write unsigned 16-bit integer as little-endian.
     */
    writeUint16le(uint16) {}
  
    /**
     * @param {number} uint32 Write unsigned 32-bit integer as big-endian.
     */
    writeUint32be(uint32) {}
  
    /**
     * @param {number} uint32 Write unsigned 32-bit integer as little-endian.
     */
    writeUint32le(uint32) {}
  
    /**
     * @param {number} uint64 Write unsigned 64-bit integer as big-endian.
     */
    writeUint64be(uint64) {}
  
    /**
     * @param {number} uint64 Write unsigned 64-bit integer as little-endian.
     */
    writeUint64le(uint64) {}
  }