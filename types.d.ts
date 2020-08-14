declare module "audio" {
    /**
     * Applies a [ffmpeg filter](https://ffmpeg.org/ffmpeg-filters.html) to the audio output.
     *
     * Warning: This method is curretly **not safe to use** and **leads to crashes**!
     * @param filter - ffmpeg compatible filter string
     * @returns success
     */
    function setAudioFilter(filter: string): boolean;
    /**
     * Enables or disables audio return channel; required for speech recognition engine / recording
     * @param flags - bitmask; use 0x01 for general audio return (recording) or 0x02 for separated audio (for speech recognition) - 0x03 for both
     */
    function setAudioReturnChannel(flags: number): boolean;
    function getAudioReturnChannel(): number;
    /**
     * Starts recording to a file
     */
    function startRecording(): boolean;
    /**
     * Stops recording to a file
     */
    function stopRecording(): boolean;
    /**
     * Streams audio output to an icecast-server
     * @param url - Endpoint to stream to
     * @param username - Username used for authentication
     * @param password - Password
     */
    function streamToServer(url: string, username: string, password: string): boolean;
    /**
     * Stops streaming started with streamToServer
     */
    function stopStream(): boolean;
    /**
     * Returns the state of repeat-mode
     */
    function isRepeat(): boolean;
    /**
     * Sets the state of repeat-mode
     */
    function setRepeat(val: boolean): void;
    /**
     * Returns the state of shuffle-mode
     */
    function isShuffle(): boolean;
    /**
     * Sets the state of shuffle-mode
     */
    function setShuffle(val: boolean): void;
    /**
     * Returns the current volume (0-100)
     * @returns volume
     */
    function getVolume(): number;
    /**
     * Sets the volume (0-100)
     */
    function setVolume(volume: number): boolean;
    /**
     * Returns the position of the current track
     * @returns position (in seconds)
     */
    function getTrackPosition(): number;
    /**
     * Seeks to a specific position
     * @param pos - New position (in seconds)
     */
    function seek(pos: number): void;
    /**
     * Returns if the audio output has been muted
     */
    function isMute(): boolean;
    /**
     * Enables/disables mute
     */
    function setMute(mute: boolean): boolean;
    /**
     * @returns Whether the bot is playing music
     */
    function isPlaying(): boolean;
    /**
     * Plays audio returned from the text-to-speech engine
     * @param text - Text to say
     * @param [locale] - Locale to use
     */
    function say(text: string, locale?: string): void;
    /**
     * Sets the volume of a specific stream (0-100)
     * @param streamID - name or alias of the stream(s) to modify
     */
    function setStreamVolume(streamID: string, volume: number): boolean;
    /**
     * Sets the TTS URL
     * @param url - TTS URL
     */
    function setTTSURL(url: string): boolean;
    /**
     * Sets the TTS default locale
     * @param locale - Locale
     */
    function setTTSDefaultLocale(locale: string): boolean;
}

declare module "backend" {
    /**
     * Connects to the server
     */
    function connect(): boolean;
    /**
     * Disconnects from the server
     */
    function disconnect(): boolean;
    /**
     * Returns true if the backend is connected to a server
     */
    function isConnected(): boolean;
    /**
     * @returns Current bots' unique identifier
     */
    function getBotClientID(): string;
    /**
     * @returns Client of the bot
     */
    function getBotClient(): Client;
    /**
     * Returns the actual nickname; To get the configured nickname, use engine.getNick() instead.
     */
    function getNick(): string;
    /**
     * Returns a channel if found
     * @example
     * var backend = require('backend');
     * var channel = backend.getChannelByID('6');
     */
    function getChannelByID(id: string): Channel;
    /**
     * Returns the (primary) channel the bot is in
     * @example
     * var backend = require('backend');
     * var channel = backend.getCurrentChannel();
     */
    function getCurrentChannel(): Channel;
    /**
     * Returns the matching channel if found
     * @example
     * var backend = require('backend');
     * var channel = backend.getChannelByName('Welcome Channel');
     */
    function getChannelByName(name: string): Channel;
    /**
     * Returns an array of channels matching the name
     * @example
     * var backend = require('backend');
     * var channels = backend.getChannelsByName('foobar');
     */
    function getChannelsByName(name: string): Channel[];
    /**
     * Returns the total number of channels
     * @example
     * var backend = require('backend');
     * var count = backend.getChannelCount();
     */
    function getChannelCount(): number;
    /**
     * Returns all channels
     * @example
     * // Logs the name of all channels
     *
     * var backend = require('backend');
     * var engine = require('engine');
     * var channels = backend.getChannels();
     *
     * channels.forEach(function(channel) {
     *     engine.log(channel.name());
     * });
     */
    function getChannels(): Channel[];
    /**
     * Returns all clients
     * @example
     * // Gets a list of all clients and sends them a message
     *
     * var backend = require('backend');
     * var clients = backend.getClients();
     *
     * clients.forEach(function(client) {
     *     client.chat('Hello ', + client.name() + '. I\'m a SinusBot!');
     * });
     */
    function getClients(): Client[];
    /**
     * Returns a client by its temporary ID (changes when the client reconnects)
     */
    function getClientByID(id: string): Client;
    /**
     * Returns a client by its name/nickname
     */
    function getClientByName(name: string): Client;
    /**
     * Alias of getClientByName
     */
    function getClientByNick(name: string): Client;
    /**
     * Returns an (online) client by its permanent id
     */
    function getClientByUniqueID(uniqueID: string): Client;
    /**
     * Alias of getClientByUniqueID
     */
    function getClientByUID(uniqueID: string): Client;
    /**
     * Sends a message to the server
     * @example
     * var backend = require('backend');
     * backend.chat('Hello from SinusBot!');
     * @param msg - Message to send
     */
    function chat(msg: string): void;
    /**
     * Creates a new channel
     * @returns - Channel which was created
     */
    function createChannel(channelParams: ChannelParams): Channel;
    /**
     * Returns a servergroup by its ID
     * @param id - ServerGroup ID
     */
    function getServerGroupByID(id: string): ServerGroup;
    /**
     * Returns a channelgroup by its ID
     * @param id - ChannelGroup ID
     */
    function getChannelGroupByID(id: string): ChannelGroup;
    /**
     * Returns an array of all known server groups
     */
    function getServerGroups(): ServerGroup[];
    /**
     * Returns an array of all known channel groups
     */
    function getChannelGroups(): ChannelGroup[];
    /**
     * Returns the specific functions for Discord or TeamSpeak3
     */
    function extended(): Extended;
    /**
     * Set the bot client as away on TeamSpeak.
     * @returns success
     */
    function setAway(away: boolean, reason: string): boolean;
    /**
     * Either {@link ExtendedDiscord} or {@link ExtendedTS3}
     */
    interface Extended extends ExtendedDiscord, ExtendedTS3 {
    }
}

declare module "crypto" {
    /**
     * Generates a new {@link CryptoKeypair}.
     * @returns New {@link CryptoKeypair}.
     */
    function generateKeypair(): CryptoKeypair;
    /**
     * Loads a keypair from bytes and returns it as a {@link CryptoKeypair}.
     * @param keypair - Keypair bytes.
     */
    function loadKeypair(keypair: BytesWriter): CryptoKeypair;
    /**
     * @param secret - Secret
     * @param message - Message
     * @returns Encrypted message
     */
    function seal(secret: BytesWriter, message: BytesWriter): BytesWriter;
    /**
     * @param secret - Secret
     * @param message - Message
     * @returns Decrypted message
     */
    function open(secret: BytesWriter, message: BytesWriter): BytesWriter;
    /**
     * @param password - The master password from which a derived key is generated.
     * @param salt - Salt.
     * @param iterations - Number of iterations.
     * @param keylength - Desired bit-length of the derived key.
     * @returns Keypair bytes
     */
    function pbkdf2(hname: string, password: BytesWriter, salt: BytesWriter, iterations: number, keylength: number): BytesWriter;
    /**
     * Returns a given number of random bytes.
     * @param number - Number of random bytes to return
     * @returns Random bytes
     */
    function randomBytes(number: number): BytesWriter;
}

declare interface DBConn {
    /**
     * Use this, if you expect a result set;
     * Note: strings will be returned as byte arrays to be binary safe; to convert to actual strings, please use helpers.toString(column)
     * @param [parameters] - Zero or more parameters; e.g. for mysql, ? in the queryString will be replaced with these parameters
     * @param callback - Callback is called after the query has finished.
     */
    query(queryString: string, parameters?: any, callback: dbQueryCallback): void;
    /**
     * Use this insted of query if you don't expect a result
     * @param [parameters] - Zero or more parameters; e.g. for mysql, ? in the queryString will be replaced with these parameters
     */
    exec(queryString: string, parameters?: any, callback?: dbQueryCallback): void;
}

/**
 * Gets called with two parameters, err and result - both are mutually exclusive.
 * Result contains an array of rows, each containing an object with the column names as key.
 */
declare type dbQueryCallback = (error?: string, result?: object[]) => void;

/**
 * @property driver - Database driver to use, sqlite3 (default; currently in-memory only), mysql or postgres
 * @property [host] - Database server to connect to, required for mysql / postgres
 */
declare type DBParams = {
    driver: string;
    host?: string;
    username?: string;
    password?: string;
    port?: number;
};

/**
 * If an error occured, exactly one parameter containing the error will be handed to the callback
 */
declare type dbConnectCallback = (error?: string) => void;

/**
 * This module is protected. This means that you need to add `'db'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 *
 * Use additional parameters to exec / query whenever you use untrusted/unknown data, as those will automatically be escaped and avoid SQL injection.
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
 */
