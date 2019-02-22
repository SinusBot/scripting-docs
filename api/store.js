/**
 * @module store
 * @example
 * var store = require('store');
 * store.set('foo', 'bar');
 */
module.exports = {
    /**
     * Stores a variable under the given key
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     * @param {any} value - Value to be stored; must be JSON.stringify()-able
     * @returns {boolean}
     * @example
     * var store = require('store');
     * store.set('foo', 'bar');
     */
    set: (key, value) => {},

    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     * @returns {any} Stored value - or undefined, if not found
     * @example
     * var store = require('store');
     * var foo = store.get('foo');
     */
    get: (key) => {},

    /**
     * Deletes a stored variable by its key
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     */
    unset: (key) => {},

    /**
     * Returns an array of all set keys
     * the values stored are only available for the current script, but shared between instances of it
     * @returns {string[]} Array of all stored keys
     */
    getKeys: () => {},

    /**
     * Returns all stored items
     * the values stored are only available for the current script, but shared between instances of it
     * @returns {object} Keys of this object are the keys of each entry
     */
    getAll: () => {},

    /**
     * Stores a variable under the given key
     * the values stored are available for every script of every instance
     * @param {string} key
     * @param {any} value - Value to be stored; must be JSON.stringify()-able
     * @returns {boolean} 
     */
    setGlobal: (key, value) => {},

    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are available for every script of every instance
     * @param {string} key
     * @returns {any} Stored value - or undefined, if not found 
     */
    getGlobal: (key) => {},

    /**
     * Deletes a stored variable by its key
     * the values stored are available for every script of every instance
     * @param {string} key
     */
    unsetGlobal: (key) => {},

    /**
     * Returns an array of all set keys
     * the values stored are available for every script of every instance
     * @returns {string[]} Array of all stored keys
     */
    getKeysGlobal: () => {},

    /**
     * Returns all stored items
     * the values stored are available for every script of every instance
     * @returns {object} Keys of this object are the keys of each entry
     */
    getAllGlobal: () => {},

    /**
     * Stores a variable under the given key
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     * @param {any} value - Value to be stored; must be JSON.stringify()-able
     * @returns {boolean} 
     */
    setInstance: (key, value) => {},

    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     * @returns {any} Stored value - or undefined, if not found 
     */
    getInstance: (key) => {},

    /**
     * Deletes a stored variable by its key
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     */
    unsetInstance: (key) => {},

    /**
     * Returns an array of all set keys
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns {string[]} Array of all stored keys
     */
    getKeysInstance: () => {},

    /**
     * Returns all stored items
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns {object} Keys of this object are the keys of each entry
     */
    getAllInstance: () => {},
}