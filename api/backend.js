/**
 * @module backend
 */
module.exports = {
    /**
     * @description Connects to the server
     * @returns {boolean}
     */
    connect: () => {},

    /**
     * @description Disconnects from the server
     * @returns {boolean}
     */
    disconnect: () => {},

    /**
     * Returns true if the backend is connected to a server
     * @returns {boolean}
     */
    isConnected: () => {},

    /**
     * @returns {string} Current bots' unique identifier
     */
    getBotClientID: () => {},

    /**
     * @returns {Client} Client of the bot
     */
    getBotClient: () => {},

    /**
     * Returns the actual nickname; To get the configured nickname, use engine.getNick() instead.
     * @returns {string}
     */
    getNick: () => {},

    /**
     * Returns a channel if found
     * @param {string} id
     * @returns {Channel}
     * @example
     * var backend = require('backend');
     * var channel = backend.getChannelByID('6');
     */
    getChannelByID: (id) => {},

    /**
     * Returns the (primary) channel the bot is in
     * @returns {Channel}
     * @example
     * var backend = require('backend');
     * var channel = backend.getCurrentChannel();
     */
    getCurrentChannel: () => {},

    /**
     * Returns the matching channel if found
     * @param {string} name
     * @returns {Channel?}
     * @see Backend#getChannelsByName()
     * @example
     * var backend = require('backend');
     * var channel = backend.getChannelByName('Welcome Channel');
     */
    getChannelByName: (name) => {},

    /**
     * Returns an array of channels matching the name
     * @param {string} name
     * @returns {Channel[]}
     * @since 0.14.0
     * @example
     * var backend = require('backend');
     * var channels = backend.getChannelsByName('foobar');
     */
    getChannelsByName: (name) => {},

    /**
     * Returns the total number of channels
     * @returns {number}
     * @example
     * var backend = require('backend');
     * var count = backend.getChannelCount();
     */
    getChannelCount: () => {},

    /**
     * Returns all channels
     * @returns {Channel[]}
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
    getChannels: () => {},

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
     *     client.chat('Hello ', + client.name() + '. I\'m a SinusBot!');
     * });
     */
    getClients: () => {},

    /**
     * Returns a client by its temporary ID (changes when the client reconnects)
     * @param {string} id
     * @returns {Client}
     */
    getClientByID: (id) => {},

    /**
     * Returns a client by its name/nickname
     * @param {string} name
     * @returns {Client}
     */
    getClientByName: (name) => {},

    /**
     * Alias of getClientByName
     * @param {string} name
     * @returns {Client}
     */
    getClientByNick: (name) => {},

    /**
     * Returns an (online) client by its permanent id
     * @param {string} uniqueID
     * @returns {Client}
     */
    getClientByUniqueID: (uniqueID) => {},

    /**
     * Alias of getClientByUniqueID
     * @param {string} uniqueID
     * @returns {Client}
     */
    getClientByUID: (uniqueID) => {},

    /**
     * @description Sends a message to the server
     * @param {string} msg - Message to send
     * @example
     * var backend = require('backend');
     * backend.chat('Hello from SinusBot!');
     */
    chat: (msg) => {},

    /**
     * @description Creates a new channel
     * @since 0.9.16.3
     * @param {ChannelParams} channelParams
     * @returns {Channel} - Channel which was created
     */
    createChannel: (channelParams) => {},

    /**
     * Returns a servergroup by its ID
     * @param {string} id - ServerGroup ID
     * @returns {ServerGroup}
     */
    getServerGroupByID: (id) => {},

    /**
     * Returns a channelgroup by its ID
     * @param {string} id - ChannelGroup ID
     * @returns {ChannelGroup}
     */
    getChannelGroupByID: (id) => {},

    /**
     * Returns an array of all known server groups
     * @returns {ServerGroup[]}
     */
    getServerGroups: () => {},

    /**
     * Returns an array of all known channel groups
     * @returns {ChannelGroup[]}
     */
    getChannelGroups: () => {},

    /**
     * Returns the specific functions for Discord or TeamSpeak3
     * @since 1.0.0-alpha.6
     * @returns {Extended}
     */
    extended: () => {},
    
    /**
     * Set the bot client as away on TeamSpeak.
     * @param {boolean} away
     * @param {string} reason
     * @returns {boolean} success
     */
    setAway(away, reason) {},
}

/**
 * Either {@link ExtendedDiscord} or {@link ExtendedTS3}
 * @interface Extended
 * @see {ExtendedDiscord}
 * @see {ExtendedTS3}
 * @implements {ExtendedDiscord}
 * @implements {ExtendedTS3}
 */
class Extended {}