declare module "db" {
    /**
     * @param params - Connection parameters
     * @param callback - Callback gets called on success / error;
     * If an error occured, exactly one parameter containing the error will be handed to the callback
     * @returns Database connection or null if failed
     */
    function connect(params: DBParams, callback: dbConnectCallback): DBConn;
}

/**
 * @example
 * const engine = require('engine');
 * engine.log('Hello from a script!');
 */
declare module "engine" {
    /**
     * @returns Current instances' unique identifier
     */
    function getInstanceID(): string;
    /**
     * @returns Current bots' unique identifier
     */
    function getBotID(): string;
    /**
     * Returns the name of the used backend (e.g. "ts3" or "discord")
     * @returns Backend
     */
    function getBackend(): string;
    /**
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
     * @param level - Log level to set
     */
    function setInstanceLogLevel(level: number): boolean;
    /**
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
     * @param level - Log level to set
     */
    function setBotLogLevel(level: number): boolean;
    /**
     * Returns the log level of the instance
     * @returns The set loglevel
     */
    function getInstanceLogLevel(): number;
    /**
     * Returns the log level of the bot
     * @returns The set loglevel
     */
    function getBotLogLevel(): number;
    /**
     * Reloads all scripts; requires the corresponding setting in the config.ini to be enabled
     */
    function reloadScripts(): boolean;
    /**
     * Returns the configured nickname - to get the actual nickname, use the backend module
     */
    function getNick(): string;
    /**
     * Sets the nick to a new value and updates it on the server
     * @param nick - New nick
     */
    function setNick(nick: string): boolean;
    /**
     * Gets the default channel ID
     */
    function getDefaultChannelID(): string;
    /**
     * Sets the default channel by its ID
     */
    function setDefaultChannelID(channelID: string): boolean;
    /**
     * Returns true if the backend of this instance has been started
     */
    function isRunning(): boolean;
    /**
     * Sends a notification to all users that are currently using the webinterface; use this for startup errors
     * @param message - Message to send
     */
    function notify(message: string): void;
    /**
     * Stores the given object as configuration for the current script
     */
    function saveConfig(config: any): boolean;
    /**
     * Logs to stdout / instance log.
     *
     * Note:
     * - For some classes this may print `{}` because the values are returned by functions and not stored as properties.
     * - In recent versions numbers and some other types may be logged as `<nil>`.
     * To get the actual value in the log you need to convert it to a string first.
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
    function log(...something: any[]): void;
    /**
     * @param format - Format
     */
    function logf(format: string, ...something: any[]): void;
    /**
     * Exports an object, so other Scripts are able to use functions or values of the Script
     *
     * **Note:** Since SinusBot v1.0.0 you can now use the standard `module.exports = {...};` instead, as shown below.
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
     * @param obj - object which should get exported
     */
    function export(obj: any): void;
    /**
     * removes the current avatar image
     */
    function removeAvatar(): boolean;
    /**
     * sets the avatar image to the album art of a given track
     * @param track - Track to extract the album art from
     */
    function setAvatarFromTrack(track: Track): boolean;
    /**
     * sets the avatar image to the manually uploaded image
     */
    function setDefaultAvatar(): boolean;
    /**
     * sets the avatar to the rendered output of a banner template
     * @param bannerName - banner template to use
     */
    function setAvatarFromBanner(bannerName: string): boolean;
    /**
     * sets the avatar to the given image as URL
     * @param url - image url
     */
    function setAvatarFromURL(url: string): boolean;
    /**
     * Gets the users of the SinusBot
     */
    function getUsers(): User[];
    /**
     * Gets a SinusBot user by his ID
     * @param id - ID of the SinusBot user
     */
    function getUserById(id: string): User;
    /**
     * Gets a Sinusbot user by his name.
     * @param name - Name of the user
     */
    function getUserByName(name: string): User;
    /**
     * Adds a user.
     * @returns User or undefined if a user with the same name already exists
     */
    function addUser(username: string): User;
    /**
     * Sets the command prefix.
     * @param prefix - Command prefix
     */
    function setCommandPrefix(prefix: string): void;
    /**
     * Gets the command prefix.
     * @returns Command prefix
     */
    function getCommandPrefix(): string;
    /**
     * Returns the SinusBot version.
     * @returns SinusBot version, for example: `1.0.0-alpha.7-a20212b`
     */
    function version(): string;
    /**
     * @returns OS (Operating-System, e.g. "linux")
     */
    function os(): string;
    /**
     * Disables the register command
     */
    function disableRegistration(): void;
    /**
     * Enables the register command
     */
    function enableRegistration(): void;
    /**
     * Returns whether registration is enabled
     * @returns true if registration is enabled
     */
    function registrationEnabled(): boolean;
    function isSubscriptionMode(): boolean;
    function getChannelSubscriptions(): Channel[];
    function getClientSubscriptions(): Client[];
    /**
     * @param bool - `true` to enable subscription-mode, `false` to disable it.
     */
    function setSubscriptionMode(bool: boolean): void;
    /**
     * @returns wether ignore commands on specific chat has been set
     */
    function getIgnoreCommandsFromServerChat(): boolean;
    /**
     * the value of the checkbox from instance settings "ignore commands via channel-chat"
     * @returns wether ignore setting has been set or not
     */
    function getIgnoreCommandsFromChannelChat(): boolean;
    /**
     * the value of the checkbox from instance settings "ignore commands via private message"
     * @returns wether ignore setting has been set or not
     */
    function getIgnoreCommandsFromPrivateChat(): boolean;
    /**
     * set the value of the checkbox from instance settings "ignore commands via server-chat"
     * @param bool - reset/set specific setting
     */
    function setIgnoreCommandsFromServerChat(bool: boolean): void;
    /**
     * set the value of the checkbox from instance settings "ignore commands via channel-chat"
     * @param bool - reset/set specific setting
     */
    function setIgnoreCommandsFromChannelChat(bool: boolean): void;
    /**
     * set the value of the checkbox from instance settings "ignore commands via private message"
     * @param bool - reset/set specific setting
     */
    function setIgnoreCommandsFromPrivateChat(bool: boolean): void;
}

/**
 * @example
 * var event = require('event');
 * var engine = require('engine');
 *
 * event.on('chat', function(ev) {
 *     engine.log('Got message "'+ev.text +'" from '+ ev.client.name());
 * })
 */
declare module "event" {
    /**
     * Registers an event listener
     * @param eventName - Event to listen to
     * @param callback - Gets called when the given event is triggered
     */
    function on(eventName: string, callback: (...params: any[]) => any): void;
    /**
     * Emits an event to the current instance
     * @param eventName - Name of the event to be emitted
     * @param data - A data object to be sent with the event
     */
    function emit(eventName: string, data: any): void;
    /**
     * Emits an event to all instances
     * @param eventName - Name of the event to be emitted
     * @param data - A data object to be sent with the event
     */
    function broadcast(eventName: string, data: any): void;
}

declare module "format" {
    /**
     * Apply color if the backend supports it
     * @example
     * // Sends a red-colored message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('This is SinusBot writing in ' + format.color('red', '#aa0000'));
     * @param text - Text that should be colored
     * @param color - Hex value of color to apply
     * @returns Formatted string
     */
    function color(text: string, color: string): string;
    /**
     * Apply italic formatting to text
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.italic('italic'));
     * @returns Formatted string
     */
    function italic(text: string): string;
    /**
     * Apply bold formatting to text
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.bold('bold'));
     * @returns Formatted string
     */
    function bold(text: string): string;
    /**
     * Apply underlined formatting to text
     * @example
     * // Sends a formatted message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.underline('underlined'));
     * @returns Formatted string
     */
    function underline(text: string): string;
    /**
     * Formats text as code
     * @returns Formatted string
     */
    function code(text: string): string;
}

declare interface FileInfo {
    /**
     * @returns Base name of the file
     */
    name(): string;
    /**
     * @returns Length in bytes for regular files; system-dependent for others
     */
    size(): string;
    /**
     * @returns [UNIX file permission mode](https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation)
     */
    mode(): number;
    /**
     * @returns Modification time
     */
    modTime(): Date;
    /**
     * @returns Returns if the file is a directory
     */
    isDir(): boolean;
}

/**
 * This module is protected. This means that you need to add `'fs'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 */
declare module "fs" {
    /**
     * Checks if a file exists
     * @param path - Path to the file (for example `/var/www/html/foo.txt`)
     */
    function exists(path: string): boolean;
    /**
     * Reads the content of a file
     * @param path - Path to the file
     */
    function readFile(path: string): Bytes;
    /**
     * Writes data to a file
     * @param path - Path to the file
     * @param data - Data as Bytes, e.g. created by `helpers.bytesFromString()` or similar functions
     * @param mode - [UNIX file permission mode](https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation), i.e. `0644` (for `-rw-r--r--`)
     * @returns success
     */
    function writeFile(path: string, data: BytesWriter, mode: number): boolean;
    /**
     * Returns information about a file
     * @param path - Path to the file
     * @returns FileInfo
     */
    function stat(path: string): FileInfo;
    /**
     * Returns information about all files in a dirictory
     * @param path - Path to the directory
     * @returns Array of FileInfo
     */
    function readDir(path: string): FileInfo[];
    /**
     * Deletes a file or directory
     * @param path - Path to the file or directory
     * @returns success
     */
    function remove(path: string): boolean;
    /**
     * Creates a directory
     * @param path - Path of the directory
     * @returns success
     */
    function mkDir(path: string): boolean;
    /**
     * Creates every missing directory in a path
     * @param path - Path of the directory
     * @returns success
     */
    function mkDirAll(path: string): boolean;
    /**
     * Deletes a file or directory
     * @param path - Path to the file or directory
     * @param newPath - New path to the file or directory
     * @returns success
     */
    function rename(path: string, newPath: string): boolean;
}

