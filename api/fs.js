/**
 * @interface FileInfo
 * @version 1.0.0
 */
class FileInfo {
    /**
     * @version 1.0.0
     * @returns {string} Base name of the file
     */
    name() { }
    /**
     * @version 1.0.0
     * @returns {string} Length in bytes for regular files; system-dependent for others
     */
    size() { }
    // FIXME: Either document FileMode or change to number
    /**
     * @version 1.0.0
     * @returns {FileMode} File mode bits
     */
    mode() { }
    /**
     * @version 1.0.0
     * @returns {Date} Modification time
     */
    modTime() { }
    /**
     * @version 1.0.0
     * @returns {boolean} Returns if the file is a directory
     */
    isDir() { }
    // FIXME: What is returned here exactly?
    // /**
    //  * @returns {object} Underlying data source (can return nil)
    //  */
    // sys() { }
}

/**
 * @module fs
 * @version 1.0.0
 */
module.exports = {
    /**
     * @description Checks if a file exists
     * @version 1.0.0
     * @param {string} path - Path to the file (for example `/var/www/html/foo.txt`)
     * @return {boolean}
     */
    exists: (path) => {},

    /**
     * @description Reads the content of a file
     * @version 1.0.0
     * @param {string} path - Path to the file
     * @return {Bytes}
     */
    readFile: (path) => {},

    /**
     * @description Writes data to a file
     * @version 1.0.0
     * @param {string} path - Path to the file
     * @param {BytesWriter} data - Data as Bytes, e.g. created by `helpers.bytesFromString()` or similar functions
     * @param {number} mode - File mode bits
     * @return {boolean} success
     */
    writeFile: (path, data, mode) => {},

    /**
     * @description Returns information about a file
     * @version 1.0.0
     * @param {string} path - Path to the file
     * @return {FileInfo} FileInfo
     */
    stat: (path) => {},

    /**
     * @description Returns information about all files in a dirictory
     * @version 1.0.0
     * @param {string} path - Path to the directory
     * @return {FileInfo[]} Array of FileInfo
     */
    readDir: (path) => {},

    /**
     * @description Deletes a file or directory
     * @version 1.0.0
     * @param {string} path - Path to the file or directory
     * @return {boolean} success
     */
    remove: (path) => {},

    /**
     * @description Creates a directory
     * @version 1.0.0
     * @param {string} path - Path of the directory
     * @return {boolean} success
     */
    mkDir: (path) => {},

    /**
     * @description Creates every missing directory in a path
     * @version 1.0.0
     * @param {string} path - Path of the directory
     * @return {boolean} success
     */
    mkDirAll: (path) => {},

    /**
     * @description Deletes a file or directory
     * @version 1.0.0
     * @param {string} path - Path to the file or directory
     * @param {string} newPath - New path to the file or directory
     * @return {boolean} success
     */
    rename: (path, newPath) => {},
}