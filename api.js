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
    // SinusBot specific stuff
    /**
     * @returns {string} the current instances' unique identifier
     */
    getInstanceID: function() {},
    /**
     * @returns {string} the current bots' unique identifier
     */
    getBotID: function() {},
    /**
     * returns the name of the used backend (e.g. "ts3")
     * @returns {string} name of the backend
     */
    getBackend: function() {},
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
     * @param {number} level - the log level to set
     * @returns {Boolean}
     * 
     */
    setInstanceLogLevel: function(level) {},
    /**
     * @description
     * sets the log level of the bot
     * level | what gets logged
     * ---|---
     * 0 | no log messages
     * 1 | errors only
     * 2 | errors and warnings
     * 3 | errors, warnings, information
     * 4 | ...
     * 10 | most verbose
     * 11 | most verbose + external backends
     * @param {number} level - the log level to set
     * @returns {Boolean}
     */
    setBotLogLevel: function(level) {},
    /**
     * returns the log level of the instance
     * @returns {number} the set loglevel
     */
    getInstanceLogLevel: function() {},
    /**
     * returns the log level of the bot
     * @returns {number} the set loglevel
     */
    getBotLogLevel: function() {},
    /**
     * reloads all scripts; requires the corresponding setting in the config.ini to be enabled
     * @returns {Boolean}
     */
    reloadScripts: function() {},
    /**
     * returns the configured nickname - to get the actual nickname, use the backend module
     * @returns {string}
     */
    getNick: function() {},
    /**
     * sets the nick to a new value and updates it on the server
     * @param {string} nick - the new nick
     * @returns {Boolean}
     */
    setNick: function(nick) {},
    /**
     * sets the default channel by its ID
     * @param {string} channelID
     * @returns {Boolean}
     */
    setDefaultChannelID: function(channelID) {},
    /**
     * returns true if the backend of this instance has been started
     * @returns {Boolean}
     */
    isRunning: function() {},
    /**
     * sends a notification to all users that are currently using the webinterface; use this for startup errors
     * @param {string} message - the message to send
     */
    notify: function(message) {},
    /**
     * stores the given object as configuration for the current script
     * @param {Object} config
     * @returns {bool}
     */
    saveConfig: function() {},
    /**
     * logs to stdout / instance log
     * @param {any} log
     */
    log: function(log) {},
    /**
     * Exports an Object, so other Scripts are able to use functions or values of the Script
     * @param {object} obj - the object which should get exported
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
    export: function(obj) {}
};


/**
 * @mixin Store
 * @example
 * var store = require('store');
 * store.set('foo', 'bar');
 */
var Store = {
    /**
     * stores a variable under the given key
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     * @param {any} value - the value to be stored; must be JSON.stringify()-able
     * @returns {bool} 
     */
    set: function(key, value) {},
    /**
     * gets a variable that has been stored previously by set()
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     * @returns {any} the stored value - or undefined, if not found 
     */
    get: function(key) {},
    /**
     * deletes a stored variable by its key
     * the values stored are only available for the current script, but shared between instances of it
     * @param {string} key
     */
    unset: function(key) {},
    /**
     * returns an array of all set keys
     * the values stored are only available for the current script, but shared between instances of it
     * @returns {string[]} array of all stored keys
     */
    getKeys: function() {},
    /**
     * returns all stored items
     * the values stored are only available for the current script, but shared between instances of it
     * @returns {Object} keys of this object are the keys of each entry
     */
    getAll: function() {},
    /**
     * stores a variable under the given key
     * the values stored are available for every script of every instance
     * @param {string} key
     * @param {any} value - the value to be stored; must be JSON.stringify()-able
     * @returns {bool} 
     */
    setGlobal: function(key, value) {},
    /**
     * gets a variable that has been stored previously by set()
     * the values stored are available for every script of every instance
     * @param {string} key
     * @returns {any} the stored value - or undefined, if not found 
     */
    getGlobal: function(key) {},
    /**
     * deletes a stored variable by its key
     * the values stored are available for every script of every instance
     * @param {string} key
     */
    unsetGlobal: function(key) {},
    /**
     * returns an array of all set keys
     * the values stored are available for every script of every instance
     * @returns {string[]} array of all stored keys
     */
    getKeysGlobal: function() {},
    /**
     * returns all stored items
     * the values stored are available for every script of every instance
     * @returns {Object} keys of this object are the keys of each entry
     */
    getAllGlobal: function() {},
    /**
     * stores a variable under the given key
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     * @param {any} value - the value to be stored; must be JSON.stringify()-able
     * @returns {bool} 
     */
    setInstance: function(key, value) {},
    /**
     * gets a variable that has been stored previously by set()
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     * @returns {any} the stored value - or undefined, if not found 
     */
    getInstance: function(key) {},
    /**
     * deletes a stored variable by its key
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param {string} key
     */
    unsetInstance: function(key) {},
    /**
     * returns an array of all set keys
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns {string[]} array of all stored keys
     */
    getKeysInstance: function() {},
    /**
     * returns all stored items
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns {Object} keys of this object are the keys of each entry
     */
    getAllInstance: function() {},
}

/**
 * @mixin Backend
 */