/**
 * @property name - Short name of your script
 * @property author - Your name and your email address in the form of: `your name <your-email@example.com>`
 * @property description - A longer description - tell the user what exactly your script does
 * @property version - Start with something like 1.0 and increase it with every release
 * @property [autorun] - Set to true, if you want the script to be run on every instance, without the option to disable it.
 * @property [backends] - Per default scripts will only be available on TS3 instances.
 * If your script supports Discord (or in the future maybe other backends) as well, you have to specify this explicitly by setting this variable to an array containing all backends: `backends: ["ts3", "discord"]`
 * @property [enableWeb] - If your script required own web content, you can set enableWeb to true and put files into the ./scripts/scriptname/html directory.
 * After restart, the script title will be clickable and lead to an index.html inside that html-directory you just created.
 *
 * From there you have access to the localStorage variables containing the login and may communicate with the bot api from your own pages.
 * @property [engine] - Sets the required engine version (bot version). This uses [Semantic Versioning](https://semver.org). Example: `engine: ">= 0.9.16"`
 * @property [hidden] - Hides the script from the settings page. Should be used together with autorun.
 *
 * Hidden scripts can not have variables (vars), since they'd never be shown and thus not configurable.
 * @property [requiredModules] - An array of protected modules (i.e. 'http' or 'db') that the script requires.
 * @property [vars] - More information about the usage of variables can be found [here](https://sinusbot.github.io/docs/scripts/#vars-array).
 * @property [voiceCommands] - This parameter is only used for the speech recognition feature and may contain one or more strings that are to be detected for the given script.
 * You can find more details on how to use it here: [Speech Recognition](https://sinusbot.github.io/docs/speechrecognition/)
 */
declare type Manifest = {
    name: string;
    author: string;
    description: string;
    version: string;
    autorun?: boolean;
    backends?: string[];
    enableWeb?: boolean;
    engine?: string;
    hidden?: boolean;
    requiredModules?: string[];
    vars?: object[];
    voiceCommands?: string[];
};

/**
 * @param [_] - This parameter is deprecated and should not be used anymore.
 * @param config - Configuration of the plugin that the user set from within the web interface
 * (given you have added anything to the vars field of your script manifest).
 * @param meta - Manifest as specified in registerPlugin.
 */
declare type mainFunction = (_?: any, config: any, meta: Manifest) => void;

/**
 * This is the first and only top-level function that should be called in your script,
 * everything else will be done in the function that is passed to it.
 * @example
 * registerPlugin({
 *     name: 'Demo Script',
 *     version: '1.0',
 *     description: 'This example actually does nothing',
 *     author: 'Author <author[at]example.com>',
 *     vars: []
 * }, function(_, config, meta) {
 *     // your code goes here
 * });
 * @param manifest - The manifest determines which features are available to the script and
 * contains metadata and variables that will be shown in the web interface.
 * @param mainFunction - If the script is activated this function is called when the scripts are loaded.
 * The function receives three parameters, the first one (`_`) is deprecated and should not be used anymore.
 */
declare function registerPlugin(manifest: Manifest, mainFunction: mainFunction): void;

/**
 * @property format - e.g. "png"
 */
declare type BannerSettings = {
    format: string;
    width: number;
    height: number;
    layers: BannerLayer[];
};

declare type BannerLayer = any;

/**
 * This module is protected. This means that you need to add `'graphics'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 *
 * The best example on how to use the graphics module is the [Avatar banner script](https://forum.sinusbot.com/resources/avatar-banner-for-and-with-sinusbot.326/) by [Filtik](https://forum.sinusbot.com/members/filtik.7044/#resources).
 */
declare module "graphics" {
    /**
     * Removes the banner.
     * @returns success
     */
    function removeBanner(): boolean;
    /**
     * Setbanner sets the avatar of the sinusbot client.
     * @example
     * graphics.setBanner('banner', {
     *     "format": "png",
     *     "width": 260,
     *     "height": 120,
     *     "layers": [
     *         // FIXME: add layers here
     *     ]
     * }, function() {
     *     engine.setAvatarFromBanner('banner.png');
     * });
     * @param filename - filename without ending
     * @returns success
     */
    function setBanner(filename: string, bannerSettings: BannerSettings, callback: (...params: any[]) => any): boolean;
}

declare module "helpers" {
    /**
     * Returns a random numbers between zero and <max>
     * @returns Random number
     */
    function getRandom(max: number): number;
    /**
     * Returns a random permutation of numbers between zero and <max>
     * @returns A random permutation of numbers between zero and <max>
     */
    function getRandPerm(max: number): number[];
    /**
     * Creates an empty BytesWriter
     */
    function newBytes(): BytesWriter;
    /**
     * Returns a BytesWriter for a given string
     * @param value - String
     */
    function bytesFromString(value: string): BytesWriter;
    /**
     * Returns a BytesWriter for a given hex-string
     * @param value - Hex-string
     */
    function bytesFromHex(value: string): BytesWriter;
    /**
     * Returns a BytesWriter for a given base64-string
     * @param value - Base64-string
     */
    function bytesFromBase64(value: string): BytesWriter;
    /**
     * Encodes a string to base64
     */
    function base64Encode(input: string): string;
    /**
     * Decodes a string from base64
     */
    function base64Decode(input: string): string;
    /**
     * Encodes a string to hex
     */
    function hexEncode(input: string): string;
    /**
     * Decodes a string from hex
     */
    function hexDecode(input: string): string;
    /**
     * Generate a hex-encoded MD5 checksum of the given input
     */
    function MD5Sum(input: string): string;
    /**
     * Generate a hex-encoded SHA1 checksum of the given input
     */
    function SHA1Sum(input: string): string;
    /**
     * Generate a hex-encoded SHA256 checksum of the given input
     */
    function SHA256Sum(input: string): string;
    /**
     * Gets the string representation of an object
     */
    function toString(obj: any): string;
    /**
     * Returns the documentation of an interface
     * @param name - Interface name
     * @param obj - Interface to document
     * @returns JSDoc String
     */
    function document(name: string, obj: any): string;
}

/**
 * @param response.data - Data; Needs to be converted to a string first, e.g. `response.data.toString()`.
 * @param response.headers - Headers
 * @param response.status - Status
 * @param response.statusCode - Status Code
 */
declare type simpleRequestCallback = (error?: string, response?: {
    data: Bytes;
    headers: any;
    status: string;
    statusCode: number;
}) => void;

/**
 * This module is protected. This means that you need to add `'http'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it - like shown here:
 *
 * ```javascript
 * registerPlugin({
 *     name: 'Demo http basic Script',
 *     version: '1.0.0',
 *     description: 'This example script sends a http request.',
 *     author: 'Author <author@example.com>',
 *     //...
 *     // define the protected modules that you require:
 *     requiredModules: ['http'],
 *     //...
 *     vars: []
 * }, (_, config, meta) => {
 *     const engine = require('engine');
 *     // and then you can require and use the module in here:
 *     const http = require('http');
 *
 *     // send request
 *     http.simpleRequest({
 *         'method': 'GET',
 *         'url': 'https://example.com',
 *         'timeout': 6000,
 *     }, function (error, response) {
 *         if (error) {
 *             engine.log("Error: " + error);
 *             return;
 *         }
 *
 *         if (response.statusCode != 200) {
 *             engine.log("HTTP Error: " + response.status);
 *             return;
 *         }
 *
 *         // success!
 *         engine.log("Response: " + response.data.toString());
 *     });
 * });
 * ```
 *
 * Examples can be found under [simpleRequest](#httpsimplerequest).
 */
declare module "http" {
    /**
     * Creates an http request
     * @example
     * registerPlugin({
     *     name: 'Demo http basic Script',
     *     version: '1.0.0',
     *     description: 'This example script sends a http request.',
     *     author: 'Author <author@example.com>',
     *     requiredModules: ['http'], // <-- don't forget this!
     *     vars: []
     * }, (_, config, meta) => {
     *     // import modules
     *     const engine = require('engine');
     *     const http = require('http');
     *
     *     // send request
     *     http.simpleRequest({
     *         'method': 'GET',
     *         'url': 'https://example.com',
     *         'timeout': 6000,
     *     }, function (error, response) {
     *         if (error) {
     *             engine.log("Error: " + error);
     *             return;
     *         }
     *
     *         if (response.statusCode != 200) {
     *             engine.log("HTTP Error: " + response.status);
     *             return;
     *         }
     *
     *         // success!
     *         engine.log("Response: " + response.data.toString());
     *     });
     * });
     * @example
     * registerPlugin({
     *     name: 'Demo http basic Script',
     *     version: '1.0.0',
     *     description: 'This example script sends a http request and sends+receives json data.',
     *     author: 'Author <author@example.com>',
     *     requiredModules: ['http'], // <-- don't forget this!
     *     vars: []
     * }, (_, config, meta) => {
     *     // import modules
     *     const engine = require('engine');
     *     const http = require('http');
     *
     *     // define data that should be sent
     *     var sendData = JSON.stringify({ foo: 'bar' });
     *
     *     // send request
     *     http.simpleRequest({
     *         'method': 'POST',
     *         'url': 'https://example.com',
     *         'timeout': 6000,
     *         'body': sendData,
     *         'headers': {
     *             'Content-Type': 'application/json',
     *             'Content-Length': sendData.length
     *         }
     *     }, function (error, response) {
     *         if (error) {
     *             engine.log("Error: " + error);
     *             return;
     *         }
     *
     *         if (response.statusCode != 200) {
     *             engine.log("HTTP Error: " + response.status);
     *             return;
     *         }
     *
     *         // parse JSON response
     *         var res;
     *         try {
     *             res = JSON.parse(response.data.toString());
     *         } catch (err) {
     *             engine.log(err.message);
     *         }
     *
     *         // check if parsing was successfull
     *         if (res === undefined) {
     *             engine.log("Invalid JSON.");
     *             return;
     *         }
     *
     *         // success!
     *         engine.log(res);
     * });
     * @param config - http configuration object
     * @param [config.method] - Request Method to use (eg GET, POST, PUT, ...)
     * @param config.url - The URL endpoint which should be called
     * @param [config.timeout] - timeout in milliseconds
     * @param [config.body] - request body
     * @param [config.headers] - request header
     * @param callback - Callback function with error and response
     */
    function simpleRequest(config: {
        method?: string;
        url: string;
        timeout?: number;
        body?: string;
        headers?: any;
    }, callback: simpleRequestCallback): void;
}

