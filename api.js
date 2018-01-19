/*
TODO:
complaints
*/

/**
 * @mixin Engine
 * @example
 * var engine = require('engine');
 * engine.log('Hello from a script!');
 */
var Engine = {
    /**
     * @returns {string} Current instances' unique identifier
     */
    getInstanceID: function () { },
    /**
     * @returns {string} Current bots' unique identifier
     */
    getBotID: function () { },
    /**
     * Returns the name of the used backend (e.g. "ts3" or "discord")
     * @returns {string} Backend
     */
    getBackend: function () { },
    /**
     * @description
     * sets the log level of the instance
     * level | what gets logged
     * ---|---
     * 0 | no log messages
     * 1 | errors only
     * 2 | errors and warnings
     * 3 | errors, warnings, information
     * 4 | ...
     * 10 | most verbose
     * 11 | most verbose + external backends
     * @param {number} level - Log level to set
     * @returns {Boolean}
     * 
     */
    setInstanceLogLevel: function (level) { },
    /**
     * @description
     * Sets the log level of the bot
     * level | what gets logged
     * ---|---
     * 0 | no log messages
     * 1 | errors only
     * 2 | errors and warnings
     * 3 | errors, warnings, information
     * 4 | ...
     * 10 | most verbose
     * 11 | most verbose + external backends
     * @param {number} level - Log level to set
     * @returns {Boolean}
     */
    setBotLogLevel: function (level) { },
    /**
     * Returns the log level of the instance
     * @returns {number} The set loglevel
     */
    getInstanceLogLevel: function () { },
    /**
     * Returns the log level of the bot
     * @returns {number} The set loglevel
     */
    getBotLogLevel: function () { },
    /**
     * Reloads all scripts; requires the corresponding setting in the config.ini to be enabled
     * @returns {Boolean}
     */
    reloadScripts: function () { },
    /**
     * Returns the configured nickname - to get the actual nickname, use the backend module
     * @returns {string}
     */
    getNick: function () { },
    /**
     * Sets the nick to a new value and updates it on the server
     * @param {string} nick - New nick
     * @returns {Boolean}
     */
    setNick: function (nick) { },
    /**
     * Sets the default channel by its ID
     * @param {string} channelID
     * @returns {Boolean}
     */
    setDefaultChannelID: function (channelID) { },
    /**
     * Returns true if the backend of this instance has been started
     * @returns {Boolean}
     */
    isRunning: function () { },
    /**
     * Sends a notification to all users that are currently using the webinterface; use this for startup errors
     * @param {string} message - Message to send
     */
    notify: function (message) { },
    /**
     * Stores the given object as configuration for the current script
     * @param {Object} config
     * @returns {bool}
     */
    saveConfig: function () { },
    /**
     * Logs to stdout / instance log
     * @param {any} log
     */
    log: function (log) { },
    /**
     * Exports an Object, so other Scripts are able to use functions or values of the Script
     * @param {object} obj - Object which should get exported
     * @example
     * //scriptname: exportscript.js
     * var engine = require('engine');
     * var publicvariable = 'I get exportet!';
     * engine.export({
     *     //returns the value of 'publicvariable'
     *     get: function get() {
     *         return publicvariable;
     *     },
     *     //modifies the value of 'publicvariable'
     *     set: function set(value) {
     *         publicvariable = value;
     *     }
     * })
     * @example
     * var event = require('event');
     * var engine = require('engine');
     * event.on('load', function() {
     *     //must always be loaded AFTER the 'load' event
     *     var script = require('exportscript.js');
     *     engine.log(script.get()); //logs 'I get exportet!'
     *     script.set('New Value');
     *     engine.log(script.get()); //logs 'New Value'
     * });
     */
    export: function (obj) { }
};


/**
 * @mixin Store
 * @example
 * var store = require('store');
 * store.set('foo', 'bar');
 */
var Store = {
    /**
     * Stores a variable under the given key
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     * @param {any} value - Value to be stored; must be JSON.stringify()-able
     * @returns {bool}
     * @example
     * var store = require('store');
     * store.set('foo', 'bar');
     */
    set: function (key, value) { },
    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     * @returns {any} Stored value - or undefined, if not found
     * @example
     * var store = require('store');
     * var foo = store.get('foo');
     */
    get: function (key) { },
    /**
     * Deletes a stored variable by its key
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     */
    unset: function (key) { },
    /**
     * Returns an array of all set keys
     * the values stored are only available for the current script, but shared between instances of it
     * @returns {string[]} Array of all stored keys
     */
    getKeys: function () { },
    /**
     * Returns all stored items
     * the values stored are only available for the current script, but shared between instances of it
     * @returns {Object} Keys of this object are the keys of each entry
     */
    getAll: function () { },
    /**
     * Stores a variable under the given key
     * the values stored are available for every script of every instance
     * @param {string} key
     * @param {any} value - Value to be stored; must be JSON.stringify()-able
     * @returns {bool} 
     */
    setGlobal: function (key, value) { },
    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are available for every script of every instance
     * @param {string} key
     * @returns {any} Stored value - or undefined, if not found 
     */
    getGlobal: function (key) { },
    /**
     * Deletes a stored variable by its key
     * the values stored are available for every script of every instance
     * @param {string} key
     */
    unsetGlobal: function (key) { },
    /**
     * Returns an array of all set keys
     * the values stored are available for every script of every instance
     * @returns {string[]} Array of all stored keys
     */
    getKeysGlobal: function () { },
    /**
     * Returns all stored items
     * the values stored are available for every script of every instance
     * @returns {Object} Keys of this object are the keys of each entry
     */
    getAllGlobal: function () { },
    /**
     * Stores a variable under the given key
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     * @param {any} value - Value to be stored; must be JSON.stringify()-able
     * @returns {bool} 
     */
    setInstance: function (key, value) { },
    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     * @returns {any} Stored value - or undefined, if not found 
     */
    getInstance: function (key) { },
    /**
     * Deletes a stored variable by its key
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     */
    unsetInstance: function (key) { },
    /**
     * Returns an array of all set keys
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns {string[]} Array of all stored keys
     */
    getKeysInstance: function () { },
    /**
     * Returns all stored items
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns {Object} Keys of this object are the keys of each entry
     */
    getAllInstance: function () { },
}

/**
 * @mixin Backend
 */