var Backend = {
    /**
     * connect to the server
     * @returns {Boolean}
     */
    connect: function() {},
    /**
     * disconnect from the server
     * @returns {Boolean}
     */
    disconnect: function() {},
    /**
     * returns true if the backend is connected to a server
     * @returns {Boolean}
     */
    isConnected: function() {},
    /**
     * @returns {string} the current bots' unique identifier
     */
    getBotClientID: function() {},
    /**
     * @returns {Client} the client of the bot
     */
    getBotClient: function() {},
    /**
     * returns the actual nickname - to get the configured nickname, use the engine module
     * @returns {string}
     */
    getNick: function() {},
    /**
     * returns a channel, if found
     * @param {string} id
     * @returns {Channel}
     * @example
     * var backend = require('backend');
     * var channel = backend.getChannelByID('6');
     */
    getChannelByID: function(id) {},
    /**
     * returns the (primary) channel, the bot is in
     * @returns {Channel}
     * @example
     * var backend = require('backend');
     * var channel = backend.getCurrentChannel();
     */
    getCurrentChannel: function() {},
    /**
     * returns a channel, if found
     * @param {string} name
     * @returns {Channel}
     * @example
     * var backend = require('backend');
     * var channel = backend.getChannelByName('Welcome Channel');
     */
    getChannelByName: function(name) {},
    /**
     * returns the number of channels
     * @returns {number}
     * @example
     * var backend = require('backend');
     * var count = backend.getChannelCount();
     */
    getChannelCount: function() {},
    /**
     * returns all channels
     * @returns {Channel[]}
     * @example
     * // Logs the name of all channels
     * var backend = require('backend');
     * var engine = require('engine');
     * backend.getChannels().forEach(function(channel) {
     *     engine.log(channel.name);
     * });
     */
    getChannels: function() {},
    /**
     * returns all clients
     * @returns {Client[]}
     * @example
     * // Gets a list of all clients and sends them a message
     * var backend = require('backend');
     * var clients = backend.getClients();
     * clients.forEach(function(client) {
     *     client.chat('Hello ', + client.Name() + '. I\'m a SinusBot!');
     * });
     */
    getClients: function() {},
    /**
     * returns a client by its temporary ID (changes when the client reconnects)
     * @param {string} id
     * @returns {Client}
     */
    getClientByID: function(id) {},
    /**
     * returns a client by its name/nickname
     * @param {string} name
     * @returns {Client}
     */
    getClientByName: function(name) {},
    /**
     * alias of getClientByName
     * @param {string} name
     * @returns {Client}
     */
    getClientByNick: function(name) {},
    /**
     * returns an (online) client by its permanent id
     * @param {string} uniqueID
     * @returns {Client}
     */
    getClientByUniqueID: function(uniqueID) {},
    /**
     * alias of getClientByUniqueID
     * @param {string} uniqueID
     * @returns {Client}
     */
    getClientByUID: function(uniqueID) {},
    /**
     * sends a message to the server
     * @param {string} msg - the message to send
     * @example
     * backend.chat('Hello from SinusBot!');
     */
    chat: function(msg) {},
    /**
     * creates a new channel
     * @version 0.9.16.3
     * @param {ChannelParams} channelParams
     */
    createChannel: function(channelParams) {},
    /**
     * returns a servergroup by its ID
     * @param {number} id - The ServerGroup ID
     * @returns {ServerGroup}
     */
    getServerGroupByID: function(id) {},
    /**
     * returns a channelgroup by its ID
     * @param {number} id - The ServerGroup ID
     * @returns {ChannelGroup}
     */
    getChannelGroupByID: function(id) {}
};

/**
 * @mixin Media
 */
var Media = {
    /**
     * plays a try by internal url
     * @param {string} url - the internal url (like track://...)
     * @returns {Boolean}
     */
    playURL: function(url) {},
    /**
     * returns the current track
     * @returns {Track}
     */
    getCurrentTrack: function() {},
    /**
     * returns the track with the given ID (or null if none was found)
     * @returns {Track}
     */
    getTrackByID: function(id) {},
    /**
     * searches for tracks matching the search term, returns at most 20 entries
     * @param {string} searchString
     * @returns {Track[]}
     * @example
     * var event = require('event');
     * var media = require('media');
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
     *             ev.client.chat('Sorry, I could not find anything that matched your request.');
     *         }
     *     }
     * });
     */
    search: function(searchString) {},
    /**
     * adds the given url to the queue
     * @param {string} url
     * @returns {Boolean}
     */
    enqueue: function(url) {},
    /**
     * adds the given url as the first entry in the queue
     * @param {string} url
     * @returns {Boolean}
     */
    addNext: function(url) {},
    /**
     * plays the next track of the queue / playlist
     */
    playNext: function() {},
    /**
     * plays the next previous of the queue / playlist
     */
    playPrevious: function() {},
    /**
     * stops playback completely
     * @returns {Boolean}
     */
    stop: function() {},
    /**
     * returns all tracks of the queue
     * @returns {Track[]}
     */
    getQueue: function() {},
    /**
     * returns all playlists
     * @returns {Playlist[]}
     */
    getPlaylists: function() {},
    /**
     * returns the playlists with the given id
     * @returns {Playlist}
     */
    getPlaylistByID: function(id) {},
    /**
     * returns the currently active playlist
     * @returns {Playlist}
     */
    getActivePlaylist: function(id) {},
    /**
     * removes a track at the given position from the queue (0 being the first entry)
     * @param {number} index - of the track that should be removed from the queue (0 = first track, ...)
     * @returns {Boolean}
     */
    removeFromQueue: function(index) {},
    /**
     * removes all entries from the queue
     * @returns {Boolean}
     */
    clearQueue: function() {},
    /**
     * deactivates the current playlist (if set) so that playback won't continue inside that playlist
     * @returns {Boolean}
     */
    clearPlaylist: function() {},
    /**
     * stream a file via youtube-dl
     * @param {string} url - an url that youtube-dl understands
     */
    yt: function(url) {},
    /**
     * download a file via youtube-dl, optionally play it
     * @param {string} url - an url that youtube-dl understands
     * @param {Boolean} play - set to true to play after download
     */
    ytdl: function(url, play) {},
    /**
     * enqueue a stream via youtube-dl
     * @param {string} url - an url that youtube-dl understands
     */
    enqueueYt: function(url) {},
    /**
     * download a file via youtube-dl, then enqueue it
     * @param {string} url - an url that youtube-dl understands
     */
    enqueueYtdl: function(url) {},
}