declare module "media" {
    /**
     * Streams a URL or plays a track via internal url
     * @param url - URL or Internal Track-URL (see {@link Track#url}, something like track://...)
     * @returns success
     */
    function playURL(url: string): boolean;
    /**
     * Returns the current track
     */
    function getCurrentTrack(): Track;
    /**
     * Returns the track with the given ID (or null if none was found)
     * @param id - Track ID
     */
    function getTrackByID(id: string): Track;
    /**
     * Returns all Tracks
     */
    function getTracks(): Track[];
    /**
     * Searches for tracks matching the search term, returns 20 entries at most
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
    function search(searchString: string): Track[];
    /**
     * Adds the given url to the queue
     * @param url - Track-URL (see {@link Track#url})
     * @returns success
     */
    function enqueue(url: string): boolean;
    /**
     * Adds the given url as the first entry in the queue
     * @param url - Track-URL (see {@link Track#url})
     * @returns success
     */
    function playAsNext(url: string): boolean;
    /**
     * Plays the next track of the queue / playlist
     * @returns success
     */
    function playNext(): boolean;
    /**
     * Plays the next previous of the queue / playlist
     * @returns success
     */
    function playPrevious(): boolean;
    /**
     * Stops playback completely
     * @param [trackID] - (optional) the track to stop; if not present, all tracks will be stopped
     * @returns success
     */
    function stop(trackID?: string): boolean;
    /**
     * Returns all tracks of the queue
     */
    function getQueue(): Track[];
    /**
     * Returns all playlists
     */
    function getPlaylists(): Playlist[];
    /**
     * Returns the playlists with the given id
     */
    function getPlaylistByID(): Playlist;
    /**
     * Returns the currently active playlist
     */
    function getActivePlaylist(): Playlist;
    /**
     * Removes the track at a given position from the queue
     * @param index - Index of the track that should be removed from the queue (0 being the first entry)
     * @returns success
     */
    function removeFromQueue(index: number): boolean;
    /**
     * Removes all entries from the queue
     * @returns success
     */
    function clearQueue(): boolean;
    /**
     * Clears the current playlist (if set) so that playback won't continue inside that playlist
     * @returns success
     */
    function clearPlaylist(): boolean;
    /**
     * Plays a file via youtube-dl.
     * @param url - URL that youtube-dl supports
     * @returns jobId
     */
    function yt(url: string): string;
    /**
     * Streams something via youtube-dl.
     * @param url - URL that youtube-dl supports
     * @returns success
     */
    function ytStream(url: string): boolean;
    /**
     * Downloads a file via youtube-dl, optionally plays it
     * @param url - URL that youtube-dl supports
     * @param play - Set to true to play after download
     * @returns jobId
     */
    function ytdl(url: string, play: boolean): string;
    /**
     * Enqueues a stream via youtube-dl
     * @param url - URL that youtube-dl supports
     * @returns jobId
     */
    function enqueueYt(url: string): string;
    /**
     * Downloads a file via youtube-dl, then enqueues it
     * @param url - Url that youtube-dl supports
     * @returns jobId
     */
    function enqueueYtdl(url: string): string;
    /**
     * Plays the next track of the queue; resumes queue if stopped.
     */
    function playQueueNext(): void;
    /**
     * Alias for `playQueueNext()`. Plays the next track of the queue; resumes queue if stopped.
     */
    function resumeQueue(): void;
    /**
     * Clears the idle track.
     */
    function clearIdleTrack(): void;
    /**
     * Clears the startup track.
     */
    function clearStartupTrack(): void;
    /**
     * Sets the idle track.
     * @param url - Track-URL (see {@link Track#url})
     */
    function setIdleTrackURL(url: string): void;
    /**
     * Sets the startup track.
     * @param url - Track-URL (see {@link Track#url})
     */
    function setStartupTrackURL(url: string): void;
    /**
     * Starts playback of a playlist with a given track index.
     * @param playlist - Playlist
     * @param index - Index of the track (e.g. `0` for first one)
     */
    function playlistPlayByID(playlist: Playlist, index: number): void;
}

declare namespace NetClient { }

declare interface NetClient {
    /**
     * Sends data over the connection
     * @param bytes - Data that should be sent over the socket; one can also send an array of ints / bytes like [0, 255, 1, 1]
     * @param [format] - Optional, if given bytes will be decoded prior to sending; Can be either "hex" or "base64".
     */
    write(bytes: string | Bytes | number[], format?: string): void;
    /**
     * Registers a new event handler
     * @param event - Name of the event to listen to
     */
    on(event: string, callback: (...params: any[]) => any): void;
    /**
     * Closes the current connection
     */
    close(): void;
}

/**
 * @property [host] - Host to connect to; required for mysql / postgres
 * @property [port] - Port to use
 * @property [url] - WebSocket URL to use
 * @property [protocol = "tcp"] - can be udp, tcp or ws (websocket)
 */
declare type NetConnectParams = {
    host?: string;
    port?: number;
    url?: string;
    protocol?: string;
};

/**
 * If an error occured, exactly one parameter containing the error will be handed to the callback.
 */
declare type netConnectCallback = (error?: string) => void;

/**
 * This module is protected. This means that you need to add `'net'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 *
 * The net module allows you to connect to any TCP/UDP port or ws (websocket) and send raw data.
 * If you just need to send a http request then you should definitely use the [http module](#http) instead.
 * @example
 * const engine = require('engine');
 * const net = require('net');
 *
 * // connect to a tcp port
 * const conn = net.connect({
 *     host: '127.0.0.1',
 *     port: 80
 * }, err => {
 *     // log connection errors if any
 *     if (err) {
 *         engine.log(err);
 *     }
 * });
 *
 * // start listening for data
 * conn.on('data', data => {
 *     engine.log('received data');
 *     engine.log(data.toString());
 * })
 *
 * // write data if connection is available
 * if (conn) {
 *     // write data
 *     conn.write("GET / HTTP/1.1\r\nHost: localhost\r\n\r\n");
 * } else {
 *     engine.log('connection unavailable');
 * }
 */
declare module "net" {
    /**
     * @param params - Connection parameters
     * @param callback - Callback gets called on success/error.
     * @returns Client connection, or null if failed to setup a connection
     * (e.g. wrong parameters; null does not mean that the connection failed, instead that it is handled in the callback)
     */
    function connect(params: NetConnectParams, callback: netConnectCallback): NetClient;
}

/**
 * @example
 * var store = require('store');
 * store.set('foo', 'bar');
 */
declare module "store" {
    /**
     * Stores a variable under the given key
     * the values stored are only available for the current script, but shared between instances of it
     * @example
     * var store = require('store');
     * store.set('foo', 'bar');
     * @param value - Value to be stored; must be JSON.stringify()-able
     */
    function set(key: string, value: any): boolean;
    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are only available for the current script, but shared between instances of it
     * @example
     * var store = require('store');
     * var foo = store.get('foo');
     * @returns Stored value - or undefined, if not found
     */
    function get(key: string): any;
    /**
     * Deletes a stored variable by its key
     * the values stored are only available for the current script, but shared between instances of it
     */
    function unset(key: string): void;
    /**
     * Returns an array of all set keys
     * the values stored are only available for the current script, but shared between instances of it
     * @returns Array of all stored keys
     */
    function getKeys(): string[];
    /**
     * Returns all stored items
     * the values stored are only available for the current script, but shared between instances of it
     * @returns Keys of this object are the keys of each entry
     */
    function getAll(): any;
    /**
     * Stores a variable under the given key
     * the values stored are available for every script of every instance
     * @param value - Value to be stored; must be JSON.stringify()-able
     */
    function setGlobal(key: string, value: any): boolean;
    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are available for every script of every instance
     * @returns Stored value - or undefined, if not found
     */
    function getGlobal(key: string): any;
    /**
     * Deletes a stored variable by its key
     * the values stored are available for every script of every instance
     */
    function unsetGlobal(key: string): void;
    /**
     * Returns an array of all set keys
     * the values stored are available for every script of every instance
     * @returns Array of all stored keys
     */
    function getKeysGlobal(): string[];
    /**
     * Returns all stored items
     * the values stored are available for every script of every instance
     * @returns Keys of this object are the keys of each entry
     */
    function getAllGlobal(): any;
    /**
     * Stores a variable under the given key
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @param value - Value to be stored; must be JSON.stringify()-able
     */
    function setInstance(key: string, value: any): boolean;
    /**
     * Gets a variable that has been stored previously by set()
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns Stored value - or undefined, if not found
     */
    function getInstance(key: string): any;
    /**
     * Deletes a stored variable by its key
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     */
    function unsetInstance(key: string): void;
    /**
     * Returns an array of all set keys
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns Array of all stored keys
     */
    function getKeysInstance(): string[];
    /**
     * Returns all stored items
     * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
     * @returns Keys of this object are the keys of each entry
     */
    function getAllInstance(): any;
}