var Backend = {
    /**
     * @description Connects to the server
     * @returns {Boolean}
     */
    connect: function () { },
    /**
     * @description Disconnects from the server
     * @returns {Boolean}
     */
    disconnect: function () { },
    /**
     * Returns true if the backend is connected to a server
     * @returns {Boolean}
     */
    isConnected: function () { },
    /**
     * @returns {string} Current bots' unique identifier
     */
    getBotClientID: function () { },
    /**
     * @returns {Client} Client of the bot
     */
    getBotClient: function () { },
    /**
     * Returns the actual nickname; To get the configured nickname, use engine.getNick() instead.
     * @returns {string}
     */
    getNick: function () { },
    /**
     * Returns a channel if found
     * @param {string} id
     * @returns {Channel}
     * @example
     * var backend = require('backend');
     * var channel = backend.getChannelByID('6');
     */
    getChannelByID: function (id) { },
    /**
     * Returns the (primary) channel the bot is in
     * @returns {Channel}
     * @example
     * var backend = require('backend');
     * var channel = backend.getCurrentChannel();
     */
    getCurrentChannel: function () { },
    /**
     * Returns a channel if found
     * @param {string} name
     * @returns {Channel}
     * @example
     * var backend = require('backend');
     * var channel = backend.getChannelByName('Welcome Channel');
     */
    getChannelByName: function (name) { },
    /**
     * Returns the total number of channels
     * @returns {number}
     * @example
     * var backend = require('backend');
     * var count = backend.getChannelCount();
     */
    getChannelCount: function () { },
    /**
     * Returns all channels
     * @returns {Channel[]}
     * @example
     * // Logs the name of all channels
     * 
     * var backend = require('backend');
     * var engine = require('engine');
     * var channels = backend.getClients();
     * 
     * channels.forEach(function(channel) {
     *     engine.log(channel.name);
     * });
     */
    getChannels: function () { },
    /**
     * Returns all clients
     * @returns {Client[]}
     * @example
     * // Gets a list of all clients and sends them a message
     * 
     * var backend = require('backend');
     * var clients = backend.getClients();
     * 
     * clients.forEach(function(client) {
     *     client.chat('Hello ', + client.Name() + '. I\'m a SinusBot!');
     * });
     */
    getClients: function () { },
    /**
     * Returns a client by its temporary ID (changes when the client reconnects)
     * @param {string} id
     * @returns {Client}
     */
    getClientByID: function (id) { },
    /**
     * Returns a client by its name/nickname
     * @param {string} name
     * @returns {Client}
     */
    getClientByName: function (name) { },
    /**
     * Alias of getClientByName
     * @param {string} name
     * @returns {Client}
     */
    getClientByNick: function (name) { },
    /**
     * Returns an (online) client by its permanent id
     * @param {string} uniqueID
     * @returns {Client}
     */
    getClientByUniqueID: function (uniqueID) { },
    /**
     * Alias of getClientByUniqueID
     * @param {string} uniqueID
     * @returns {Client}
     */
    getClientByUID: function (uniqueID) { },
    /**
     * @description Sends a message to the server
     * @param {string} msg - Message to send
     * @example
     * var backend = require('backend');
     * backend.chat('Hello from SinusBot!');
     */
    chat: function (msg) { },
    /**
     * @description Creates a new channel
     * @version 0.9.16.3
     * @param {ChannelParams} channelParams
     */
    createChannel: function (channelParams) { },
    // TODO: change ID to Id; Support for both versions!
    /**
     * Returns a servergroup by its ID
     * @param {string} id ServerGroup ID
     * @returns {ServerGroup}
     */
    getServerGroupByID: function (id) { },
    // TODO: change ID to Id; Support for both versions!
    /**
     * Returns a channelgroup by its ID
     * @param {string} id - ChannelGroup ID
     * @returns {ChannelGroup}
     */
    getChannelGroupByID: function (id) { }
};

/**
 * @mixin Media
 */
var Media = {
    /**
     * @description Plays a track via internal url
     * @param {string} url - Internal url (like track://...)
     * @returns {Boolean}
     */
    playURL: function (url) { },
    /**
     * Returns the current track
     * @returns {Track}
     */
    getCurrentTrack: function () { },
    /**
     * Returns the track with the given ID (or null if none was found)
     * @returns {Track}
     */
    getTrackByID: function (id) { },
    /**
     * @description Searches for tracks matching the search term, returns 20 entries at most
     * @param {string} searchString
     * @returns {Track[]}
     * @example
     * var event = require('event');
     * var media = require('media');
     * 
     * event.on('chat', function(ev) {
     *     var params = ev.text.split(' ');
     *     if (params.length == 1) {
     *         ev.client.chat('Please enter a searchterm after .play - like .play november rain');
     *         return;
     *     }
     *     if (params[0] == '.play') {
     *         params.shift();
     *         var results = media.search(params.join(' '));
     *         if (results.length > 0) {
     *             results[0].play();
     *             ev.client.chat('Playing - just for you: ' + results[0].artist() + ' - ' + results[0].title());
     *         } else {
     *             ev.client.chat('Sorry, I could not find anything that matched your search.');
     *         }
     *     }
     * });
     */
    search: function (searchString) { },
    /**
     * @description Adds the given url to the queue
     * @param {string} url
     * @returns {Boolean}
     */
    enqueue: function (url) { },
    /**
     * @description Adds the given url as the first entry in the queue
     * @param {string} url
     * @returns {Boolean}
     */
    addNext: function (url) { },
    /**
     * @description Plays the next track of the queue / playlist
     */
    playNext: function () { },
    /**
     * @description Plays the next previous of the queue / playlist
     */
    playPrevious: function () { },
    /**
     * @description Stops playback completely
     * @returns {Boolean}
     */
    stop: function () { },
    /**
     * Returns all tracks of the queue
     * @returns {Track[]}
     */
    getQueue: function () { },
    /**
     * Returns all playlists
     * @returns {Playlist[]}
     */
    getPlaylists: function () { },
    /**
     * Returns the playlists with the given id
     * @returns {Playlist}
     */
    getPlaylistByID: function (id) { },
    /**
     * Returns the currently active playlist
     * @returns {Playlist}
     */
    getActivePlaylist: function (id) { },
    /**
     * @description Removes the track at a given position from the queue
     * @param {number} index - Index of the track that should be removed from the queue (0 being the first entry)
     * @returns {Boolean}
     */
    removeFromQueue: function (index) { },
    /**
     * @description Removes all entries from the queue
     * @returns {Boolean}
     */
    clearQueue: function () { },
    /**
     * @description Clears the current playlist (if set) so that playback won't continue inside that playlist
     * @returns {Boolean}
     */
    clearPlaylist: function () { },
    /**
     * @description Streams a file via youtube-dl
     * @param {string} url - Url that youtube-dl supports
     */
    yt: function (url) { },
    /**
     * @description Downloads a file via youtube-dl, optionally plays it
     * @param {string} url - Url that youtube-dl supports
     * @param {Boolean} play - Set to true to play after download
     */
    ytdl: function (url, play) { },
    /**
     * @description Enqueues a stream via youtube-dl
     * @param {string} url - Url that youtube-dl supports
     */
    enqueueYt: function (url) { },
    /**
     * @description Downloads a file via youtube-dl, then enqueues it
     * @param {string} url - Url that youtube-dl supports
     */
    enqueueYtdl: function (url) { },
}

