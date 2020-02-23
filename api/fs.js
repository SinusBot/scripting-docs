/**
 * @interface FileInfo
 * @since 1.0.0
 */
class FileInfo {
    /**
     * @since 1.0.0
     * @returns {string} Base name of the file
     */
    name() { }
    
    /**
     * @since 1.0.0
     * @returns {string} Length in bytes for regular files; system-dependent for others
     */
    size() { }

    /**
     * @since 1.0.0
     * @returns {number} [UNIX file permission mode](https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation)
     */
    mode() { }

    /**
     * @since 1.0.0
     * @returns {Date} Modification time
     */
    modTime() { }

    /**
     * @since 1.0.0
     * @returns {boolean} Returns if the file is a directory
     */
    isDir() { }
}

/**
 * @module fs
 * @since 1.0.0
 * @description
 * This module is protected. This means that you need to add `'fs'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 * 
 */
module.exports = {
    /**
     * @description Checks if a file exists
     * @since 1.0.0
     * @param {string} path - Path to the file (for example `/var/www/html/foo.txt`)
     * @return {boolean}
     */
    exists: (path) => {},

    /**
     * @description Reads the content of a file
     * @since 1.0.0
     * @param {string} path - Path to the file
     * @return {Bytes}
     */
    readFile: (path) => {},

    /**
     * @description Writes data to a file
     * @since 1.0.0
     * @param {string} path - Path to the file
     * @param {BytesWriter} data - Data as Bytes, e.g. created by `helpers.bytesFromString()` or similar functions
     * @param {number} mode - [UNIX file permission mode](https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation), i.e. `0644` (for `-rw-r--r--`)
     * @return {boolean} success
     */
    writeFile: (path, data, mode) => {},

    /**
     * @description Returns information about a file
     * @since 1.0.0
     * @param {string} path - Path to the file
     * @return {FileInfo} FileInfo
     */
    stat: (path) => {},

    /**
     * @description Returns information about all files in a dirictory
     * @since 1.0.0
     * @param {string} path - Path to the directory
     * @return {FileInfo[]} Array of FileInfo
     */
    readDir: (path) => {},

    /**
     * @description Deletes a file or directory
     * @since 1.0.0
     * @param {string} path - Path to the file or directory
     * @return {boolean} success
     */
    remove: (path) => {},

    /**
     * @description Creates a directory
     * @since 1.0.0
     * @param {string} path - Path of the directory
     * @return {boolean} success
     */
    mkDir: (path) => {},

    /**
     * @description Creates every missing directory in a path
     * @since 1.0.0
     * @param {string} path - Path of the directory
     * @return {boolean} success
     */
    mkDirAll: (path) => {},

    /**
     * @description Deletes a file or directory
     * @since 1.0.0
     * @param {string} path - Path to the file or directory
     * @param {string} newPath - New path to the file or directory
     * @return {boolean} success
     */
    rename: (path, newPath) => {},
}