/**
 * @mixin Audio
 */
var Audio = /** @lends Audio */{
    /**
     * applies an audiofilter to the audio output
     * @param {string} filter - a ffmpeg compatible filter string
     * @returns {Boolean}
     */
    setAudioFilter: function(filter) {},
    /**
     * enables or disables audio return channel; required for speech recognition engine / recording
     * @param {Boolean} enable
     * @returns {Boolean}
     */
    setAudioReturnChannel: function(enable) {},
    /**
     * starts recording to a file
     * @returns {Boolean}
     */
    startRecording: function() {},
    /**
     * stops recording to a file
     * @returns {Boolean}
     */
    stopRecording: function() {},
    /**
     * streams audio output to an icecast-server
     * @param {string} url - the endpoint to stream to
     * @param {string} username - the username used for authentication
     * @param {string} password - the corresponding password
     * @returns {Boolean}
     */
    streamToServer: function(url, username, password) {},
    /**
     * stops streaming started with streamToServer 
     * @returns {Boolean}
     */
    stopStream: function() {},
    /**
     * returns the state of repeat-mode
     * @returns {Boolean}
     */
    isRepeat: function() {},
    /**
     * sets the state of repeat-mode
     * @param {Boolean} val
     */
    setRepeat: function(val) {},
    /**
     * returns the state of shuffle-mode
     * @returns {Boolean}
     */
    isShuffle: function() {},
    /**
     * sets the state of shuffle-mode
     * @param {Boolean} val
     */
    setShuffle: function(val) {},
    /**
     * returns the current volume (0-100)
     * @returns {number}
     */
    getVolume: function() {},
    /**
     * sets the volume (0-100)
     * @param {number} volume
     * @returns {Boolean}
     */
    setVolume: function(volume) {},
    /**
     * returns the position of the current track
     */
    getTrackPosition: function() {},
    /**
     * seeks to a specific position (in seconds)
     * @param {number} pos - the new position (in seconds)
     */
    seek: function(pos) {},
    /**
     * returns if the audio output has been muted
     * @returns {Boolean}
     */
    isMute: function() {},
    /**
     * enables/disables mute
     * @param {Boolean} mute
     * @returns {Boolean}
     */
    setMute: function() {},
    /**
     * @returns {Boolean} true, if the bot is playing music
     */
    isPlaying: function() {},
    /**
     * play audio returned from the text-to-speech engine
     * @param {string} text - the text to say
     * @param {string} [locale] - the locale to use
     */
    say: function(text, locale) {},
}

/**
 * @mixin Format
 */
var Format = /** @lends Format */ {
    /**
     * returns a colored string if the backend supports it
     * @param {string} text - the text that should be colored
     * @param {string} color - the color to apply (in hex)
     * @returns {string} the colored string
     * @example
     * // Sends a red-colored message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('This is SinusBot writing in ' + format.formatColor('red', '#aa0000'));
     */
    color: function(text, color) {},
    /**
     * applied italic formatting to text
     * @param {string} text
     * @returns {string} the formatted string
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.italic('italic')); 
     */
    italic: function(text) {},
    /**
     * applied bold formatting to text
     * @param {string} text
     * @returns {string} the formatted string
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.bold('bold')); 
     */
    bold: function(text) {},
    /**
     * applied underlined formatting to text
     * @param {string} text
     * @returns {string} the formatted string
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.underline('underlined')); 
     */
    underline: function(text) {},
    /**
     * format text as code
     * @param {string} text
     * @returns {string} the formatted string
     */
    code: function(text) {}
}

// /**
//  * @mixin Net
//  * @description This module provides lower level network access. As this affects security heavily, it has to be enabled in the config.ini.
//  * @example
//  * var net = require('net');
//  */
// var Net = {
//     // SinusBot specific stuff
//     /**
//      * @param {ConnectOptions} options the options to use for the connection
//      * @param {function} connectCallback a callback that gets called if a connection succeeded or failed; in the latter case the callback will be called with one parameter, which is the error message 
//      * @returns {Connection} a tcp connection handler
//      */
//     connect: function(options, connectCallback) {},
// }

// /**
//  * @class
//  * @property {string} host the hostname of the server to connect to
//  * @property {number} port the portnumber of the server to connect to 
//  */
// function ConnectOptions() {}

// /**
//  * @class
//  */
// var Connection = {
//     /**
//      * Registers a new event handler
//      * @param {string} event the name of the event to listen to
//      * @param {function} callback
//      */
//     on: function(event, callback) {},
//     /**
//      * Sends data over the connection, optionally decoded
//      * @param {string} data the data to be sent
//      * @param {string} encoding - can be *hex* or *base64*
//      */
//     write: function(data, encoding) {}
// };

// /**
//  * @method Connection#data
//  * @param {Object} data a data object
//  */

// /**
//  * @method Connection#close
//  */

/**
 * @mixin Helpers
 */
