/**
 * @module engine
 * @example
 * var engine = require('engine');
 * engine.log('Hello from a script!');
 */
module.exports = {
    /**
     * @returns {string} Current instances' unique identifier
     */
    getInstanceID: () => {},

    /**
     * @returns {string} Current bots' unique identifier
     */
    getBotID: () => {},

    /**
     * Returns the name of the used backend (e.g. "ts3" or "discord")
     * @returns {string} Backend
     */
    getBackend: () => {},

    /**
     * @description
     * sets the log level of the instance
     * ```
     * level | what gets logged
     * ------|-----------------
     *   0   | no log messages
     *   1   | errors only
     *   2   | errors and warnings
     *   3   | errors, warnings, information
     *   4   | ...
     *  10   | most verbose
     *  11   | most verbose + external backends
     * ```
     * @param {number} level - Log level to set
     * @returns {boolean}
     * 
     */
    setInstanceLogLevel: (level) => {},

    /**
     * @description
     * Sets the log level of the bot
     * ```
     * level | what gets logged
     * ------|-----------------
     *   0   | no log messages
     *   1   | errors only
     *   2   | errors and warnings
     *   3   | errors, warnings, information
     *   4   | ...
     *  10   | most verbose
     *  11   | most verbose + external backends
     * ```
     * @param {number} level - Log level to set
     * @returns {boolean}
     */
    setBotLogLevel: (level) => {},

    /**
     * Returns the log level of the instance
     * @returns {number} The set loglevel
     */
    getInstanceLogLevel: () => {},

    /**
     * Returns the log level of the bot
     * @returns {number} The set loglevel
     */
    getBotLogLevel: () => {},

    /**
     * Reloads all scripts; requires the corresponding setting in the config.ini to be enabled
     * @returns {boolean}
     */
    reloadScripts: () => {},

    /**
     * Returns the configured nickname - to get the actual nickname, use the backend module
     * @returns {string}
     */
    getNick: () => {},

    /**
     * Sets the nick to a new value and updates it on the server
     * @param {string} nick - New nick
     * @returns {boolean}
     */
    setNick: (nick) => {},

    /**
     * Sets the default channel by its ID
     * @param {string} channelID
     * @returns {boolean}
     */
    setDefaultChannelID: (channelID) => {},

    /**
     * Returns true if the backend of this instance has been started
     * @returns {boolean}
     */
    isRunning: () => {},

    /**
     * Sends a notification to all users that are currently using the webinterface; use this for startup errors
     * @param {string} message - Message to send
     */
    notify: (message) => {},

    /**
     * Stores the given object as configuration for the current script
     * @param {object} config
     * @returns {boolean}
     */
    saveConfig: () => {},

    /**
     * Logs to stdout / instance log
     * @param {any} log
     */
    log: (log) => {},

    /**
     * Exports an object, so other Scripts are able to use functions or values of the Script
     * @param {object} obj - object which should get exported
     * @example
     * // scriptname: exportscript.js
     * var engine = require('engine');
     * var publicvariable = 'I get exportet!';
     * engine.export({
     *     // returns the value of 'publicvariable'
     *     get: function get() {
     *         return publicvariable;
     *     },
     *     // modifies the value of 'publicvariable'
     *     set: function get(value) {
     *         publicvariable = value;
     *     }
     * })
     * @example
     * var event = require('event');
     * var engine = require('engine');
     * event.on('load', function() {
     *     // must always be loaded AFTER the 'load' event
     *     var script = require('exportscript.js');
     *     engine.log(script.get()); // logs 'I get exportet!'
     *     script.set('New Value');
     *     engine.log(script.get()); // logs 'New Value'
     * });
     */
    export: (obj) => {},

    /**
     * @description
     * removes the current avatar image
     * @returns {boolean}
     */
    removeAvatar: () => {},

    /**
     * @description
     * sets the avatar image to the album art of a given track
     * @param {Track} track - Track to extract the album art from
     * @returns {boolean}
     */
    setAvatarFromTrack: (track) => {},

    /**
     * @description
     * sets the avatar image to the manually uploaded image
     * @returns {boolean}
     */
    setDefaultAvatar: () => {},

    /**
     * @description
     * sets the avatar to the rendered output of a banner template
     * @param {string} bannerName - banner template to use
     * @returns {boolean}
     * @since 0.12.0
     */
    setAvatarFromBanner: (bannerName) => {},

    /**
     * @description
     * sets the avatar to the given image as URL
     * @param {string} url - image url
     * @returns {boolean}
     * @since 0.14.0
     */
    setAvatarFromURL: (url) => {},

    /**
     * @description Gets the users of the SinusBot
     * @since 0.13.37
     * @returns {User[]}
     */
    getUsers: () => {},

    /**
     * @description Gets a SinusBot user by his ID
     * @since 0.13.37
     * @param {string} id - ID of the SinusBot user
     * @returns {?User}
     */
    getUserById: (id) => {},

    /**
     * @description Gets a Sinusbot user by his name.
     * @since 0.13.37
     * @param {string} name - Name of the user
     * @returns {?User}
     */
    getUserByName: (name) => {},

    /**
     * @description Sets the command prefix.
     * @since 0.14.0
     * @param {string} prefix - Command prefix
     */
    setCommandPrefix: (prefix) => {},

    /**
     * @description Gets the command prefix.
     * @since 0.14.0
     * @returns {string} Command prefix
     */
    getCommandPrefix: () => {},
}