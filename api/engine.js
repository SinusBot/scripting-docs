/**
 * @module engine
 * @example
 * const engine = require('engine');
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
     * Gets the default channel ID
     * @returns {string}
     */
    getDefaultChannelID: () => {},

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
     * Logs to stdout / instance log.
     * 
     * Note:
     * - For some classes this may print `{}` because the values are returned by functions and not stored as properties.
     * - In recent versions numbers and some other types may be logged as `<nil>`.
     * To get the actual value in the log you need to convert it to a string first.
     * @param {...*} something
     * @example
     * const engine = require('engine');
     * engine.log('Hello from a script!');
     * 
     * const a = 42;
     * const b = 1337;
     * // can be logged like this:
     * engine.log('a is ' + a + ', and b is ' + b + '.');
     * // or a bit nicer with an es6 templates string:
     * engine.log(`a is ${a}, and b is ${b}.`);
     * // see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings
     * 
     * // examples of common mistakes:
     * 
     * // converting an object to a string like this will *NOT* print what you want:
     * const cat = {says: 'meow'};
     * engine.log(`cat: ${cat}`); // => will print: "cat: [object Object]"
     * engine.log(cat); // => will (probably) print: "{"says":"meow"}"
     * // to print it's values you can also convert it to JSON:
     * engine.log(`cat: ${JSON.stringify(cat)}`); // => will print: "cat: {"says":"meow"}"
     * 
     * // but this will not work with classes like Client or Channel!
     * engine.log(JSON.stringify(aClientObj)) // => will print: "{}"
     * engine.log(aClientObj) // => will print: "Client{ ID: <something>, Name: <irgendwr> }"
     * // but an array of clients/channels/... will NOT be printed as you would expect:
     * engine.log([aClientObj, aClientObj]) // => will print: "[{},{}]"
     */
    log: (...something) => {},

	/**
     * @todo //TODO: What are the formatter options?
	 * @param {string} format Format
	 * @param {...*} something
	 */
    logf(format, ...something) {},

    /**
     * Exports an object, so other Scripts are able to use functions or values of the Script
     * 
     * **Note:** Since SinusBot v1.0.0 you can now use the standard `module.exports = {...};` instead, as shown below.
     * @param {object} obj - object which should get exported
     * @example
     * // scriptname: exportscript.js
     * var publicvariable = 'I get exportet!';
     * 
     * module.exports = {
     *     // returns the value of 'publicvariable'
     *     get: () => {
     *         return publicvariable;
     *     },
     *     // modifies the value of 'publicvariable'
     *     set: (value) => {
     *         publicvariable = value;
     *     }
     * };
     * 
     * // ----------------------------------------------
     * // old way of exporting:
     * // var engine = require('engine');
     * // engine.export({
     * //     // returns the value of 'publicvariable'
     * //     get: function () {
     * //         return publicvariable;
     * //     },
     * //     // modifies the value of 'publicvariable'
     * //     set: function (value) {
     * //         publicvariable = value;
     * //     }
     * // })
     * // ----------------------------------------------
     * @example
     * // import in another script:
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
     * @description Adds a user.
     * @since 1.0.0
	 * @param {string} username
	 * @returns {?User} User or undefined if a user with the same name already exists
	 */
    addUser() {},

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

    /**
     * @description Returns the SinusBot version.
     * @since 1.0.0
     * @returns {string} SinusBot version, for example: `1.0.0-alpha.7-a20212b`
     */
    version: () => {},

	/**
     * @since 1.0.0
	 * @returns {string} OS (Operating-System, e.g. "linux")
	 */
	os() {},
    
	/**
     * @description Disables the register command
     * @since 1.0.0
	 */
	disableRegistration() {},

	/**
     * @description Enables the register command
     * @since 1.0.0
	 */
    enableRegistration() {},

	/**
     * @description Returns whether registration is enabled
     * @since 1.0.0-beta.6
     * @returns {boolean} true if registration is enabled
	 */
    registrationEnabled() {},

	/**
	* @returns {boolean}
	*/
	isSubscriptionMode() {},
    
	/**
	 * @returns {Channel[]}
     */
    getChannelSubscriptions() {},
    
	/**
	 * @returns {Client[]}
	 */
    getClientSubscriptions() {},
    
	/**
	 * @param {boolean} bool `true` to enable subscription-mode, `false` to disable it.
     * @since 1.0.0-beta.8
	 */
	setSubscriptionMode(bool) {},
    
	/**
     * @returns {boolean} wether ignore commands on specific chat has been set
     * @since 1.0.0-beta.9
	 */
	getIgnoreCommandsFromServerChat() {},
    
	/**
     * the value of the checkbox from instance settings "ignore commands via channel-chat"
     * @returns {boolean} wether ignore setting has been set or not
     * @since 1.0.0-beta.9
	 */
	getIgnoreCommandsFromChannelChat() {},
    
	/**
     * the value of the checkbox from instance settings "ignore commands via private message"
     * @returns {boolean} wether ignore setting has been set or not
     * @since 1.0.0-beta.9
	 */
    getIgnoreCommandsFromPrivateChat() {},
    
    /**
     * set the value of the checkbox from instance settings "ignore commands via server-chat"
     * @param {boolean} bool reset/set specific setting
     * @since 1.0.0-beta.9
     */
    setIgnoreCommandsFromServerChat(bool) {},
    
    /**
     * set the value of the checkbox from instance settings "ignore commands via channel-chat"
     * @param {boolean} bool reset/set specific setting
     * @since 1.0.0-beta.9
     */
    setIgnoreCommandsFromChannelChat(bool) {},
    
    /**
     * set the value of the checkbox from instance settings "ignore commands via private message"
     * @param {boolean} bool reset/set specific setting
     * @since 1.0.0-beta.9
     */
    setIgnoreCommandsFromPrivateChat(bool) {},
}