var Helpers = /** @lends Helpers */ {
    /**
     * @param {object} input
     * @returns {string} the object interpreted as string
     */
    getRandom: function(max) {},
    /**
     * @param {int} max
     * @returns {int} random number
     */
    getRandom: function(max) {},
    /**
     * Gets the string representation of an object
     * @param {object} input
     * @returns {string}
     */
    toString: function(input) {},
    /**
     * Encodes a string to base64
     * @param {string} input
     * @returns {string}
     */
    base64Encode: function(input) {},
    /**
     * Decodes a string from base64
     * @param {string} input
     * @returns {string}
     */
    base64Decode: function(input) {},
    /**
     * Encodes a string to hex
     * @param {string} input
     * @returns {string}
     */
    hexEncode: function(input) {},
    /**
     * Decodes a string from hex
     * @param {string} input
     * @returns {string}
     */
    hexDecode: function(input) {},
    /**
     * Generate a hex-encoded MD5 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    MD5Sum: function(input) {},
    /**
     * Generate a hex-encoded SHA1 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    SHASum: function(input) {},
    /**
     * Generate a hex-encoded SHA256 checksum of the given input
     * @param {string} input
     * @returns {string}
     */
    SHA256Sum: function(input) {},
}


 /**
 * @mixin Event
 * @fires event#chat
 * @fires event#typing
 * @fires event#poke
 * @fires event#track
 * @fires event#trackInfo
 * @fires event#trackEnd
 * @fires event#connect
 * @fires event#connectionFailed
 * @fires event#disconnect
 * @fires event#clientMove
 * @fires event#clientVisible
 * @fires event#clientInvisible
 * @fires event#clientKicked
 * @fires event#clientKickedFromChannel
 * @fires event#serverGroupAdded
 * @fires event#serverGroupRemoved
 * @fires event#clientNick 
 * @fires event#api:$eventName
 * @fires event#clientIPAddress
 * @fires event#clientAway
 * @fires event#clientBack
 * @fires event#clientRecord
 * @fires event#clientRecordStop
 * @fires event#clientMute
 * @fires event#clientUnmute
 * @fires event#clientDeaf
 * @fires event#clientUndeaf
 * @fires event#channelCreate
 * @fires event#channelUpdate
 * @fires event#channelDelete
 * @fires event#talkerCount
 * @fires event#unload
 * @fires event#load
 * @example
 * var event = require('event');
 * var engine = require('engine');
 * event.on('chat', function(ev) {
 *     engine.log('Got message "'+ev.text +'" from '+ ev.client.name());
 * })
 */
var Event = /** @lends Event */ {
    /**
     * @param {string} event name to listen
     * @param {function} callback gets called when the given event gets triggered
     */
    on: function(event, callback) {}
};


/**
 * @class Client
 * Warning: if the client is inivisible to the bot, some fields might not be available
 */
function Client() {}
Client.prototype = /** @lends Client.prototype */ {
    /**
     * returns the name/nickname of the client
     * @returns {string}
     */
    name: function() {},
    /**
     * alias of name()
     * @returns {string}
     */
    nick: function() {},
    /**
     * @returns {string} phonetic name of the client; useful for tts
     */
    phoneticName: function() {},
    /**
     * returns the (temporary) ID of the client
     * @returns {string}
     */
    id: function() {},
    /**
     * alias of uniqueID
     * @returns {string}
     */
    uid: function() {},
    /**
     * returns the unique ID of the client
     * @returns {string}
     */
    uniqueID: function() {},
    /**
     * alias of databaseID
     * @returns {string}
     */
    databaseID: function() {},
    /**
     * @returns {string} country of the client
     */
    country: function() {},
    /**
     * @returns {string} description of the client
     */
    description: function() {},
    /**
     * @param {string} description
     * @version 0.9.19
     */
    setDescription: function(description) {},
    /**
     * @returns {number} number of times the client has connected
     */
    getTotalConnectionsCount: function() {},
    /**
     * @returns {number} timestamp in seconds? when the client has been seen the first time
     * @todo evaluate what exactly it returns
     */
    firstSeen: function() {},
    /**
     * returns true when this client is the bot itself
     */
    isSelf: function() {},
    /**
     * returns if the client is recording the conversation
     * @returns {string}
     */
    isRecording: function() {},
    /**
     * returns if the client is muted (has its microphone disabled)
     * @returns {Boolean}
     */
    isMuted: function() {},
    /**
     * returns if the client is deaf (has its loudspeakers disabled)
     * @returns {Boolean}
     */
    isDeaf: function() {},
    /**
     * returns if the client is away
     * @returns {Boolean}
     */
    isAway: function() {},
    /**
     * returns the clients' servergroups
     * @returns {ServerGroup[]}
     */
    getServerGroups: function() {},
    /**
     * returns the clients' channelgroups
     * @returns {ChannelGroup[]}
     */
    getChannelGroups: function() {},
    /**
     * returns the clients' away message (if set)
     * @returns {string}
     */
    getAwayMessage: function() {},
    /**
     * returns the clients' last ping time (latency)
     * @returns {number}
     */
    getPing: function() {},
    /**
     * returns the clients' ip address (if available)
     * @returns {string}
     */
    getIPAddress: function() {},
    /**
     * returns the clients' online time (requires special permissions)
     * @returns {number} in milliseconds
     */
    getOnlineTime: function() {},
    /**
     * returns the clients' current idle time (requires special permissions)
     * @returns {number} in milliseconds
     */
    getIdleTime: function() {},
    /**
     * returns the clients' packet loss percentage (requires special permissions)
     * @returns {number}
     */
    getPacketLoss: function() {},
    /**
     * returns the clients' amount of received data (requires special permissions)
     * @returns {number}
     */
    getBytesReceived: function() {},
    /**
     * returns the clients' amount of sent data (requires special permissions)
     * @returns {number}
     */
    getBytesSent: function() {},

    /**
     * returns the total number of connections from that client
     * On TS3, this information has to be actively requested from the server. If the bot is unable to get it or hasn't received an answer in time, it will return <= 0 here.
     * @returns {number}
     */
    getTotalConnections: function() {},

    /**
     * returns the time the client has been created / was first seen by the server
     * On TS3, this information has to be actively requested from the server. If the bot is unable to get it or hasn't received an answer in time, it will return <= 0 here.
     * @returns {number}
     */
    getCreationTime: function() {},

    /**
     * returns an array of all channels the client is in; even if TS only uses one channel for a client at a time, other backends might provide several
     * @returns {Channel[]} array of channels
     */
    getChannels: function() {},
    /**
     * @returns {Channel} the current audio channel the client is in
     */
    getAudioChannel: function() {},

    /**
     * compares two clients
     * @param {Client} otherClient
     * @returns {Boolean} true, if both clients are the same
     */
    equals: function(otherClient) {},
    /**
     * sends a message to the client
     * @param {string} msg - the message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.chat('Hello, ' + client.Name());
     */
    chat: function(msg) {},
    /**
     * sends a message to the client as poke
     * @param {string} msg - the message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.chat('Pokeypoke, ' + client.Name() + '!');
     */
    poke: function(msg) {},
    /**
     * bans a client
     * @param {number} time - amount of time the ban should last
     * @param {string} msg - the message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.ban(100, 'See you in 100 seconds, ' + client.Name() + '!');
     */
    ban: function(time, msg) {},
    /**
     * kicks the client from the server 
     * @param {string} msg - the message to send
     */
    kick: function(msg) {},
    /**
     * kicks the client from the server
     * @param {string} msg - the message to send
     */
    kickFromServer: function(msg) {},
    /**
     * kicks the client from the channel
     * @param {string} msg - the message to send
     */
    kickFromChannel: function(msg) {},
    /**
     * adds a client to a specific ServerGroup
     * @param {ServerGroup} group - the servergroup the client should be added to; also allowed is: serverGroupID as string / int
     */
    addToServerGroup: function(group) {},
    /**
     * removes a client from a specific ServerGroup
     * @param {ServerGroup} group - the servergroup the client should be removed from; also allowed is: serverGroupID as string / int
     */
    removeFromServerGroup: function(id) {},
    /**
     * moves a client to another channel
     * @param {Channel} target - the channel the client should be moved to
     * @param {string} [password] - password for the target channel, if required
     */
    moveTo: function(target, password) {},
    /**
     * enables / disables subscription for this client; requires subscription mode
     * @param {Boolean} val
     */
    setSubscription: function(val) {},
}