/**
 * This module is protected. This means that you need to add `'ws'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 *
 * The ws module allows you to start a websocket server.
 * If you want to connect to a websocket server instead then take look at the [net module](#net).
 *
 * Please consider using http api events for simple communications instead, as they are simpler and also allow you to require authentication; See [`api:<your event name>`](#eventeventapieventname) and [`public:<your event name>`](#eventeventpubliceventname) for more.
 * @example
 * // ### SinusBot script: ###
 *
 * const engine = require('engine');
 * const event = require('event');
 * const ws = require('ws');
 *
 * // listen for connections
 * event.on('ws.connect', id => {
 *     engine.log('new websocket connection; id ' + id);
 *     // broadcast data to all connected clients
 *     ws.broadcast(1, { blubb: 'blubb' });
 * });
 * // listen for disconnections
 * event.on('ws.disconnect', id => {
 *     engine.log('websocket connection disconnected; id ' + id);
 * });
 * // listen for data
 * event.on('ws.data', (id, type, data) => {
 *     engine.log('ws.data: id ' + id + '; data: ' + data.toString());
 *     // respond with data
 *     ws.write(id, type, data.toString());
 * });
 * @example
 * // ### Client Side (served html files via the enableWeb script option): ###
 *
 * var proto = (window.location.protocol == 'https:') ? 'wss' : 'ws';
 * var conn = new WebSocket(proto + "://" + document.location.host + "/api/v1/b/" + botId + "/i/" + instanceId + "/ws");
 * conn.onclose = function (evt) {
 * console.log('close', evt);
 *     alert('Closed.');
 * };
 * conn.send(JSON.stringify({ type: 'ping' }));
 * conn.onmessage = function (evt) {
 *     var data = JSON.parse(evt.data);
 * };
 */
declare module "ws" {
    /**
     * Writes some data to the connection with given connectionId
     * @param message - Actual message; can be given as string or byteshelper
     */
    function write(connectionId: string, messageType: number, message: string | Bytes): void;
    /**
     * Broadcasts some data to all connected clients
     * @param message - Actual message; can be given as string or byteshelper
     */
    function broadcast(messageType: number, message: string | Bytes): void;
    /**
     * Closes the connection
     */
    function close(connectionId: string): void;
}

/**
 * This type is passed to a `(api|public):<eventName>`-event,
 * see [`api:<eventName>`](#eventeventapieventname) or [`public:<eventName>`](#eventeventpubliceventname) for more.
 */
declare interface ApiEvent {
    /**
     * @returns Name of the event
     */
    name(): string;
    /**
     * @returns Json body
     */
    data(): any;
    /**
     * @returns User that called the event (or null, if unset)
     */
    user(): User;
    /**
     * @returns Remote address that triggered the call
     */
    remoteAddr(): string;
    /**
     * @returns Key/Value map of the query parameters in the url
     */
    queryParams(): any;
}

declare interface Bytes {
    /**
     * @returns uint8 array
     */
    bytes(): number[];
    string(length: number): string;
    cString(): string;
    /**
     * @returns int16
     */
    int16be(): number;
    /**
     * @returns int16
     */
    int16le(): number;
    /**
     * @returns int32
     */
    int32be(): number;
    /**
     * @returns int32
     */
    int32le(): number;
    length(): number;
    pos(): number;
    seek(pos: number): boolean;
    toBase64(): string;
    toHex(): string;
    /**
     * @returns String representation of the bytes
     */
    toString(): string;
    /**
     * @returns uint8
     */
    uint8(): number;
    /**
     * @returns uint16
     */
    uint16be(): number;
    /**
     * @returns uint16
     */
    uint16le(): number;
    /**
     * @returns uint32
     */
    uint32be(): number;
    /**
     * @returns uint32
     */
    uint32le(): number;
}

declare interface BytesWriter {
    append(bytes: Bytes): number;
    bytes(): Bytes;
    length(): number;
    newReader(): Bytes;
    toBase64(): string;
    toHex(): string;
    /**
     * @returns String representation of the bytes
     */
    toString(): string;
    writeString(str: string): void;
    writeCString(str: string): void;
    /**
     * @param int8 - Write 8-bit integer.
     */
    writeInt8(int8: number): void;
    /**
     * @param int16 - Write 16-bit integer as big-endian.
     */
    writeInt16be(int16: number): void;
    /**
     * @param int16 - Write 16-bit integer as little-endian.
     */
    writeInt16le(int16: number): void;
    /**
     * @param int32 - Write 32-bit integer as big-endian.
     */
    writeInt32be(int32: number): void;
    /**
     * @param int32 - Write 32-bit integer as little-endian.
     */
    writeInt32le(int32: number): void;
    /**
     * @param int64 - Write 64-bit integer as big-endian.
     */
    writeInt64be(int64: number): void;
    /**
     * @param int64 - Write 64-bit integer as little-endian.
     */
    writeInt64le(int64: number): void;
    /**
     * @param uint8 - Write unsigned 8-bit integer.
     */
    writeUint8(uint8: number): void;
    /**
     * @param uint16 - Write unsigned 16-bit integer as big-endian.
     */
    writeUint16be(uint16: number): void;
    /**
     * @param uint16 - Write unsigned 16-bit integer as little-endian.
     */
    writeUint16le(uint16: number): void;
    /**
     * @param uint32 - Write unsigned 32-bit integer as big-endian.
     */
    writeUint32be(uint32: number): void;
    /**
     * @param uint32 - Write unsigned 32-bit integer as little-endian.
     */
    writeUint32le(uint32: number): void;
    /**
     * @param uint64 - Write unsigned 64-bit integer as big-endian.
     */
    writeUint64be(uint64: number): void;
    /**
     * @param uint64 - Write unsigned 64-bit integer as little-endian.
     */
    writeUint64le(uint64: number): void;
}

declare interface Channel {
    /**
     * @returns ID
     */
    id(): string;
    /**
     * @returns Name
     */
    name(): string;
    /**
     * @returns Parent of channel or null if none is set
     */
    parent(): Channel;
    /**
     * @returns Order / position of this channel.
     * For ts3 this is a numeric value determining the order in which channels are displayed below their parent. To set a new value, please use moveTo.
     */
    position(): number;
    setPosition(pos: number): void;
    /**
     * delete the current channel
     */
    delete(): boolean;
    /**
     * Moves the channel to a new parent with a new position value
     * @param parent - New parent channel
     * @param order - New order value
     */
    moveTo(parent: string | Channel, order: number): void;
    setName(name: string): void;
    /**
     * @returns Type (0 = voice, 1 = text)
     */
    type(): number;
    /**
     * @returns Topic
     */
    topic(): string;
    setTopic(topic: string): void;
    /**
     * @returns Description
     */
    description(): string;
    setDescription(description: string): void;
    /**
     * @returns Codec
     */
    codec(): number;
    setCodec(codec: number): void;
    /**
     * @returns Codec quality
     */
    codecQuality(): number;
    setCodecQuality(quality: number): void;
    /**
     * @returns Configured number of clients the channel can hold (-1 if unlimited)
     */
    maxClients(): number;
    /**
     * @param maxClients - Set to -1 for unlimited clients
     */
    setMaxClients(maxClients: number): void;
    maxFamilyClients(): number;
    setMaxFamilyClients(maxFamilyClients: number): void;
    /**
     * @returns Whether channel is permanent or not
     */
    isPermanent(): boolean;
    setPermanent(permanent: boolean): void;
    /**
     * @returns Whether channel is semi-permanent or not
     */
    isSemiPermanent(): boolean;
    setSemiPermanent(permanent: boolean): void;
    /**
     * @returns Whether channel is the default one
     */
    isDefault(): boolean;
    /**
     * @param bool - Whether channel is the default one
     */
    setDefault(bool: boolean): void;
    /**
     * @returns Whether channel is password-protected or not
     */
    isPassworded(): boolean;
    /**
     * @param password - Password
     */
    setPassword(password: string): void;
    /**
     * @returns Whether channel is encrypted or not
     */
    isEncrypted(): boolean;
    setEncrypted(encrypted: boolean): void;
    /**
     * Compares two channels
     * @returns True, if both channels are the same
     */
    equals(otherChannel: Channel): boolean;
    /**
     * Sends a chat message to the channel
     * @param msg - Message to send
     * @returns success
     */
    chat(msg: string): boolean;
    /**
     * @returns Clients that are in this channel
     */
    getClients(): Client[];
    /**
     * @returns Number of clients that are in the channel
     */
    getClientCount(): number;
    /**
     * enables / disables subscription for this channel; requires subscription mode
     */
    subscribe(val: boolean): void;
    /**
     * Updates multiple channel parameters at once
     */
    update(channelParams: ChannelParams): void;
    /**
     * Assigns a client to a channel group
     */
    setChannelGroup(client: Client, channelGroup: ChannelGroup): void;
    /**
     * Gets the permissions for the channel from the server - this is an expensive call as the permissions are _not_ cached
     */
    getPermissions(): Permission[];
    /**
     * Adds/sets a new permission on the channel; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
     * @param id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
     */
    addPermission(id: string): Permission;
    getURL(): string;
    /**
     * Gets the messages of a discord channel.
     * @param params - e.g. `{ around: 'messageid', limit: '1' }`, see [discord documentation](https://discordapp.com/developers/docs/resources/channel#get-channel-messages)
     * @param callback - (error, messages)
     */
    getMessages(params: any, callback: (...params: any[]) => any): boolean;
}

declare interface ChannelGroup {
    /**
     * @returns ID of the channel group
     */
    id(): string;
    /**
     * @returns Name of the channel group
     */
    name(): string;
    /**
     * @returns ID of the icon used for the channel group
     */
    icon(): string;
    /**
     * Gets the permissions for the channelgroup from the server - this is an expensive call as the permissions are _not_ cached
     */
    getPermissions(): Permission[];
    /**
     * Adds/sets a new permission to the channelgroup; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
     * @param id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
     */
    addPermission(id: string): Permission;
}

