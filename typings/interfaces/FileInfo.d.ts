export default interface FileInfo {

  /**
   * returns the base name of the file
   */
  name(): string

  /**
   * returns the length in bytes for regular files
   * system dependent for others
   */
  size(): string

  /**
   * returns the file mode bits
   */
  mode(): number

  /**
   * returns the last modification time
   */
  modTime(): Date

  /**
   * checks wether the file is a directory
   */
  isDir(): boolean
}