/**
 * @class Channel
 */
function Channel() {}
Channel.prototype = /** @lends Channel.prototype */ {
    /**
     * returns the ID of the channel
     * @returns {string}
     */
    id: function() {},
    /**
     * returns the name of the channel
     * @returns {string}
     */
    name: function() {},
    /**
     * returns the parent of this channel - if any.
     * @returns {Channel}
     */
    parent: function() {},
    /**
     * returns the order / position of this channel.
     * For ts3 this is a numeric value determining the order in which channels are displayed below their parent. To set a new value, please use moveTo.
     * @version 0.9.16.3
     * @returns {number}
     */
    position: function() {},
    /**
     * moves the channel to a new parent with a new position value
     * @version 0.9.16.3
     * @param {string/Channel} the new parent channel
     * @param {int} new order value
     */
    moveTo: function(parent, order) {},
    /**
     * @param {string} name
     * @version 0.9.16
     */
    setName: function(name) {},
    /**
     * @returns {int} the type of the channel (0 = voice, 1 = text...)
     */
    type: function() {},
    /**
     * returns the configured topic of the channel
     * @returns {string}
     */
    topic: function() {},
    /**
     * @param {string} topic
     * @version 0.9.16
     */
    setTopic: function(topic) {},
    /**
     * returns the description of the channel
     * @version 0.9.19
     * @returns {string}
     */
    description: function() {},
    /**
     * @param {string} description
     * @version 0.9.16
     */
    setDescription: function(description) {},
    /**
     * returns the configured codec
     * @returns {number}
     */
    codec: function() {},
    /**
     * @param {number} quality
     * @version 0.9.16
     */
    setCodec: function(codec) {},
    /**
     * returns the configured codec quality
     * @returns {number}
     */
    codecQuality: function() {},
    /**
     * @param {number} quality
     * @version 0.9.16
     */
    setCodecQuality: function(quality) {},
    /**
     * returns the configured number of clients the channel can hold (-1 if unlimited)
     * @returns {number}
     */
    maxClients: function() {},
    /**
     * @param {Boolean} maxClients - -1 = unlimited
     * @version 0.9.16
     */
    setMaxClients: function(maxClients) {},
    /**
     * returns whether the channel is permanent or not
     * @returns {Boolean}
     */
    isPermanent: function() {},
    /**
     * @param {Boolean} permanent
     * @version 0.9.16
     */
    setPermanent: function(permanent) {},
    /**
     * returns whether the channel is semi-permanent or not
     * @returns {Boolean}
     */
    isSemiPermanent: function() {},
    /**
     * @param {Boolean} permanent
     * @version 0.9.16
     */
    setSemiPermanent: function(permanent) {},
    /**
     * returns whether the channel is the default one (all clients join on start)
     * @returns {Boolean}
     */
    isDefault: function() {},
    /**
     * returns whether the channel is password-protected or not
     * @returns {Boolean}
     */
    isPassworded: function() {},
    /**
     * returns whether the channel is encrypted or not
     * @returns {Boolean}
     */
    isEncrypted: function() {},
    /**
     * @param {Boolean} encrypted
     * @version 0.9.16
     */
    setEncrypted: function(encrypted) {},
    /**
     * compares two channels
     * @param {Channel} otherChannel
     * @returns {Boolean} true, if both channels are the same
     */
    equals: function(otherChannel) {},
    /**
     * sends a chat message to the channel
     * @param {string} msg - the message to send
     */
    chat: function(msg) {},
    /**
     * @returns {Client[]} the clients that are in this channel
     */
    getClients: function() {},
    /**
     * @returns {number} the number of clients that are in the channel 
     */
    getClientCount: function() {},
    /**
     * enables / disables subscription for this channel; requires subscription mode
     * @param {Boolean} val
     */
    setSubscription: function(val) {},
    /**
     * convenience function to update many fields at once
     * @version 0.9.16.3
     * @param {ChannelParams} channelParams
     */
    update: function(channelParams) {},
    /**
     * @version 0.9.18
     * @param {Client} client
     * @param {ChannelGroup} channelGroup
     */
    setChannelGroup: function(client, channelGroup) {}
}