/**
 * Note: if the client is inivisible to the bot, some fields might not be available.
 */
declare interface Client {
    /**
     * @returns Name/nickname of the client
     */
    name(): string;
    /**
     * Alias of name()
     * @returns Name/nickname of the client
     */
    nick(): string;
    /**
     * @returns Phonetic name of the client; useful for tts
     */
    phoneticName(): string;
    /**
     * @returns Temporary ID of the client
     */
    id(): string;
    /**
     * @returns Unique ID of the client
     */
    uid(): string;
    /**
     * Alias of uid()
     * @returns Unique ID of the client
     */
    uniqueId(): string;
    /**
     * @returns TeamSpeak database ID of the client
     */
    databaseID(): string;
    /**
     * Alias of databaseID()
     * @returns TeamSpeak database ID of the client
     */
    databaseId(): string;
    /**
     * @returns Country of the client
     */
    country(): string;
    /**
     * @returns Description of the client
     */
    description(): string;
    /**
     * @returns success
     */
    setDescription(description: string): boolean;
    /**
     * Returns true when this client is the bot itself
     */
    isSelf(): boolean;
    /**
     * Returns if the client is recording the conversation
     */
    isRecording(): string;
    /**
     * Returns if the client is muted (has its microphone disabled)
     */
    isMuted(): boolean;
    /**
     * Returns if the client is deaf (has its loudspeakers disabled)
     */
    isDeaf(): boolean;
    /**
     * Returns if the client is away
     */
    isAway(): boolean;
    /**
     * Returns the clients' servergroups
     */
    getServerGroups(): ServerGroup[];
    /**
     * Returns the clients' channelgroup
     */
    getChannelGroup(): ChannelGroup;
    /**
     * Returns the clients' away message (if set)
     */
    getAwayMessage(): string;
    /**
     * Returns the clients' last ping time (latency)
     */
    getPing(): number;
    /**
     * Returns the clients' ip address (if available)
     */
    getIPAddress(): string;
    /**
     * Returns the clients' online time (requires special permissions)
     * @returns in milliseconds
     */
    getOnlineTime(): number;
    /**
     * Returns the clients' current idle time (requires special permissions)
     * @returns in milliseconds
     */
    getIdleTime(): number;
    /**
     * Returns the clients' packet loss percentage (requires special permissions)
     */
    getPacketLoss(): number;
    /**
     * Returns the clients' amount of received data (requires special permissions)
     */
    getBytesReceived(): number;
    /**
     * Returns the clients' amount of sent data (requires special permissions)
     */
    getBytesSent(): number;
    /**
     * Returns the total number of connections from that client
     * On TS3, this information has to be actively requested from the server. If the bot is unable to get it or hasn't received an answer in time, it will return <= 0 here.
     */
    getTotalConnections(): number;
    /**
     * Returns the time the client has been created / was first seen by the server
     * On TS3, this information has to be actively requested from the server. If the bot is unable to get it or hasn't received an answer in time, it will return <= 0 here.
     */
    getCreationTime(): number;
    /**
     * Returns an array of all channels the client is in; even if TS only uses one channel for a client at a time, other backends might provide several
     * @returns Array of channels
     */
    getChannels(): Channel[];
    /**
     * @returns Current audio channel the client is in
     */
    getAudioChannel(): Channel;
    /**
     * Returns the TS3 client URL in the format `client://0/uid~nickname`.
     * On discord it returns an @-mention in the format `<@uid>`.
     * @returns Client URL / mention
     */
    getURL(): string;
    /**
     * Compares two clients
     * @returns true, if both clients are the same
     */
    equals(otherClient: Client): boolean;
    /**
     * Sends a message to the client
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.chat('Hello, ' + client.name());
     * @param msg - Message to send
     * @returns success
     */
    chat(msg: string): boolean;
    /**
     * Pokes the client with a message
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.chat('Pokeypoke, ' + client.name() + '!');
     * @param msg - Message to send
     */
    poke(msg: string): void;
    /**
     * Bans a client
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.ban(100, 'See you in 100 seconds, ' + client.name() + '!');
     * @param time - Amount of time (in seconds) the ban should last (-1 for permanent)
     * @param msg - Message to send
     */
    ban(time: number, msg: string): void;
    /**
     * Kicks the client from the server
     * @param msg - Message to send
     */
    kick(msg: string): void;
    /**
     * Kicks the client from the server
     * @param msg - Message to send
     */
    kickFromServer(msg: string): void;
    /**
     * Kicks the client from the channel
     * @param msg - Message to send
     */
    kickFromChannel(msg: string): void;
    /**
     * Adds a client to a specific ServerGroup
     * @param group - Servergroup the client should be added to
     */
    addToServerGroup(group: ServerGroup | string | number): void;
    /**
     * Removes a client from a specific ServerGroup
     * @param group - Servergroup the client should be removed from
     */
    removeFromServerGroup(group: ServerGroup | string | number): void;
    /**
     * Moves a client to another channel
     *
     * *Note: This can also be used to disconnect a discord bot-instance from the voice chat with `backend.getBotClient().moveTo('')`.
     * @param target - Channel the client should be moved to
     * @param [password] - Password for the target channel, if required
     */
    moveTo(target: Channel | string, password?: string): void;
    /**
     * Enables / disables subscription for this client; requires subscription mode
     */
    subscribe(val: boolean): void;
    /**
     * Returns the platform of the client (Windows, Linux, MacOS)
     * @returns platform
     */
    getPlatform(): string;
    /**
     * Returns the version of the client
     * @returns version
     */
    getVersion(): string;
    /**
     * Forces an update on the client
     */
    requestConnectionInfoUpdate(): boolean;
    /**
     * Returns the client type (Query=0; Normal=1)
     * @returns client type
     */
    type(): string;
}

/**
 * Parameter of the message event callback.
 */
declare interface DiscordMessage {
    /**
     * @returns Client that sent the message.
     */
    author(): Client;
    /**
     * @returns ID of the client that sent the message.
     */
    authorID(): string;
    /**
     * @returns Channel in which the message was posted.
     */
    channel(): Channel;
    /**
     * @returns ID of the channel in which the message was posted.
     */
    channelID(): string;
    /**
     * @returns Content/Text of the message.
     */
    content(): string;
    /**
     * Create a reaction for the message.
     * `emoji` takes the form of `name:id` for custom guild emoji, or Unicode characters.
     *
     * Requires the `READ_MESSAGE_HISTORY` permission.
     * Additionally, if nobody else has reacted to the message using this emoji,
     * this requires the `ADD_REACTIONS` permission to be present on the current user.
     * @param emoji - Emoji in the form of `name:id` for custom guild emoji, or Unicode character.
     * @returns success
     */
    createReaction(emoji: string, callback?: (...params: any[]) => any): boolean;
    /**
     * Deletes the message.
     * @returns success
     */
    delete(callback?: (...params: any[]) => any): boolean;
    /**
     * Deletes all reactions on a message. This requires the `MANAGE_MESSAGES` permission.
     * @returns success
     */
    deleteAllReactions(callback?: (...params: any[]) => any): boolean;
    /**
     * Delete a reaction the bot has made for the message.
     * @param emoji - Emoji in the form of `name:id` for custom guild emoji, or Unicode character.
     * @returns success
     */
    deleteOwnReaction(emoji: string, callback?: (...params: any[]) => any): boolean;
    /**
     * Delete a reaction that a given user has made for the message.
     * @param emoji - Emoji in the form of `name:id` for custom guild emoji, or Unicode character.
     * @returns success
     */
    deleteUserReaction(emoji: string, user: Client | string, callback?: (...params: any[]) => any): boolean;
    /**
     * Edits the content/text of the message.
     * @returns success
     */
    editContent(content: string, callback?: (...params: any[]) => any): boolean;
    /**
     * @returns ID of the guild the message was sent in.
     */
    guildID(): string;
    /**
     * @returns ID of the Message.
     */
    ID(): string;
    /**
     * @returns Whether this was a TTS message.
     */
    isTTS(): boolean;
    /**
     * Posts a message in the same channel/chat that the original message was sent in.
     * @returns success
     */
    reply(text: string, callback?: (...params: any[]) => any): boolean;
    /**
     * @returns Timestamp when this message was sent.
     */
    timestamp(): Date;
    /**
     * @returns Timestamp when this message was edited (same as timestamp() if never).
     */
    timestampEdited(): Date;
}