/**
 * @mixin Audio
 */
var Audio = /** @lends Audio */{
    /**
     * @description Applies an audiofilter to the audio output
     * @param {string} filter - ffmpeg compatible filter string
     * @returns {Boolean}
     */
    setAudioFilter: function (filter) { },
    /**
     * @description Enables or disables audio return channel; required for speech recognition engine / recording
     * @param {Boolean} enable
     * @returns {Boolean}
     */
    setAudioReturnChannel: function (enable) { },
    /**
     * @description Starts recording to a file
     * @returns {Boolean}
     */
    startRecording: function () { },
    /**
     * @description Stops recording to a file
     * @returns {Boolean}
     */
    stopRecording: function () { },
    /**
     * @description Streams audio output to an icecast-server
     * @param {string} url - Endpoint to stream to
     * @param {string} username - Username used for authentication
     * @param {string} password - Password
     * @returns {Boolean}
     */
    streamToServer: function (url, username, password) { },
    /**
     * @description Stops streaming started with streamToServer 
     * @returns {Boolean}
     */
    stopStream: function () { },
    /**
     * Returns the state of repeat-mode
     * @returns {Boolean}
     */
    isRepeat: function () { },
    /**
     * @description Sets the state of repeat-mode
     * @param {Boolean} val
     */
    setRepeat: function (val) { },
    /**
     * Returns the state of shuffle-mode
     * @returns {Boolean}
     */
    isShuffle: function () { },
    /**
     * @description Sets the state of shuffle-mode
     * @param {Boolean} val
     */
    setShuffle: function (val) { },
    /**
     * Returns the current volume (0-100)
     * @returns {number} volume
     */
    getVolume: function () { },
    /**
     * @description Sets the volume (0-100)
     * @param {number} volume
     * @returns {Boolean}
     */
    setVolume: function (volume) { },
    /**
     * Returns the position of the current track
     * @returns {number} position (in seconds)
     */
    getTrackPosition: function () { },
    /**
     * @description Seeks to a specific position
     * @param {number} pos - New position (in seconds)
     */
    seek: function (pos) { },
    /**
     * Returns if the audio output has been muted
     * @returns {Boolean}
     */
    isMute: function () { },
    /**
     * @description Enables/disables mute
     * @param {Boolean} mute
     * @returns {Boolean}
     */
    setMute: function () { },
    /**
     * @returns {Boolean} Whether the bot is playing music
     */
    isPlaying: function () { },
    /**
     * @description Plays audio returned from the text-to-speech engine
     * @param {string} text - Text to say
     * @param {string} [locale] - Locale to use
     */
    say: function (text, locale) { },
}

/**
 * @mixin Format
 */
var Format = /** @lends Format */ {
    /**
     * @description Apply color if the backend supports it
     * @param {string} text - Text that should be colored
     * @param {string} color - Hex value of color to apply
     * @returns {string} Formatted string
     * @example
     * // Sends a red-colored message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('This is SinusBot writing in ' + format.formatColor('red', '#aa0000'));
     */
    color: function (text, color) { },
    /**
     * @description Apply italic formatting to text
     * @param {string} text
     * @returns {string} Formatted string
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.italic('italic')); 
     */
    italic: function (text) { },
    /**
     * @description Apply bold formatting to text
     * @param {string} text
     * @returns {string} Formatted string
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.bold('bold')); 
     */
    bold: function (text) { },
    /**
     * @description Apply underlined formatting to text
     * @param {string} text
     * @returns {string} Formatted string
     * @example
     * // Sends a formatted message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.underline('underlined')); 
     */
    underline: function (text) { },
    /**
     * @description Formats text as code
     * @param {string} text
     * @returns {string} Formatted string
     */
    code: function (text) { }
}

// TODO: fix this

// /**
//  * @mixin Net
//  * @description This module provides lower level network access. As this affects security heavily, it has to be enabled in the config.ini.
//  * @example
//  * var net = require('net');
//  */
// var Net = {
//     // SinusBot specific stuff
//     /**
//      * @param {ConnectOptions} options - Options to use for the connection
//      * @param {function} connectCallback - Callback that gets called if a connection succeeded or failed; in the latter case the callback will be called with one parameter, which is the error message 
//      * @returns {Connection} a tcp connection handler
//      */
//     connect: function(options, connectCallback) {},
// }

// /**
//  * @class
//  * @property {string} host - Hostname of the server to connect to
//  * @property {number} port - Port of the server to connect to 
//  */
// function ConnectOptions() {}

// /**
//  * @class
//  */
// var Connection = {
//     /**
//      * Registers a new event handler
//      * @param {string} event - Name of the event to listen to
//      * @param {function} callback
//      */
//     on: function(event, callback) {},
//     /**
//      * Sends data over the connection, optionally decoded
//      * @param {string} data - Data to be sent
//      * @param {string} encoding - Can be "hex" or "base64"
//      */
//     write: function(data, encoding) {}
// };

// /**
//  * @method Connection#data
//  * @param {Object} data - Data object
//  */

// /**
//  * @method Connection#close
//  */

/**
 * @mixin Helpers
 */