/**
 * @class ServerGroup
 */
function ServerGroup() {}
ServerGroup.prototype = /** @lends ServerGroup.prototype */ {
    /**
     * returns the id of the servergroup
     * @returns {string}
     */
    id: function() {},
    /**
     * returns the name of the servergroup
     * @returns {string}
     */
    name: function() {},
}

/**
 * @class ChannelGroup
 */
function ChannelGroup() {}
ChannelGroup.prototype = /** @lends ChannelGroup.prototype */ {
    /**
     * returns the id of the channelgroup
     * @returns {string}
     */
    id: function() {},
    /**
     * returns the name of the channelgroup
     * @returns {string}
     */
    name: function() {},
}


/**
 * @class Track
 */
function Track() {}
Track.prototype = /** @lends Track.prototype */ {
    /**
     * returns the unique ID of the track
     * @returns {string}
     */
    id: function() {},
    /**
     * @returns {string} a unique url for the track
     */
    url: function() {},
    /**
     * @returns {string} type of the file
     */
    type: function() {},
    /**
     * @returns {string} title of the track
     */
    title: function() {},
    /**
     * @returns {string} artist of the track
     */
    artist: function() {},
    /**
     * @returns {string} temporary title of the track; e.g. when playing radio stations
     */
    tempTitle: function() {},
    /**
     * @returns {string} temporary artist of the track; e.g. when playing radio stations
     */
    tempArtist: function() {},
    /**
     * @returns {string} album of the track
     */
    album: function() {},
    /**
     * @returns {string} genre of the track
     * @version 0.9.16
     */
    genre: function() {},
    /**
     * @returns {number} duration of the track
     * @version 0.9.16
     */
    duration: function() {},
    /**
     * @returns {int} tracknumber of the track
     * @version 0.9.16
     */
    trackNumber: function() {},
    /**
     * @returns {string} path to the thumbnail, if any
     */
    thumbnail: function() {},
    /**
     * @returns {string} the original filename
     */
    filename: function() {},
    /**
     * starts playback of the track
     * @returns {Boolean}
     */
    play: function() {},
    /**
     * adds the track to the queue
     * @returns {Boolean}
     */
    enqueue: function() {},
    // /**
    //  * adds the track as the first entry in the queue
    //  * @returns {Boolean}
    //  */
    // playNext: function() {},
    /**
     * downloads a thumbnail from the internet and stores it for the given track
     * @param {string} url - the url to download the thumbnail from (limited to X MB)
     */
    setThumbnailFromURL: function(url) {},
    /**
     * removes the thumbnail of a track
     */
    removeThumbnail: function() {}
}

/**
 * @class Playlist
 */
function Playlist() {}

Playlist.prototype = /** @lends Playlist.prototype */ {
    /**
     * @returns {string} the unique identifier of the playlist
     */
    id: function() {},
    /**
     * @returns {string} the name of the playlist
     */
    name: function() {},
    /**
     * @returns {PlaylistTrack[]} a list of all tracks inside the given playlist
     */
    getTracks: function() {},
    /**
     * sets the playlist to active; will continue playing songs from this playlist
     * @returns {Boolean}
     */
    setActive: function() {},
}

/**
 * @class PlaylistTrack
 */
function PlaylistTrack() {}
PlaylistTrack.prototype = /** @lends PlaylistTrack.prototype */ {
    /**
     * @returns {string} title of the track
     */
    title: function() {},
    /**
     * @returns {string} artist of the track
     */
    artist: function() {},
    /**
     * @returns {string} album of the track
     */
    album: function() {},
    /**
     * @returns {string} url of the track (internal or external)
     */
    url: function() {},
    /**
     * starts playback of the track
     * @returns {Boolean}
     */
    play: function() {},
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
     * @param {ConnectParams} params - connection parameters
     * @param {function} callback - the callback gets called on success / error; if an error occured, exactly one parameter containing the error will be handed to the callback
     * @returns {NetClient} client connection, or null if failed to setup a connection (e.g. wrong parameters; null does not mean that the connection failed, instead that is handled in the callback)
     */
    connect: function(params, callback) {},
};

/**
 * @class
 * @property {string} [host] - the host to connect to, required for mysql / postgres
 * @property {number} [port] - the port to use
 */
function ConnectParams() {}

/**
 * @class NetClient
 * @version 0.9.16
 * @fires NetClient#error
 * @fires NetClient#close
 * @fires NetClient#data
 */