declare interface ExtendedDiscord {
    /**
     * Retrieves info about the specific Guild
     * @param guildId - the guild id of which the info should be retrieved
     * @param callback - => (err, object)
     */
    getGuild(guildId: string, callback: (...params: any[]) => any): void;
    /**
     * Modifys the guild
     * @param guildId - Guild ID
     * @param guildObject - [Guild Object](https://discordapp.com/developers/docs/resources/guild#guild-object) with the data that should be modified
     * @param [callback] - => (err, object)
     */
    modifyGuild(guildId: string, guildObject: any, callback?: (...params: any[]) => any): void;
    /**
     * Sends a presence or status update.
     * @example
     * const backend = require("backend")
     * // => playing hide and seek
     * backend.extended().setStatus({
     *     since: 0,
     *     game: {
     *         name: "hide and seek",
     *         type: 0,
     *     },
     *     status: "online",
     *     afk: false
     * })
     * @example
     * const backend = require("backend")
     * // => set status to 'do not disturb'
     * backend.extended().setStatus({
     *     since: 0,
     *     game: {},
     *     status: "dnd",
     *     afk: false
     * })
     * @param [status.game] - Activity
     * @param [status.game.name] - Activity's name
     * @param [status.game.type] - Activity's type: 0 (game), 1 (streaming), 2 (listening)
     * @param [status.game.url] - Only https://twitch.tv/ urls work.
     * @param status.status - [Status Type](https://discordapp.com/developers/docs/topics/gateway#update-status-status-types). Either online, dnd, idle, invisible or offline.
     * @param status.afk - Whether or not the client is afk.
     * @param [status.since] - Unix time (in milliseconds) of when the client went idle, or null if the client is not idle.
     */
    setStatus(status: {
        game?: {
            name?: string;
            type?: number;
            url?: string;
        };
        status: string;
        afk: boolean;
        since?: number;
    }): void;
    /**
     * Get a channel by ID. Returns a channel object.
     * @param callback - => (err, [ChannelObject](https://discordapp.com/developers/docs/resources/channel#channel-object))
     */
    getChannel(channelId: string, callback: (...params: any[]) => any): void;
    /**
     * Update a channels settings. Requires the `MANAGE_CHANNELS` permission for the guild.
     * @param data - [Channel Params](https://discordapp.com/developers/docs/resources/channel#modify-channel-json-params)
     * @param [callback] - => (err, object)
     */
    modifyChannel(channelId: string, data: any, callback?: (...params: any[]) => any): void;
    /**
     * Delete a channel, or close a private message.
     * Requires the `MANAGE_CHANNELS` permission for the guild.
     * Deleting a category does not delete its child channels;
     * they will have their parent_id removed and a Channel Update Gateway event will fire for each of them.
     * @param [callback] - => (err, object)
     */
    deleteChannel(channelId: string, callback?: (...params: any[]) => any): void;
    /**
     * Returns the messages for a channel.
     * If operating on a guild channel, this endpoint requires the `VIEW_CHANNEL` permission to be present on the current user.
     * If the current user is missing the `READ_MESSAGE_HISTORY` permission in the channel then this will return no messages (since they cannot read the message history).
     * @param callback - => (err, object)
     */
    getChannelMessages(channelId: string, callback: (...params: any[]) => any): void;
    /**
     * Returns a specific message in the channel.
     * If operating on a guild channel, this endpoint requires the `READ_MESSAGE_HISTORY` permission to be present on the current user.
     * @param callback - => (err, object)
     */
    getChannelMessage(channelId: string, callback: (...params: any[]) => any): void;
    /**
     * Post a message to a guild text or DM channel.
     * If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.
     * If the tts field is set to true, the `SEND_TTS_MESSAGES` permission is required for the message to be spoken.
     * @param data - [Message Params](https://discordapp.com/developers/docs/resources/channel#create-message-params)
     * @param [callback] - => (err, object)
     */
    createMessage(channelId: string, data: any, callback?: (...params: any[]) => any): void;
    /**
     * Sends a raw http request to the discord API and therefore allows potentially unsafe and arbitrary API calls.
     * Check the [discord documentation](https://discordapp.com/developers/docs/resources/channel) for available API calls.
     *
     * **Important:** In previous SinusBot versions (1.0.0-beta.6 or older) this method was protected and only works if `requiredModules: ['discord-dangerous']` is set in the script manifest.
     * @param method - HTTP Method
     * @param path - HTTP path
     * @param data - Data (JSON Object)
     * @param [callback] - => (err, object)
     */
    rawCommand(method: string, path: string, data: any, callback?: (...params: any[]) => any): void;
}

declare interface ExtendedTS3 {
    /**
     * Retrieves TeamSpeak Server Info
     * @returns TeamSpeakServerInfo Object for current server
     */
    getServerInfo(): TeamSpeakServerInfo;
    /**
     * Retrieve Extended TeamSpeak Server Info
     *
     * This will fire a [serverinfo_int](#eventeventserverinfo_int) event with a {@link TeamSpeakExtendedServerInfo} object as callback parameter.
     * @returns success
     */
    requestExtendedServerInfo(): boolean;
}

/**
 * handles channel, channelgroup and servergroup permissions; mainly for TS3
 */
declare interface Permission {
    /**
     * @returns ID of the permission
     */
    id(): string;
    /**
     * @returns Name of the permission
     */
    name(): string;
    /**
     * @returns permission value
     */
    value(): number;
    /**
     * @returns true, if skip flag has been set - only applicable for ServerGroups
     */
    skip(): boolean;
    /**
     * @returns true, if negated flag has been set - only applicable for ServerGroups
     */
    negated(): boolean;
    /**
     * sets the value of the permission; you need to call save() to apply changes
     * @param value - true, if permission should be negated, false otherwise
     */
    setNegated(value: boolean): boolean;
    /**
     * sets the skip flag - only applicable for ServerGroups; you need to call save() to apply changes
     * @param value - true, if permission should be skipped, false otherwise
     */
    setSkip(value: boolean): boolean;
    /**
     * sets the negated flag - only applicable for ServerGroups; you need to call save() to apply changes
     * @param value - new value for the permission
     */
    setValue(value: number): boolean;
    /**
     * applies the changed settings
     */
    save(): boolean;
    /**
     * delete the current permission
     */
    delete(): boolean;
}

declare interface Playlist {
    /**
     * @returns Unique identifier of the playlist
     */
    id(): string;
    /**
     * @returns Name of the playlist
     */
    name(): string;
    /**
     * @returns List of all tracks inside the given playlist
     */
    getTracks(): PlaylistTrack[];
    /**
     * Sets the playlist to active; will continue playing songs from this playlist
     */
    setActive(): boolean;
}

/**
 * Track in a Playlist
 */
declare interface PlaylistTrack {
    /**
     * @returns Title of the track
     */
    title(): string;
    /**
     * @returns Artist of the track
     */
    artist(): string;
    /**
     * @returns Album of the track
     */
    album(): string;
    /**
     * @returns Url of the track (internal or external)
     */
    url(): string;
    /**
     * Starts playback of the track
     * @returns success
     */
    play(): boolean;
}

declare interface ServerGroup {
    /**
     * @returns ID of the server group
     */
    id(): string;
    /**
     * @returns Name of the server group
     */
    name(): string;
    /**
     * @returns ID of the icon used for the channel group
     */
    icon(): string;
    /**
     * Adds a client by database ID to the servergroup
     * @param client - The client can be a client object, string or number
     * @returns status if the request was successful
     */
    addClientByDatabaseId(client: Client | string | number): boolean;
    /**
     * Removes a client by database ID from the servergroup
     * @param client - The client can be a client object, string or number
     * @returns status if the request was successful
     */
    removeClientByDatabaseId(client: Client | string | number): boolean;
    /**
     * Gets the permissions for the servergroup from the server - this is an expensive call as the permissions are _not_ cached
     */
    getPermissions(): Permission[];
    /**
     * Adds/sets a new permission to the servergroup; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
     * @param id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
     */
    addPermission(id: string): Permission;
}

/**
 * See [backend.extended().requestExtendedServerInfo()](#extendedts3requestextendedserverinfo).
 */
declare interface TeamSpeakExtendedServerInfo {
    /**
     * @returns max clients which are allowed to connect to the server
     */
    maxClients(): number;
    /**
     * @returns amount of clients which are connected to the server
     */
    clientsOnline(): number;
    /**
     * @returns amount of created channels on the server
     */
    channelsOnline(): number;
    /**
     * @returns server uptime in seconds
     */
    uptime(): number;
    /**
     * @returns how many complains a client needs to have until he gets banned
     */
    complainAutobanCount(): number;
    /**
     * @returns autoban duration
     */
    complainAutobanTime(): number;
    /**
     * @returns seconds of when a complain gets removed
     */
    complainRemoveTime(): number;
    /**
     * @returns number of clients need to be connected to a channel until all get silenced (enforces talkpower)
     */
    minClientsInChannelBeforeForcedSilence(): number;
    /**
     * Anti-Flood: Amount of reduced points per tick.
     */
    antifloodPointsTickReduce(): number;
    /**
     * Anti-Flood: Points needed for commands block.
     */
    antifloodPointsNeededCommandBlock(): number;
    /**
     * Anti-Flood: Points needed for IP block.
     */
    antifloodPointsNeededIPBlock(): number;
    /**
     * Amount of client connections.
     */
    clientConnections(): number;
    /**
     * Amount of query client connections.
     */
    queryClientConnections(): number;
    /**
     * @returns amount of query clients connected to the server
     */
    queryClientsOnline(): number;
    /**
     * @returns voiceservers port
     */
    port(): number;
    /**
     * @returns wether the server is set to autostart or not
     */
    autostart(): number;
    machineID(): string;
    /**
     * @returns needed security level to connect to the server
     */
    neededIdentitySecurityLevel(): number;
    /**
     * @returns wether logging for clients actions is enabled
     */
    logClient(): number;
    /**
     * @returns wether logging for query actions is enabled
     */
    logQuery(): number;
    /**
     * @returns wether logging for channel changes is enabled
     */
    logChannel(): number;
    /**
     * @returns wether logging for permissions changes is enabled
     */
    logPermissions(): number;
    /**
     * @returns wether logging for server actions is enabled
     */
    logServer(): number;
    /**
     * @returns wether logging for filetransfer actions is enabled
     */
    logFiletransfer(): number;
    /**
     * @returns minimum client version needed to connect
     */
    minClientVersion(): number;
    /**
     * @returns max download bandwith which is allowed for filetransfer
     */
    maxDownloadTotalBandwidth(): number;
    /**
     * @returns max upload bandwith which is allowed for filetransfer
     */
    maxUploadTotalBandwidth(): number;
    /**
     * @returns maximum bytes which are able to be downloaded via filetransfer
     */
    downloadQuota(): number;
    /**
     * @returns maximum bytes which are able to be uploaded via filetransfer
     */
    uploadQuota(): number;
    /**
     * @returns amount of bytes which have been downloaded this month
     */
    monthBytesDownloaded(): number;
    /**
     * @returns amount of bytes which have been uploaded this month
     */
    monthBytesUploaded(): number;
    /**
     * @returns total amount of bytes which have been downloaded
     */
    totalBytesDownloaded(): number;
    /**
     * @returns total amount of bytes which have been uploaded
     */
    totalBytesUploaded(): number;
    /**
     * Retrieve the raw object
     * @returns serverinfo as stringifyable object
     */
    asObject(): any;
}