var Helpers = /** @lends Helpers */ {
    // TODO: check if this is correct
    /**
     * @description Returns a random object interpreted as string
     * @param {...object} objects
     * @returns {string} Random object interpreted as string
     */
    getRandom: function (objects) { },
    /**
     * @description Returns a random integer between zero and <max>
     * @param {int} max
     * @returns {int} Random integer
     */
    getRandom: function (max) { },
    /**
     * @description Gets the string representation of an object
     * @param {object} input
     * @returns {string}
     */
    toString: function (input) { },
    /**
     * @description Encodes a string to base64
     * @param {string} input
     * @returns {string}
     */
    base64Encode: function (input) { },
    /**
     * @description Decodes a string from base64
     * @param {string} input
     * @returns {string}
     */
    base64Decode: function (input) { },
    /**
     * @description Encodes a string to hex
     * @param {string} input
     * @returns {string}
     */
    hexEncode: function (input) { },
    /**
     * @description Decodes a string from hex
     * @param {string} input
     * @returns {string}
     */
    hexDecode: function (input) { },
    /**
     * @description Generate a hex-encoded MD5 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    MD5Sum: function (input) { },
    /**
     * @description Generate a hex-encoded SHA1 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    SHASum: function (input) { },
    /**
     * @description Generate a hex-encoded SHA256 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    SHA256Sum: function (input) { },
}


/**
* @mixin Event
* @fires chat
* @fires typing
* @fires poke
* @fires track
* @fires trackInfo
* @fires trackEnd
* @fires connect
* @fires connectionFailed
* @fires disconnect
* @fires clientMove
* @fires clientVisible
* @fires clientInvisible
* @fires clientKicked
* @fires clientKickedFromChannel
* @fires serverGroupAdded
* @fires serverGroupRemoved
* @fires clientNick 
* @fires api:$eventName
* @fires clientIPAddress
* @fires clientAway
* @fires clientBack
* @fires clientRecord
* @fires clientRecordStop
* @fires clientMute
* @fires clientUnmute
* @fires clientDeaf
* @fires clientUndeaf
* @fires channelCreate
* @fires channelUpdate
* @fires channelDelete
* @fires talkerCount
* @fires unload
* @fires load
* @example
* var event = require('event');
* var engine = require('engine');
* 
* event.on('chat', function(ev) {
*     engine.log('Got message "'+ev.text +'" from '+ ev.client.name());
* })
*/
var Event = /** @lends Event */ {
    /**
     * @description Registers an event listener
     * @param {string} event - Event to listen to
     * @param {function} callback - Gets called when the given event is triggered
     */
    on: function (event, callback) { }
};


/**
 * @class Client
 * @description Note: if the client is inivisible to the bot, some fields might not be available.
 */
function Client() { }
Client.prototype = /** @lends Client.prototype */ {
    /**
     * @returns {string} Name/nickname of the client
     */
    name: function () { },
    /**
     * Alias of name()
     * @returns {string} Name/nickname of the client
     */
    nick: function () { },
    /**
     * @returns {string} Phonetic name of the client; useful for tts
     */
    phoneticName: function () { },
    /**
     * @returns {string} Temporary ID of the client
     */
    id: function () { },
    /**
     * Alias of uniqueId()
     * @returns {string} Unique ID of the client
     */
    uid: function () { },
    /**
     * @returns {string} Unique ID of the client
     */
    uniqueId: function () { },
    // TODO: Add dbID to scripting engine!
    // TODO: change ID to Id; Support for both versions!
    // /**
    //  * Alias of databaseID()
    //  * @returns {string} TeamSpeak database ID of the client
    //  */
    //  dbID: function() {},
    // TODO: change ID to Id; Support for both versions!
    /**
     * @returns {string} TeamSpeak database ID of the client
     */
    databaseID: function () { },
    /**
     * @returns {string} Country of the client
     */
    country: function () { },
    /**
     * @returns {string} Description of the client
     */
    description: function () { },
    /**
     * @param {string} description
     * @version 0.9.19
     */
    setDescription: function (description) { },
    /**
     * @returns {number} Number of times the client has connected
     */
    getTotalConnectionsCount: function () { },
    /**
     * @returns {number} Timestamp in milliseconds when the client has been seen the first time
     */
    firstSeen: function () { },
    /**
     * Returns true when this client is the bot itself
     * @returns {Boolean}
     */
    isSelf: function () { },
    /**
     * Returns if the client is recording the conversation
     * @returns {string}
     */
    isRecording: function () { },
    /**
     * Returns if the client is muted (has its microphone disabled)
     * @returns {Boolean}
     */
    isMuted: function () { },
    /**
     * Returns if the client is deaf (has its loudspeakers disabled)
     * @returns {Boolean}
     */
    isDeaf: function () { },
    /**
     * Returns if the client is away
     * @returns {Boolean}
     */
    isAway: function () { },
    /**
     * Returns the clients' servergroups
     * @returns {ServerGroup[]}
     */
    getServerGroups: function () { },
    /**
     * Returns the clients' channelgroups
     * @returns {ChannelGroup[]}
     */
    getChannelGroups: function () { },
    /**
     * Returns the clients' away message (if set)
     * @returns {string}
     */
    getAwayMessage: function () { },
    /**
     * Returns the clients' last ping time (latency)
     * @returns {number}
     */
    getPing: function () { },
    /**
     * Returns the clients' ip address (if available)
     * @returns {string}
     */
    getIPAddress: function () { },
    /**
     * Returns the clients' online time (requires special permissions)
     * @returns {number} in milliseconds
     */
    getOnlineTime: function () { },
    /**
     * Returns the clients' current idle time (requires special permissions)
     * @returns {number} in milliseconds
     */
    getIdleTime: function () { },
    /**
     * Returns the clients' packet loss percentage (requires special permissions)
     * @returns {number}
     */
    getPacketLoss: function () { },
    /**
     * Returns the clients' amount of received data (requires special permissions)
     * @returns {number}
     */
    getBytesReceived: function () { },
    /**
     * Returns the clients' amount of sent data (requires special permissions)
     * @returns {number}
     */
    getBytesSent: function () { },

    /**
     * Returns the total number of connections from that client
     * On TS3, this information has to be actively requested from the server. If the bot is unable to get it or hasn't received an answer in time, it will return <= 0 here.
     * @returns {number}
     */
    getTotalConnections: function () { },

    /**
     * Returns the time the client has been created / was first seen by the server
     * On TS3, this information has to be actively requested from the server. If the bot is unable to get it or hasn't received an answer in time, it will return <= 0 here.
     * @returns {number}
     */
    getCreationTime: function () { },

    /**
     * Returns an array of all channels the client is in; even if TS only uses one channel for a client at a time, other backends might provide several
     * @returns {Channel[]} Array of channels
     */
    getChannels: function () { },
    /**
     * @returns {Channel} Current audio channel the client is in
     */
    getAudioChannel: function () { },

    /**
     * @description Compares two clients
     * @param {Client} otherClient
     * @returns {Boolean} true, if both clients are the same
     */
    equals: function (otherClient) { },
    /**
     * @description Sends a message to the client
     * @param {string} msg - Message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.chat('Hello, ' + client.Name());
     */
    chat: function (msg) { },
    /**
     * @description Pokes the client with a message
     * @param {string} msg - Message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.chat('Pokeypoke, ' + client.Name() + '!');
     */
    poke: function (msg) { },
    /**
     * @description Bans a client
     * @param {number} time - Amount of time the ban should last
     * @param {string} msg - Message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.ban(100, 'See you in 100 seconds, ' + client.Name() + '!');
     */
    ban: function (time, msg) { },
    /**
     * @description Kicks the client from the server 
     * @param {string} msg - Message to send
     */
    kick: function (msg) { },
    /**
     * @description Kicks the client from the server
     * @param {string} msg - Message to send
     */
    kickFromServer: function (msg) { },
    /**
     * @description Kicks the client from the channel
     * @param {string} msg - Message to send
     */
    kickFromChannel: function (msg) { },
    /**
     * @description Adds a client to a specific ServerGroup
     * @param {(ServerGroup|string|number)} group - Servergroup the client should be added to
     */
    addToServerGroup: function (group) { },
    /**
     * @description Removes a client from a specific ServerGroup
     * @param {(ServerGroup|string|number)} group - Servergroup the client should be removed from
     */
    removeFromServerGroup: function (id) { },
    /**
     * @description Moves a client to another channel
     * @param {Channel} target - Channel the client should be moved to
     * @param {string} [password] - Password for the target channel, if required
     */
    moveTo: function (target, password) { },
    /**
     * @description Enables / disables subscription for this client; requires subscription mode
     * @param {Boolean} val
     */
    setSubscription: function (val) { },
}

/**
 * @class Channel
 */
function Channel() { }
Channel.prototype = /** @lends Channel.prototype */ {
    /**
     * @returns {string} ID
     */
    id: function () { },
    /**
     * @returns {string} Name
     */
    name: function () { },
    /**
     * @returns {Channel} Parent of channel or null if none is set
     */
    parent: function () { },
    /**
     * @version 0.9.16.3
     * @returns {number} Order / position of this channel.
     * For ts3 this is a numeric value determining the order in which channels are displayed below their parent. To set a new value, please use moveTo.
     */
    position: function () { },
    /**
     * @description Moves the channel to a new parent with a new position value
     * @version 0.9.16.3
     * @param {string/Channel} parent - New parent channel
     * @param {int} order - New order value
     */
    moveTo: function (parent, order) { },
    /**
     * @param {string} name
     * @version 0.9.16
     */
    setName: function (name) { },
    /**
     * @returns {int} Type (0 = voice, 1 = text)
     */
    type: function () { },
    /**
     * @returns {string} Topic
     */
    topic: function () { },
    /**
     * @param {string} topic
     * @version 0.9.16
     */
    setTopic: function (topic) { },
    /**
     * @version 0.9.19
     * @returns {string} Description
     */
    description: function () { },
    /**
     * @param {string} description
     * @version 0.9.16
     */
    setDescription: function (description) { },
    /**
     * @returns {number} Codec
     */
    codec: function () { },
    /**
     * @param {number} quality
     * @version 0.9.16
     */
    setCodec: function (codec) { },
    /**
     * @returns {number} Codec quality
     */
    codecQuality: function () { },
    /**
     * @param {number} quality
     * @version 0.9.16
     */
    setCodecQuality: function (quality) { },
    /**
     * @returns {number} Configured number of clients the channel can hold (-1 if unlimited)
     */
    maxClients: function () { },
    /**
     * @param {Boolean} maxClients Set to -1 for unlimited clients
     * @version 0.9.16
     */
    setMaxClients: function (maxClients) { },
    /**
     * @returns {Boolean} Whether channel is permanent or not
     */
    isPermanent: function () { },
    /**
     * @param {Boolean} permanent
     * @version 0.9.16
     */
    setPermanent: function (permanent) { },
    /**
     * @returns {Boolean} Whether channel is semi-permanent or not
     */
    isSemiPermanent: function () { },
    /**
     * @param {Boolean} permanent
     * @version 0.9.16
     */
    setSemiPermanent: function (permanent) { },
    /**
     * @returns {Boolean} Whether channel is the default one
     */
    isDefault: function () { },
    /**
     * @returns {Boolean} Whether channel is password-protected or not
     */
    isPassworded: function () { },
    /**
     * @returns {Boolean} Whether channel is encrypted or not
     */
    isEncrypted: function () { },
    /**
     * @param {Boolean} encrypted
     * @version 0.9.16
     */
    setEncrypted: function (encrypted) { },
    /**
     * @description Compares two channels
     * @param {Channel} otherChannel
     * @returns {Boolean} True, if both channels are the same
     */
    equals: function (otherChannel) { },
    /**
     * @description Sends a chat message to the channel
     * @param {string} msg - Message to send
     */
    chat: function (msg) { },
    /**
     * @returns {Client[]} Clients that are in this channel
     */
    getClients: function () { },
    /**
     * @returns {number} Number of clients that are in the channel 
     */
    getClientCount: function () { },
    /**
     * @description enables / disables subscription for this channel; requires subscription mode
     * @param {Boolean} val
     */
    setSubscription: function (val) { },
    /**
     * @description Updates multiple channel parameters at once
     * @version 0.9.16.3
     * @param {ChannelParams} channelParams
     */
    update: function (channelParams) { },
    /**
     * @description Assigns a client to a channel group
     * @version 0.9.18
     * @param {Client} client
     * @param {ChannelGroup} channelGroup
     */
    setChannelGroup: function (client, channelGroup) { }
}

/**
 * @class ServerGroup
 */
function ServerGroup() { }
ServerGroup.prototype = /** @lends ServerGroup.prototype */ {
    /**
     * @returns {string} ID of the server group
     */
    id: function () { },
    /**
     * @returns {string} Name of the server group
     */
    name: function () { },
}

/**
 * @class ChannelGroup
 */
function ChannelGroup() { }
ChannelGroup.prototype = /** @lends ChannelGroup.prototype */ {
    /**
     * @returns {string} ID of the channel group
     */
    id: function () { },
    /**
     * @returns {string} Name of the channel group
     */
    name: function () { },
}


/**
 * @class Track
 */
function Track() { }
Track.prototype = /** @lends Track.prototype */ {
    /**
     * @returns {string} Unique ID of the track
     */
    id: function () { },
    /**
     * @returns {string} Unique url for the track
     */
    url: function () { },
    /**
     * @returns {string} Type of the file
     */
    type: function () { },
    /**
     * @returns {string} Title of the track
     */
    title: function () { },
    /**
     * @returns {string} Artist of the track
     */
    artist: function () { },
    /**
     * @returns {string} Temporary title of the track; e.g. when playing radio stations
     */
    tempTitle: function () { },
    /**
     * @returns {string} Temporary artist of the track; e.g. when playing radio stations
     */
    tempArtist: function () { },
    /**
     * @returns {string} Album of the track
     */
    album: function () { },
    /**
     * @returns {string} Genre of the track
     * @version 0.9.16
     */
    genre: function () { },
    /**
     * @returns {number} Duration of the track
     * @version 0.9.16
     */
    duration: function () { },
    /**
     * @returns {int} Tracknumber of the track
     * @version 0.9.16
     */
    trackNumber: function () { },
    /**
     * @returns {string} Path to the thumbnail, if any
     */
    thumbnail: function () { },
    /**
     * @returns {string} Original filename
     */
    filename: function () { },
    /**
     * @description Starts playback of the track
     * @returns {Boolean}
     */
    play: function () { },
    /**
     * @description Adds the track to the queue
     * @returns {Boolean}
     */
    enqueue: function () { },
    // /**
    //  * @description Adds the track as the first entry in the queue
    //  * @returns {Boolean}
    //  */
    // playNext: function() {},
    /**
     * @description Downloads a thumbnail from the internet and stores it for the given track
     * @param {string} url - Url to download the thumbnail from (limited to X MB)
     */
    setThumbnailFromURL: function (url) { },
    /**
     * @description Removes the thumbnail of a track
     */
    removeThumbnail: function () { }
}

/**
 * @class Playlist
 */
function Playlist() { }

Playlist.prototype = /** @lends Playlist.prototype */ {
    /**
     * @returns {string} Unique identifier of the playlist
     */
    id: function () { },
    /**
     * @returns {string} Name of the playlist
     */
    name: function () { },
    /**
     * @returns {PlaylistTrack[]} List of all tracks inside the given playlist
     */
    getTracks: function () { },
    /**
     * @description Sets the playlist to active; will continue playing songs from this playlist
     * @returns {Boolean}
     */
    setActive: function () { },
}

/**
 * @class PlaylistTrack
 */
function PlaylistTrack() { }
PlaylistTrack.prototype = /** @lends PlaylistTrack.prototype */ {
    /**
     * @returns {string} Title of the track
     */
    title: function () { },
    /**
     * @returns {string} Artist of the track
     */
    artist: function () { },
    /**
     * @returns {string} Album of the track
     */
    album: function () { },
    /**
     * @returns {string} Url of the track (internal or external)
     */
    url: function () { },
    /**
     * @description Starts playback of the track
     * @returns {Boolean} success
     */
    play: function () { },
    // /**
    //  * adds the track to the queue
    //  * @returns {Boolean}
    //  */
    // enqueue: function() {},
    // /**
    //  * adds the track as the first entry in the queue
    //  * @returns {Boolean}
    //  */
    // playNext: function() {}
}

/**
 * @mixin Net
 * @version 0.9.16
 * @example
 * var net = require('net');
 * var engine = require('engine');
 * var conn = net.connect({ host: '127.0.0.1', port: 80 }, function(err) {
 *     if (err) { engine.log(err); }
 * });
 * conn.on('data', function(x) {
 *     engine.log('got data');
 *     engine.log(x.toString());
 * })
 * if (conn) conn.write("GET / HTTP/1.1\r\nHost: localhost\r\n\r\n");
 * @description
 * The net module is protected, it needs the following entry per script in your config.ini:
 * ```
 * [Scripts.Privileges]
 * scriptname = ["net"]
 * ```
 */
var Net = /** @lends Net */ {
    /**
     * @param {ConnectParams} params - Connection parameters
     * @param {function} callback - Callback gets called on success / error;
     * if an error occured, exactly one parameter containing the error will be handed to the callback
     * @returns {NetClient} Client connection, or null if failed to setup a connection
     * (e.g. wrong parameters; null does not mean that the connection failed, instead that it is handled in the callback)
     */
    connect: function (params, callback) { },
};

/**
 * @class
 * @property {string} [host] - Host to connect to; required for mysql / postgres
 * @property {number} [port] - Port to use
 */
function ConnectParams() { }

/**
 * @class NetClient
 * @version 0.9.16
 * @fires error
 * @fires close
 * @fires data
 */
function NetClient() { }
NetClient.prototype = /** @lends NetClient.prototype */ {
    /**
     * @description Sends data over the connection
     * @param {(string|number[])} bytes - Data that should be sent over the socket; one can also send an array of ints / bytes like [0, 255, 1, 1]
     * @param {string} [format] - Optional, if given bytes will be decoded prior to sending; Can be either "hex" or "base64".
     */
    write: function (bytes, format) { },
    /**
     * @description Registers a new event handler
     * @param {string} event - Name of the event to listen to
     * @param {function} callback
     */
    on: function (event, callback) { },
};

/**
 * @event data
 * @memberof NetClient
 * @param {Bytes}
 * @description Gets fired whenever data is received
 */
/**
 * @event close
 * @memberof NetClient
 * @description Gets fired whenever the connection is closed
 */
/**
 * @event error
 * @memberof NetClient
 * @param {string} error
 * @description Gets fired whenever an error occurred
 */

/**
 * @mixin Websockets
 * @version 0.9.20
 * @fires connect
 * @fires close
 * @fires error
 * @fires data
 * @example
 * var ws = require('ws');
 * var engine = require('engine');
 * var event = require('event');
 * 
 * event.on('ws.connect', function(id) {
 *     engine.log('new websocket connection; id ' + id);
 * });
 * event.on('ws.disconnect', function(id) {
 *     engine.log('websocket connection disconnected; id ' + id);
 * });
 * event.on('ws.data', function(id, type, data) {
 *     engine.log('ws.data: id ' + id + '; data: ' + data.toString());
 *     ws.write(id, type, data.toString());
 * });
 * @description
 * The ws module is protected, it needs the following entry per script in your config.ini:
 * ```
 * [Scripts.Privileges]
 * scriptname = ["ws"]
 * ```
 */
function Websockets() { }
Websockets.prototype = /** @lends Websockets.prototype */ {
    /**
     * @description Writes some data to the connection with given connectionId
     * @param {string} connectionId
     * @param {int} messageType
     * @param {object} message - Actual message; can be given as string or byteshelper
     */
    write: function (connectionId, messageType, message) { },
    /**
     * @description Broadcasts some data to all connected clients
     * @param {int} messageType
     * @param {object} message - Actual message; can be given as string or byteshelper
     */
    broadcast: function (messageType, message) { },
    /**
     * @description Closes the connection
     * @param {string} connectionId
     */
    close: function (connectionId) { },
};

/**
 * @class Bytes
 * @version 0.9.16
 */
function Bytes() { }
Bytes.prototype = /** @lends Bytes.prototype */ {
    /**
     * @returns {string} String representation of the bytes
     */
    toString: function () { },
};

/**
 * @mixin DB
 * @version 0.9.16.4
 * @example
 * var db = require('db');
 * var engine = require('engine');
 * var helpers = require('helpers');
 * var dbc = db.connect({ driver: 'mysql', host: '127.0.0.1', username: 'demo', password: 'blah', database: 'foo' }, function(err) {
 *     if (err) {
 *          engine.log(err);
 *     }
 * });
 * if (dbc) dbc.exec("INSERT INTO blah (foo, foo2) VALUES (?, ?)", 'bar', 'bar2');
 * if (dbc) dbc.query("SELECT * FROM blah", function(err, res) {
 *     if (!err) {
 *          res.forEach(function(row) {
 *              engine.log(helpers.toString(row.foo));
 *          });
 *     }
 * });
 * @description
 * The database module is protected, it needs the following entry per script in your config.ini:
 * ```
 * [Scripts.Privileges]
 * scriptname = ["db"]
 * ```
 * 
 * Use additional parameters to exec / query whenever you use untrusted/unknown data, as those will automatically be escaped and avoid SQL injection.
 */
var DB = /** @lends DB */ {
    /**
     * @param {DBParams} params - Connection parameters
     * @param {function} callback - Callback gets called on success / error;
     * If an error occured, exactly one parameter containing the error will be handed to the callback
     * @returns {DBConn} Database connection or null if failed
     */
    connect: function (params, callback) { },
};

// TODO: improve parameter and callback documentation
/**
 * @class DBConn
 * @version 0.9.16.4
 */
function DBConn() { }
DBConn.prototype = /** @lends DBConn.prototype */ {
    /**
     * @description
     * Use this, if you expect a result set;
     * Note: strings will be returned as byte arrays to be binary safe; to convert to actual strings, please use helpers.toString(column)
     * @param {string} queryString
     * @param {any} parameter1 - Zero or more parameters; e.g. for mysql, ? in the queryString will be replaced with these parameters
     * @param {any} parameter2
     * @param {callback} callback - Callback gets called after the query has finished;
     * gets called with two parameters, err and result - both are mutually exclusive.
     * Result contains an array of rows, each containing an object with the column names as key.
     */
    query: function (queryString, parameter1, parameter2, callback) { },
    /**
     * @description Use this insted of query if you don't expect a result
     * @param {string} queryString
     * @param {any} [parameter1]
     * @param {any} [parameter2]
     */
    exec: function (queryString, parameter1, parameter2, callback) { },
};

/**
 * @class
 * @version 0.9.16
 * @property {string} driver - Database driver to use, currently sqlite3 (currently in-memory only), mysql or postgres
 * @property {string} [host] - Database server to connect to, required for mysql / postgres
 * @property {string} [username]
 * @property {string} [password]
 * @property {number} [port]
 */
function DBParams() { }


/**
 * @class
 * @property {string} text - Text of the message
 * @property {Channel} channel - Channel (if given) this message has been sent on
 * @property {Client} client - Client that sent the message
 * @property {number} mode - Number representing the way this message has been sent
 * (1 = private, 2 = channel, 3 = server)
 */
function Message() { }

/**
 * @class
 * @property {string} name - Displayname of the channel; mandatory on create
 * @property {(Channel|number|string)} parent - Parent channel (you can also use the channelId); ignored on update, mandatory on create
 * @property {string} description
 * @property {string} topic
 * @property {string} password
 * @property {number} codec - See codec types for explanation
 * @property {number} codecQuality
 * @property {Boolean} encrypted - True by default
 * @property {Boolean} permanent
 * @property {Boolean} semiPermanent
 * @property {number} position
 * @property {number} maxClients - Set to -1 for unlimited clients
 * @property {Boolean} default - Whether the channel is the default channel 
 * @property {number} neededTalkPower - TS only; 0.9.19+
 * @property {number} deleteDelay - TS only; 0.9.19+
 * @property {number} icon - TS only; 0.9.19+
 * @description
 * Used to update or create a channel;
 * When creating a channel parent and name are mandatory for TS3;
 * When updating a channel parent will be ignored (use moveTo instead)
 */
function ChannelParams() { }

/**
 * @class
 * @property {client} client - Client that has been added / removed
 * @property {client} invoker - Client that added client to the group
 * @property {serverGroup} serverGroup - Server Group
 */
function ClientServergroupEvent() {

}

/**
 * @class
 * @property {Channel} fromChannel - Old channel (or null if the client just got online / changed visibility)
 * @property {Channel} toChannel - New channel (or null if the client just went offline / changed visibility)
 * @property {Client} client - Client that was moved
 * @property {Client} invoker - Client that invoked the move
 */
function MoveInfo() { }

/**
 * @event chat
 * @memberof Event
 * @param {Message} msg - Message
 * @description
 * This event gets triggered whenever a chat message has been received.
 * This also counts for messages from the bot itself, so make sure to check.
 * @example
 * var event = require('event');
 * var engine = require('engine');
 * 
 * event.on('chat', function(ev) {
 *     engine.log('Got message "'+ev.text +'" from '+ ev.client.name());
 * });
 */
/**
 * @event typing
 * @memberof Event
 * @param {Client} client - Client that started typing
 * @description Gets fired whenever a client starts typing in a chat with the bot
 */
/**
 * @event poke
 * @memberof Event
 * @param {Message} msg - Message
 * @description Gets fired whenever the bot is poked
 * @example
 * var event = require('event');
 * var engine = require('engine');
 * 
 * event.on('poke', function(ev) {
 *     engine.log('Got poke message "'+ev.text +'" from '+ ev.client.name());
 * });
 */
/**
 * @event track
 * @memberof Event
 * @param {Track} track
 * @description Gets fired whenever a new track starts
 */
/**
 * @event trackInfo
 * @memberof Event
 * @param {Track} track
 * @description Gets fired whenever a track changes its information (like radio stations)
 */
/**
 * @event trackEnd
 * @memberof Event
 * @param {Track} track
 * @param {string} callback - Callback string
 * @description Gets fired whenever a track has stopped playing
 */
/**
 * @event connect
 * @memberof Event
 * @description Gets fired whenever a connection with the server has been established
 */
/**
 * @event connectionFailed
 * @memberof Event
 * @param {string} reason
 * @description Gets fired whenever the client is unable to connect to a server
 */
/**
 * @event disconnect
 * @memberof Event
 * @description Gets fired whenever the bots connection to the server is closed
 */
/**
 * @event clientMove
 * @memberof Event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client moves, joins or disconnects
 */
/**
 * @event clientVisible
 * @memberof Event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client becomes visible to the bot
 */
/**
 * @event clientInvisible
 * @memberof Event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client becomes invisible to the bot
 */
/**
 * @event clientKicked
 * @memberof Event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client gets kicked from the server
 */
/**
 * @event clientKickedFromChannel
 * @memberof Event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client gets kicked from a channel
 */
/**
 * @event serverGroupAdded
 * @memberof Event
 * @param {ClientServerGroupEvent} event
 * @description Gets fired whenever a client got added to a server group
 */
/**
 * @event serverGroupRemoved
 * @memberof Event
 * @param {ClientServerGroupEvent} event
 * @description Gets fired whenever a client got removed from a server group
 */
/**
 * @event clientNick
 * @memberof Event
 * @param {Client} client
 * @param {string} oldNick
 * @description Gets fired whenever a clients nickname is changed
 */

/**
* @class
*/
function APIEvent() { }

APIEvent.prototype = /** @lends APIEvent.prototype */ {
    /**
     * @returns {string} Name of the event
     */
    name: function () { },
    /**
     * @returns {Object} Json body
     */
    data: function () { },
    /**
     * @returns {User} User that called the event (or null, if unset)
     */
    user: function () { },
    /**
     * @returns {string} Remote address that triggered the call
     */
    remoteAddr: function () { },
}

/**
 * @event api:$eventName
 * @memberof Event
 * @param {APIEvent}
 * @description Gets fired whenever api:$eventName is triggered by via the web api
 */
/**
 * @event clientIPAddress
 * @memberof Event
 * @param {Client} client
 * @description Gets fired whenever a clients IP address changes or has initially been fetched
 */
/**
 * @event clientAway
 * @memberof Event
 * @param {Client} client
 * @description Gets fired whenever a client sets himself as away
 */
/**
 * @event clientBack
 * @memberof Event
 * @param {Client} client
 * @description Gets fired whenever a client removes himself as away
 */
/**
 * @event clientRecord
 * @memberof Event
 * @param {Client} client
 * @description Gets fired whenever a client starts recording
 */
/**
 * @event clientRecordStop
 * @memberof Event
 * @param {Client} client
 * @description Gets fired whenever a client stops recording
 */
/**
 * @event clientMute
 * @memberof Event
 * @param {Client} client
 * @description Gets fired whenever a client mutes his microphone
 */
/**
 * @event clientUnmute
 * @memberof Event
 * @param {Client} client
 * @description Gets fired whenever a client unmutes his microphone
 */
/**
 * @event clientDeaf
 * @memberof Event
 * @version 0.9.18
 * @param {Client} client
 * @description Gets fired whenever a client mutes his sound
 */
/**
 * @event clientUndeaf
 * @memberof Event
 * @version 0.9.18
 * @param {Client} client
 * @description Gets fired whenever a client unmutes his sound
 */
/**
 * @event channelCreate
 * @memberof Event
 * @param {Channel} channel - Channel that got created
 * @param {Client} invoker - Client that created the channel
 * @description Gets fired whenever a channel is created
 */
/**
 * @event channelUpdate
 * @memberof Event
 * @param {Channel} channel - Channel that got updated
 * @param {Client} invoker - Client that updated the channel
 * @description Gets fired whenever a channel is updated
 */
/**
 * @event channelDelete
 * @memberof Event
 * @param {Channel} channel - Channel that got deleted
 * @param {Client} invoker - Client that deleted the channel
 * @description Gets fired whenever a channel is deleted
 */
/**
 * @event talkerCount
 * @memberof Event
 * @param {number} number - Number of users that are currently talking in the channel
 * @description Gets fired whenever the number of users that are currently talking in the channel changes
 */
/**
 * @memberof Event
 * @event unload
 * @description Gets fired whenever the script is going to be unloaded or reloaded; use this to clean up or save stuff
 */
/**
 * @memberof Event
 * @event load
 * @description Gets fired when all scripts have been loaded
 */
/**
 * @event connect
 * @memberof Websockets
 * @param {string} id - ID of the new connection
 */
/**
 * @event close
 * @version 0.9.20
 * @memberof Websockets
 * @param {string} id - ID of the closed connection
 */
/**
 * @event error
 * @version 0.9.20
 * @memberof Websockets
 * @param {string} id - ID of the connection
 * @param {string} error - Error
 */
/**
 * @event data
 * @version 0.9.20
 * @memberof Websockets
 * @param {string} id - ID of the connection
 * @param {int} type - Type of the message
 * @param {Bytes} data - Data object
 */