function NetClient() {}
NetClient.prototype = /** @lends NetClient.prototype */ {
    /**
     * @description
     * send some data over the connection
     * @param {string} bytes - the data that should be sent over the socket; one can also send an array of ints / bytes like [0, 255, 1, 1]
     * @param {string} format - (optional) - "hex" / "base64"; if given, bytes will be decoded prior to sending
     */
    write: function(bytes, format) {},
    /**
     * Registers a new event handler
     * @param {string} event - the name of the event to listen to
     * @param {function} callback
     */
    on: function(event, callback) {},
};

/**
 * @event NetClient#data
 * @memberof NetClient
 * @param {Bytes}
 */
/**
 * @event NetClient#close
 * @memberof NetClient
 */
/**
 * @event NetClient#error
 * @memberof NetClient
 * @param {string} error
 */

/**
 * @mixin Websockets
 * @version 0.9.20
 * @fires Websockets#ws.connect
 * @fires Websockets#ws.close
 * @fires Websockets#ws.error
 * @fires Websockets#ws.data
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
function Websockets() {}
Websockets.prototype = /** @lends Websockets.prototype */ {
    /**
     * @description
     * send some data over the connection with give given connectionId
     * @param {string} connectionId
     * @param {int} messageType
     * @param {object} message - the actual message; can be given as string or byteshelper
     */
    write: function(connectionId, messageType, message) {},
    /**
     * @description
     * broadcasts some data to all connected clients
     * @param {int} messageType
     * @param {object} message - the actual message; can be given as string or byteshelper
     */
    broadcast: function(messageType, message) {},
    /**
     * @description
     * closes the given connection
     * @param {string} connectionId
     */
    close: function(connectionId) {},
};

/**
 * @class Bytes
 * @version 0.9.16
 */
function Bytes() {}
Bytes.prototype = /** @lends Bytes.prototype */ {
    /**
     * @description
     * use this, if you expect a result set
     * @returns {string} string representation of the bytes
     */
    toString: function() {},
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
 * if (dbc) dbc.exec("INSERT INTO blah (foo, foo2) VALUES (?)", 'bar', 'bar2');
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
     * @param {DBParams} params - connection parameters
     * @params {function} callback - the callback gets called on success / error; if an error occured, exactly one parameter containing the error will be handed to the callback
     * @returns {DBConn} database connection, or null if failed
     */
    connect: function(params, callback) {},
};

/**
 * @class DBConn
 * @version 0.9.16.4
 */
function DBConn() {}
DBConn.prototype = /** @lends DBConn.prototype */ {
    /**
     * @description
     * use this, if you expect a result set; note: strings will be returned as byte arrays to be binary safe; to convert to actual strings, please use helpers.toString(column)
     * @param {string} queryString
     * @param {any} parameter1 - zero or more parameters; e.g. for mysql, ? in the queryString will be replaced with these parameters
     * @param {any} parameter2
     * @param {callback} callback - the callback gets called after the query has finished; it gets called with two parameters, err and result - both are mutually exclusive. Result contains an array of rows, each containing an object with the column names as key.
     */
    query: function(queryString, parameter1, parameter2, callback) {},
    /**
     * @param {string} queryString
     * use this, if you don't expect a result
     * @param {any} [parameter1]
     * @param {any} [parameter2]
     */
    exec: function(queryString, parameter1, parameter2, callback) {},
};

/**
 * @class
 * @version 0.9.16
 * @property {string} driver - the database driver to use, currently sqlite3, mysql or postgres
 * @property {string} [host] - the database server to connect to, required for mysql / postgres
 * @property {string} [username]
 * @property {string} [password]
 * @property {number} [port]
 * @description
 * sqlite3 is currently in-memory only 
 */
function DBParams() {}


/**
 * @class
 * @property {string} text - the text of the message
 * @property {Channel} channel - the channel (if given) this message has been sent on
 * @property {Client} client - the sending client
 * @property {number} mode - a number representing the way this message has been sent
 * @description
 * This event gets triggered whenever a chat message has been received. This also counts for messages from the bot itself, so make sure to check. 
 * @example
 * var event = require('event');
 * event.on('chat', function(ev) {
 *     if (!ev.client.isSelf()) {
 *         ev.client.chat('Hi, ' + ev.client.name() + ', you just wrote: ' + ev.text);
 *     }
 * });
 */
function Message() {}

/**
 * @class
 * used to update / create a channel; on create, parent and name are mandatory for TS3, on update, parent will be ignored (use moveTo instead)
 * @property {string} name the displayname of the channel; mandatory on create
 * @property {Channel} parent - the parent channel of the newly created channel (you can also use the channelId as either string or int); ignored on update, mandatory on create
 * @property {string} description
 * @property {string} topic
 * @property {string} password
 * @property {number} codec - see codec types for explanation
 * @property {number} codecQuality
 * @property {Boolean} encrypted - defaults to true
 * @property {Boolean} permanent
 * @property {Boolean} semiPermanent
 * @property {number} position
 * @property {number} maxClients - set -1 for unlimited
 * @property {Boolean} default - will flag the channel as default channel 
 * @property {number} neededTalkPower - TS only 0.9.19+
 * @property {number} deleteDelay - TS only 0.9.19+
 * @property {number} icon - TS only 0.9.19+
 * @description
 * This event gets triggered whenever a chat message has been received. This also counts for messages from the bot itself, so make sure to check. 
 * @example
 * var event = require('event');
 * event.on('chat', function(ev) {
 *     if (!ev.client.isSelf()) {
 *         ev.client.chat('Hi, ' + ev.client.name() + ', you just wrote: ' + ev.text);
 *     }
 * });
 */
function ChannelParams() {}

/**
 * @class
 * @property {client} client - the client that has been added / removed
 * @property {client} invoker - the client that added client to the group
 * @property {serverGroup} serverGroup - the group
 */