declare interface TeamSpeakServerInfo {
    /**
     * @returns server name
     */
    name(): string;
    /**
     * @returns server uid
     */
    uid(): string;
    /**
     * @returns welcome message
     */
    welcomeMessage(): string;
    platform(): number;
    /**
     * Note: Currently does not work; only returns `0`.
     * @returns version of the server
     */
    version(): number;
    /**
     * @returns host message
     */
    hostMessage(): string;
    /**
     * @returns banner url
     */
    hostBannerURL(): string;
    /**
     * @returns gfx url of the banner
     */
    hostBannerGFXURL(): string;
    /**
     * @returns banner gfx interval in seconds
     */
    hostBannerGFXInterval(): number;
    /**
     * @returns hostbutton url
     */
    hostButtonURL(): string;
    /**
     * @returns hostbutton gfx url
     */
    hostButtonGFXURL(): string;
    /**
     * @returns phoenetic server name
     */
    namePhonetic(): string;
    /**
     * @returns teamspeak server id
     */
    serverID(): number;
    /**
     * @returns server icon id
     */
    iconID(): number;
    /**
     * @returns amount of reserved slots
     */
    reservedSlots(): number;
    /**
     * @returns id of the default server group
     */
    defaultServerGroup(): number;
    /**
     * @returns id of the default channel group
     */
    defaultChannelGroup(): number;
    /**
     * @returns id of the default channel admin group
     */
    defaultChannelAdminGroup(): number;
    /**
     * Retrieves the Encryption Mode of the server
     * @returns encryption mode (perChannel=0; GlobalOff=1; GlobalOn=2)
     */
    codecEncryptionMode(): number;
    /**
     * @returns server creation timestamp
     */
    created(): number;
    /**
     * Retrieve the raw object
     * @returns serverinfo as stringifyable object
     */
    asObject(): any;
}

declare interface Track {
    /**
     * @returns Unique ID of the track
     */
    id(): string;
    /**
     * @returns Unique url for the track
     */
    url(): string;
    /**
     * @returns Type of the file
     */
    type(): string;
    /**
     * @returns Title of the track
     */
    title(): string;
    /**
     * @returns Artist of the track
     */
    artist(): string;
    /**
     * @returns Temporary title of the track; e.g. when playing radio stations
     */
    tempTitle(): string;
    /**
     * @returns Temporary artist of the track; e.g. when playing radio stations
     */
    tempArtist(): string;
    /**
     * @returns Album of the track
     */
    album(): string;
    /**
     * @returns Genre of the track
     */
    genre(): string;
    /**
     * @returns Duration of the track (in milliseconds)
     */
    duration(): number;
    /**
     * @returns Tracknumber of the track
     */
    trackNumber(): number;
    /**
     * @returns Path to the thumbnail, if any
     */
    thumbnail(): string;
    /**
     * @returns Original filename
     */
    filename(): string;
    /**
     * Starts playback of the track
     * @returns success
     */
    play(): boolean;
    /**
     * Adds the track to the queue
     * @returns success
     */
    enqueue(): boolean;
    /**
     * Adds the track as the first entry in the queue
     * @returns success
     */
    addNext(): boolean;
    /**
     * Downloads a thumbnail from the internet and stores it for the given track
     * @param url - Url to download the thumbnail from (limited to X MB)
     */
    setThumbnailFromURL(url: string): void;
    /**
     * Removes the thumbnail of a track
     */
    removeThumbnail(): void;
    sourceURL(): string;
}

declare interface User {
    /**
     * Returns the ID of the user
     * @returns ID of the User
     */
    id(): string;
    /**
     * Returns the name of the user
     * @returns Name of the User
     */
    name(): string;
    /**
     * Returns the privileges of the user
     * @example
     * const ENQUEUE           = 1 << 13;
     * const SKIP_QUEUE        = 1 << 14;
     * const ADMIN_QUEUE       = 1 << 15;
     * const PLAYBACK          = 1 << 12;
     * const START_STOP        = 1 <<  8;
     * const EDIT_BOT_SETTINGS = 1 << 16;
     * const LOGIN             = 1 <<  0;
     * const UPLOAD_FILES      = 1 <<  2;
     * const DELETE_FILES      = 1 <<  3;
     * const EDIT_FILES        = 1 <<  4;
     * const CREATE_AND_DELETE_PLAYLISTS = 1 << 5;
     * const EDIT_PLAYLISTS    = 1 <<  7;
     * const EDIT_INSTANCES    = 1 << 17;
     * const EDIT_USERS        = 1 <<  9;
     *
     * function hasPlaybackPermission(user) {
     *     // returns true if user has playback permission
     *     return (user.privileges() & PLAYBACK) != 0
     * }
     * @returns Privileges of the user
     */
    privileges(): number;
    /**
     * Returns the instance privileges of the user
     * @returns Instance privileges of the user
     */
    instancePrivileges(): number;
    /**
     * @returns teamspeak or discord unique ID if bound to a client
     */
    tsUid(): string;
    /**
     * @returns teamspeak or discord unique ID if bound to a client
     */
    uid(): string;
    /**
     * @returns Group ID if bound to a teamspeak group or discord role
     */
    tsGroupId(): string;
    /**
     * @returns Group ID if bound to a teamspeak group or discord role
     */
    groupId(): string;
    /**
     * Checks if an user is an admin
     * @returns Admin status of the user
     */
    isAdmin(): boolean;
    /**
     * Sets a new password to the user
     * @param password - new password of the user
     * @returns Success or not
     */
    setPassword(password: string): boolean;
    /**
     * Sets the teamspeak/discord unique ID
     * @param uid - teamspeak/discord unique ID of the client
     * @returns Success or not
     */
    setTSUid(uid: string): boolean;
    /**
     * Sets the teamspeak/discord unique ID
     * @param uid - teamspeak/discord unique ID of the client
     * @returns Success or not
     */
    setUid(uid: string): boolean;
    /**
     * Sets the group ID
     * @param groupId - teamspeak group ID or discord role ID
     * @returns Success or not
     */
    setGroupId(groupId: string): boolean;
    /**
     * Sets the users privileges
     * @param privileges - New privileges of the user
     * @returns Success or not
     */
    setPrivileges(privileges: number): boolean;
    /**
     * Adds a privilege to a user
     * @param privilege - New privilege which should be added
     * @returns Success or not
     */
    addPrivilege(privilege: number): boolean;
    /**
     * Removes a privilege from a user
     * @param privilege - Privilege which should be removed
     * @returns Success or not
     */
    removePrivilege(privilege: number): boolean;
    /**
     * Sets the users instance privileges
     * @param privileges - New privileges of the user
     * @returns Success or not
     */
    setInstancePrivileges(privileges: number): boolean;
    /**
     * Adds an instance privilege to a user
     * @param privilege - New privilege which should be added
     * @returns Success or not
     */
    addInstancePrivilege(privilege: number): boolean;
    /**
     * Removes an instance privilege from a user
     * @param privilege - Privilege which should be removed
     * @returns Success or not
     */
    removeInstancePrivilege(privilege: number): boolean;
    /**
     * Deletes an user
     * @returns Success or not
     */
    delete(): boolean;
}

declare interface CryptoKeypair {
    /**
     * Returns Keypair bytes.
     * @returns Keypair bytes
     */
    export(): BytesWriter;
    sharedKey(something: BytesWriter): BytesWriter;
}

/**
 * Used to update or create a channel;
 * When creating a channel parent and name are mandatory for TS3;
 * When updating a channel parent will be ignored (use moveTo instead)
 * @property name - Displayname of the channel; mandatory on create
 * @property parent - Parent channel (you can also use the channelId); ignored on update, mandatory on create
 * @property codec - See codec types for explanation
 * @property encrypted - `true` by default
 * @property maxClients - Set to `-1` for unlimited clients
 * @property default - Whether the channel is the default channel
 * @property neededTalkPower - TS3 only
 * @property deleteDelay - TS3 only
 * @property icon - TS3 only
 */
declare type ChannelParams = {
    name: string;
    parent: Channel | number | string;
    description: string;
    topic: string;
    password: string;
    codec: number;
    codecQuality: number;
    encrypted: boolean;
    permanent: boolean;
    semiPermanent: boolean;
    position: number;
    maxClients: number;
    maxFamilyClients: number;
    default: boolean;
    neededTalkPower: number;
    deleteDelay: number;
    icon: number;
};

/**
 * @property client - Client that has been added / removed
 * @property invoker - Client that added client to the group
 * @property serverGroup - Server Group
 */
declare type ClientServerGroupEvent = {
    client: Client;
    invoker: Client;
    serverGroup: ServerGroup;
};

/**
 * @property text - Text of the message
 * @property channel - Channel (if given) this message has been sent on
 * @property client - Client that sent the message
 * @property mode - Number representing the way this message has been sent
 * (1 = private, 2 = channel, 3 = server)
 */
declare type Message = {
    text: string;
    channel: Channel;
    client: Client;
    mode: number;
};

/**
 * @property [fromChannel] - Old channel (or undefined if the client just got online/changed visibility)
 * @property [toChannel] - New channel (or undefined if the client just went offline/changed visibility)
 * @property client - Client that was moved
 * @property invoker - Client that invoked the move
 * @property [message] - move/ban/kick message (TS3; since 1.0.0-beta.6)
 */
declare type MoveInfo = {
    fromChannel?: Channel;
    toChannel?: Channel;
    client: Client;
    invoker: Client;
    message?: string;
};