function ClientServergroupEvent() {

}

/**
 * @class
 * @property {Channel} fromChannel - the old channel (or null if the client just got online / changed visibility)
 * @property {Channel} toChannel - the new channel (or null if the client just went offline / changed visibility)
 * @property {Client} client - the moving client
 * @property {Client} invoker - the client that invoked the move
 */
function MoveInfo() {}

/**
 * @event event#chat
 * @memberof Event
 * @param {Message} msg - a message
 */
/**
 * @event event#typing
 * @memberof Event
 * @param {Client} client - the client that started typing
 */
/**
 * @event event#poke
 * @memberof Event
 * @param {Message} msg - a message
 */
/**
 * fired, whenever a new track starts
 * @event event#track
 * @memberof Event
 * @param {Track} track - the track in question
 */
/**
 * fired, whenever a track changes its information (like radio stations)
 * @event event#trackInfo
 * @memberof Event
 * @param {Track} track - the track in question
 */
/**
 * fired, whenever a track has stopped playing
 * @event event#trackEnd
 * @memberof Event
 * @param {Track} track - the track in question
 * @param {string} callback - a callback string
 */
/**
 * fired, when a connection with the server has been established
 * @event event#connect
 * @memberof Event
 */
/**
 * fired, when a the client could not connect to the server
 * @event event#connectionFailed
 * @memberof Event
 * @param {string} reason
 */
/**
 * fired, when a connection with the server has been closed
 * @event event#disconnect
 * @memberof Event
 */
/**
 * fired, whenever a client moves
 * @event event#clientMove
 * @memberof Event
 * @param {MoveInfo} moveInfo
 */
/**
 * fired, whenever a client becomes visible
 * @event event#clientVisible
 * @memberof Event
 * @param {MoveInfo} moveInfo
 */
/**
 * fired, whenever a client becomes invisible
 * @event event#clientInvisible
 * @memberof Event
 * @param {MoveInfo} moveInfo
 */
/**
 * fired, whenever a client gets kicked (from the server)
 * @event event#clientKicked
 * @memberof Event
 * @param {MoveInfo} moveInfo
 */
/**
 * fired, whenever a client gets kicked from a channel
 * @event event#clientKickedFromChannel
 * @memberof Event
 * @param {MoveInfo} moveInfo
 */
/**
 * fired, whenever a client got added to a server group
 * @event event#serverGroupAdded
 * @memberof Event
 * @param {ClientServerGroupEvent} event
 */
/**
 * fired, whenever a client got removed from a server group
 * @event event#serverGroupRemoved
 * @memberof Event
 * @param {ClientServerGroupEvent} event
 */
/**
 * @event event#clientNick
 * @memberof Event
 * @param {Client}
 * @param {string} oldNick
 */

 /**
 * @class
 */
function APIEvent() {}

APIEvent.prototype = /** @lends APIEvent.prototype */ {
    /**
     * returns the name of the event
     * @returns {string}
     */
    name: function() {},
    /**
     * returns the json body
     * @returns {Object}
     */
    data: function() {},
    /**
     * returns the user that called the event (or null, if unset)
     * @returns {User}
     */
    user: function() {},
    /**
     * returns the remote address, that triggered the call
     * @returns {string}
     */
    remoteAddr: function() {},
}

/**
 * @event event#api:$eventName
 * @memberof Event
 * @param {APIEvent}
 */
/**
 * emitted, whenever the clients' IP address changes or has initially been fetched
 * @event event#clientIPAddress
 * @memberof Event
 * @param {Client}
 */
/**
 * @event event#clientAway
 * @memberof Event
 * @param {Client}
 */
/**
 * @event event#clientBack
 * @memberof Event
 * @param {Client}
 */
/**
 * @event event#clientRecord
 * @memberof Event
 * @param {Client}
 */
/**
 * @event event#clientRecordStop
 * @memberof Event
 * @param {Client}
 */
/**
 * @event event#clientMute
 * @memberof Event
 * @param {Client}
 */
/**
 * @event event#clientUnmute
 * @memberof Event
 * @param {Client}
 */
/**
 * @event event#clientDeaf
 * @memberof Event
 * @version 0.9.18
 * @param {Client}
 */
/**
 * @event event#clientUndeaf
 * @memberof Event
 * @version 0.9.18
 * @param {Client}
 */
/**
 * @event event#channelCreate
 * @memberof Event
 * @param {Channel}
 * @param {Client} invoker
 */
/**
 * @event event#channelUpdate
 * @memberof Event
 * @param {Channel}
 * @param {Client} invoker
 */
/**
 * @event event#channelDelete
 * @memberof Event
 * @param {Channel}
 * @param {Client} invoker
 */
/**
 * @event event#talkerCount
 * @memberof Event
 * @param {number} number - number of users that are currently talking in the channel
 */
/**
 * gets called whenever a script is going to be unloaded / reloaded; use this to clean up or save stuff
 * @memberof Event
 * @event event#unload
 */
/**
 * gets fired when all scripts have been loaded
 * @memberof Event
 * @event event#load
 */
/**
 * @event websockets#ws.connect
 * @memberof Websockets
 * @param {string} id of the new connection
 */
/**
 * @event websockets#ws.close
 * @version 0.9.20
 * @memberof Websockets
 * @param {string} id of the closed connection
 */
/**
 * @event websockets#ws.error
 * @version 0.9.20
 * @memberof Websockets
 * @param {string} id of the connection
 * @param {string} error string
 */
/**
 * @event websockets#ws.data
 * @version 0.9.20
 * @memberof Websockets
 * @param {string} id of the connection
 * @param {int} type of the message
 * @param {Bytes} data a data object
 */
