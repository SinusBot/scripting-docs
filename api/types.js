/****************
 *  Interfaces  *
 ****************/

/**
 * @interface ApiEvent
 * @description This type is passed to a `api:<eventName>`-event, see [`api:<eventName>`](#eventeventapieventname) for more.
 * @see module:event#api:eventName
 */
class ApiEvent {
    /**
     * @returns {string} Name of the event
     */
    name() { }
    /**
     * @returns {object} Json body
     */
    data() { }
    /**
     * @returns {?User} User that called the event (or null, if unset)
     */
    user() { }
    /**
     * @returns {string} Remote address that triggered the call
     */
    remoteAddr() { }
    /**
     * @version 0.14
     * @returns {object} Key/Value map of the query parameters in the url
     */
    queryParams() { }
}

/**
 * @interface Client
 * @description Note: if the client is inivisible to the bot, some fields might not be available.
 */
class Client {
    /**
     * @returns {string} Name/nickname of the client
     */
    name() { }
    /**
     * Alias of name()
     * @returns {string} Name/nickname of the client
     */
    nick() { }
    /**
     * @returns {string} Phonetic name of the client; useful for tts
     */
    phoneticName() { }
    /**
     * @returns {string} Temporary ID of the client
     */
    id() { }
    /**
     * Alias of uniqueId()
     * @returns {string} Unique ID of the client
     */
    uid() { }
    /**
     * @returns {string} Unique ID of the client
     */
    uniqueId() { }
    // TODO: change ID to Id; Support for both versions!
    /**
     * @returns {string} TeamSpeak database ID of the client
     */
    databaseID() { }
    /**
     * @returns {string} Country of the client
     */
    country() { }
    /**
     * @returns {string} Description of the client
     */
    description() { }
    /**
     * @param {string} description
     * @version 0.9.19
     */
    setDescription(description) { }
    /**
     * @returns {number} Number of times the client has connected
     */
    getTotalConnectionsCount() { }
    /**
     * Returns true when this client is the bot itself
     * @returns {boolean}
     */
    isSelf() { }
    /**
     * Returns if the client is recording the conversation
     * @returns {string}
     */
    isRecording() { }
    /**
     * Returns if the client is muted (has its microphone disabled)
     * @returns {boolean}
     */
    isMuted() { }
    /**
     * Returns if the client is deaf (has its loudspeakers disabled)
     * @returns {boolean}
     */
    isDeaf() { }
    /**
     * Returns if the client is away
     * @returns {boolean}
     */
    isAway() { }
    /**
     * Returns the clients' servergroups
     * @returns {ServerGroup[]}
     */
    getServerGroups() { }
    /**
     * Returns the clients' channelgroup
     * @returns {ChannelGroup}
     */
    getChannelGroup() { }
    /**
     * Returns the clients' away message (if set)
     * @returns {string}
     */
    getAwayMessage() { }
    /**
     * Returns the clients' last ping time (latency)
     * @returns {number}
     */
    getPing() { }
    /**
     * Returns the clients' ip address (if available)
     * @returns {string}
     */
    getIPAddress() { }
    /**
     * Returns the clients' online time (requires special permissions)
     * @returns {number} in milliseconds
     */
    getOnlineTime() { }
    /**
     * Returns the clients' current idle time (requires special permissions)
     * @returns {number} in milliseconds
     */
    getIdleTime() { }
    /**
     * Returns the clients' packet loss percentage (requires special permissions)
     * @returns {number}
     */
    getPacketLoss() { }
    /**
     * Returns the clients' amount of received data (requires special permissions)
     * @returns {number}
     */
    getBytesReceived() { }
    /**
     * Returns the clients' amount of sent data (requires special permissions)
     * @returns {number}
     */
    getBytesSent() { }
    /**
     * Returns the total number of connections from that client
     * On TS3, this information has to be actively requested from the server. If the bot is unable to get it or hasn't received an answer in time, it will return <= 0 here.
     * @returns {number}
     */
    getTotalConnections() { }
    /**
     * Returns the time the client has been created / was first seen by the server
     * On TS3, this information has to be actively requested from the server. If the bot is unable to get it or hasn't received an answer in time, it will return <= 0 here.
     * @returns {number}
     */
    getCreationTime() { }
    /**
     * Returns an array of all channels the client is in; even if TS only uses one channel for a client at a time, other backends might provide several
     * @returns {Channel[]} Array of channels
     */
    getChannels() { }
    /**
     * @returns {Channel} Current audio channel the client is in
     */
    getAudioChannel() { }
    /**
     * Returns the TS3 client URL in the format `client://0/uid~nickname`
     * @returns {string} Client URL
     */
    getURL() { }
    /**
     * @description Compares two clients
     * @param {Client} otherClient
     * @returns {boolean} true, if both clients are the same
     */
    equals(otherClient) { }
    /**
     * @description Sends a message to the client
     * @param {string} msg - Message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.chat('Hello, ' + client.name());
     */
    chat(msg) { }
    /**
     * @description Pokes the client with a message
     * @param {string} msg - Message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.chat('Pokeypoke, ' + client.name() + '!');
     */
    poke(msg) { }
    /**
     * @description Bans a client
     * @param {number} time - Amount of time the ban should last
     * @param {string} msg - Message to send
     * @example
     * var backend = require('backend');
     * var client = backend.getClientByName('Bob');
     * client.ban(100, 'See you in 100 seconds, ' + client.name() + '!');
     */
    ban(time, msg) { }
    /**
     * @description Kicks the client from the server 
     * @param {string} msg - Message to send
     */
    kick(msg) { }
    /**
     * @description Kicks the client from the server
     * @param {string} msg - Message to send
     */
    kickFromServer(msg) { }
    /**
     * @description Kicks the client from the channel
     * @param {string} msg - Message to send
     */
    kickFromChannel(msg) { }
    /**
     * @description Adds a client to a specific ServerGroup
     * @param {(ServerGroup|string|number)} group - Servergroup the client should be added to
     */
    addToServerGroup(group) { }
    /**
     * @description Removes a client from a specific ServerGroup
     * @param {(ServerGroup|string|number)} group - Servergroup the client should be removed from
     */
    removeFromServerGroup(id) { }
    /**
     * @description
     * Moves a client to another channel
     * 
     * *Note: This can also be used to disconnect a discord bot-instance from the voice chat with `backend.getBotClient().moveTo('')`.
     * @param {Channel} target - Channel the client should be moved to
     * @param {string} [password] - Password for the target channel, if required
     */
    moveTo(target, password) { }
    /**
     * @description Enables / disables subscription for this client; requires subscription mode
     * @param {boolean} val
     */
    setSubscription(val) { }
    /**
     * @description Returns the platform of the client (Windows, Linux, MacOS)
     * @returns {string} platform
     */
    getPlatform() { }
    /**
     * @description Returns the version of the client
     * @returns {string} version
     */
    getVersion() { }
    /**
     * @description Returns the client type (Query=0; Normal=1)
     * @returns {string} client type
     */
    type() { }
}

/**
 * @interface Channel
 */
class Channel {
    /**
     * @returns {string} ID
     */
    id() { }
    /**
     * @returns {string} Name
     */
    name() { }
    /**
     * @returns {?Channel} Parent of channel or null if none is set
     */
    parent() { }
    /**
     * @version 0.9.16.3
     * @returns {number} Order / position of this channel.
     * For ts3 this is a numeric value determining the order in which channels are displayed below their parent. To set a new value, please use moveTo.
     */
    position() { }
    /**
     * @description delete the current channel
     * @version 0.9.17
     * @returns {boolean}
     */
    delete() { }
    /**
     * @description Moves the channel to a new parent with a new position value
     * @version 0.9.16.3
     * @param {(string|Channel)} parent - New parent channel
     * @param {number} order - New order value
     */
    moveTo(parent, order) { }
    /**
     * @param {string} name
     * @version 0.9.16
     */
    setName(name) { }
    /**
     * @returns {number} Type (0 = voice, 1 = text)
     */
    type() { }
    /**
     * @returns {string} Topic
     */
    topic() { }
    /**
     * @param {string} topic
     * @version 0.9.16
     */
    setTopic(topic) { }
    /**
     * @version 0.9.19
     * @returns {string} Description
     */
    description() { }
    /**
     * @param {string} description
     * @version 0.9.16
     */
    setDescription(description) { }
    /**
     * @returns {number} Codec
     */
    codec() { }
    /**
     * @param {number} codec
     * @version 0.9.16
     */
    setCodec(codec) { }
    /**
     * @returns {number} Codec quality
     */
    codecQuality() { }
    /**
     * @param {number} quality
     * @version 0.9.16
     */
    setCodecQuality(quality) { }
    /**
     * @returns {number} Configured number of clients the channel can hold (-1 if unlimited)
     */
    maxClients() { }
    /**
     * @param {boolean} maxClients Set to -1 for unlimited clients
     * @version 0.9.16
     */
    setMaxClients(maxClients) { }
    /**
     * @returns {number}
     */
    maxFamilyClients() { }
    /**
     * @param {boolean} maxFamilyClients
     * @version 0.9.16
     */
    setMaxFamilyClients(maxFamilyClients) { }
    /**
     * @returns {boolean} Whether channel is permanent or not
     */
    isPermanent() { }
    /**
     * @param {boolean} permanent
     * @version 0.9.16
     */
    setPermanent(permanent) { }
    /**
     * @returns {boolean} Whether channel is semi-permanent or not
     */
    isSemiPermanent() { }
    /**
     * @param {boolean} permanent
     * @version 0.9.16
     */
    setSemiPermanent(permanent) { }
    /**
     * @returns {boolean} Whether channel is the default one
     */
    isDefault() { }
    /**
     * @returns {boolean} Whether channel is password-protected or not
     */
    isPassworded() { }
    /**
     * @returns {boolean} Whether channel is encrypted or not
     */
    isEncrypted() { }
    /**
     * @param {boolean} encrypted
     * @version 0.9.16
     */
    setEncrypted(encrypted) { }
    /**
     * @description Compares two channels
     * @param {Channel} otherChannel
     * @returns {boolean} True, if both channels are the same
     */
    equals(otherChannel) { }
    /**
     * @description Sends a chat message to the channel
     * @param {string} msg - Message to send
     */
    chat(msg) { }
    /**
     * @returns {Client[]} Clients that are in this channel
     */
    getClients() { }
    /**
     * @returns {number} Number of clients that are in the channel 
     */
    getClientCount() { }
    /**
     * @description enables / disables subscription for this channel; requires subscription mode
     * @param {boolean} val
     */
    setSubscription(val) { }
    /**
     * @description Updates multiple channel parameters at once
     * @version 0.9.16.3
     * @param {ChannelParams} channelParams
     */
    update(channelParams) { }
    /**
     * @description Assigns a client to a channel group
     * @version 0.9.18
     * @param {Client} client
     * @param {ChannelGroup} channelGroup
     */
    setChannelGroup(client, channelGroup) { }
    /**
     * @description Gets the permissions for the channel from the server - this is an expensive call as the permissions are _not_ cached
     * @version 0.13.37
     * @returns {Permission[]}
     */
    getPermissions() { }
    /**
     * @description Adds/sets a new permission on the channel; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
     * @version 0.13.37
     * @param {string} id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
     * @returns {Permission}
     */
    addPermission(id) { }
}

/**
 * @interface ServerGroup
 */
class ServerGroup {
    /**
     * @returns {string} ID of the server group
     */
    id() { }
    /**
     * @returns {string} Name of the server group
     */
    name() { }
    /**
     * @returns {string} ID of the icon used for the channel group
     * @version 0.12.0
     */
    icon() { }
    /**
     * @description Adds a client by database ID to the servergroup
     * @returns {boolean} status if the request was successful
     * @version 0.13.37
     * @param {(Client|string|number)} client - The client can be a client object, string or number
     */
    addClientByDatabaseId(client) { }
    /**
     * @description Gets the permissions for the servergroup from the server - this is an expensive call as the permissions are _not_ cached
     * @version 0.13.37
     * @returns {Permission[]}
     */
    getPermissions() { }
    /**
     * @description Adds/sets a new permission to the servergroup; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
     * @version 0.13.37
     * @param {string} id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
     * @returns {Permission}
     */
    addPermission(id) { }
}

/**
 * @interface ChannelGroup
 */
class ChannelGroup {
    /**
     * @returns {string} ID of the channel group
     */
    id() { }
    /**
     * @returns {string} Name of the channel group
     */
    name() { }
    /**
     * @returns {string} ID of the icon used for the channel group
     * @version 0.12.0
     */
    icon() { }
    /**
     * @description Gets the permissions for the channelgroup from the server - this is an expensive call as the permissions are _not_ cached
     * @version 0.13.37
     * @returns {Permission[]}
     */
    getPermissions() { }
    /**
     * @description Adds/sets a new permission to the channelgroup; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
     * @version 0.13.37
     * @param {string} id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
     * @returns {Permission}
     */
    addPermission(id) { }
}

/**
 * @interface User
 */
class User {
    /**
     * @description Returns the ID of the user
     * @returns {string} ID of the User
     * @version 0.13.37
     */
    id() { }
    /**
     * @description Returns the name of the user
     * @returns {string} Name of the User
     * @version 0.13.37
     */
    name() { }
    /**
     * @description Returns the privileges of the user
     * @returns {number} Privileges of the user 
     * @version 0.13.37
     */
    privileges() { }
    /**
     * @description Returns the teamspeak unique ID of the bind client
     * @returns {string} teamspeak unique ID of the bind ts client 
     * @version 0.13.37
     */
    tsUid() { }
    /**
     * @description Returns the teamspeak group ID
     * @returns {string} ID of the bind teamspeak group
     * @version 0.13.37
     */
    tsGroupId() { }
    /**
     * @description Checks if an user is an admin
     * @returns {boolean} Admin status of the user 
     * @version 0.13.37
     */
    isAdmin() { }
    /**
     * @description Sets a new password to the user
     * @returns {boolean} Success or not 
     * @param {string} password - new password of the user
     * @version 0.13.37
     */
    setPassword(password) { }
    /**
     * @description Sets the teamspeak unique ID to the user
     * @returns {boolean} Success or not
     * @param {string} tsUid - teamspeak unique ID of the client 
     * @version 0.13.37
     */
    setTSUid(tsUid) { }
    /**
     * @description Sets the privileges to an user
     * @returns {boolean} Success or not
     * @param {number} privileges - New privileges of the user
     * @version 0.13.37
     */
    setPrivileges(privileges) { }
    /**
     * @description Adds an privilege to an user
     * @returns {boolean} Success or not 
     * @param {number} privilege - New privilege which should be added
     * @version 0.13.37
     */
    addPrivilege(privilege) { }
    /**
     * @description Removes an privilege from an user
     * @returns {boolean} Success or not 
     * @param {number} privilege - Privilege which should be removed
     * @version 0.13.37
     */
    removePrivilege(privilege) { }
    /**
     * @description Deletes an user
     * @returns {boolean} Success or not 
     * @version 0.13.37
     */
    delete() { }
}

/**
 * @interface Permission
 * @description handles channel, channelgroup and servergroup permissions; mainly for TS3
 * @version 0.13.37
 */
class Permission {
    /**
     * @version 0.13.37
     * @returns {string} ID of the permission
     */
    id() { }
    /**
     * @version 0.13.37
     * @returns {string} Name of the permission
     */
    name() { }
    /**
     * @version 0.13.37
     * @returns {number} permission value
     */
    value() { }
    /**
     * @version 0.13.37
     * @returns {boolean} true, if skip flag has been set - only applicable for ServerGroups
     */
    skip() { }
    /**
     * @version 0.13.37
     * @returns {boolean} true, if negated flag has been set - only applicable for ServerGroups
     */
    negated() { }
    /**
     * @description sets the value of the permission; you need to call save() to apply changes
     * @version 0.13.37
     * @param {boolean} value - true, if permission should be negated, false otherwise
     * @returns {boolean}
     */
    setNegated(value) { }
    /**
     * @description sets the skip flag - only applicable for ServerGroups; you need to call save() to apply changes
     * @version 0.13.37
     * @param {boolean} value - true, if permission should be skipped, false otherwise
     * @returns {boolean}
     */
    setSkip(value) { }
    /**
     * @description sets the negated flag - only applicable for ServerGroups; you need to call save() to apply changes
     * @version 0.13.37
     * @param {number} value - new value for the permission
     * @returns {boolean}
     */
    setValue(value) { }
    /**
     * @description applies the changed settings
     * @version 0.13.37
     * @returns {boolean}
     */
    save() { }
    /**
     * @description delete the current permission
     * @version 0.13.37
     * @returns {boolean}
     */
    delete() { }
}

/**
 * @interface Track
 */
class Track {
    /**
     * @returns {string} Unique ID of the track
     */
    id() { }
    /**
     * @returns {string} Unique url for the track
     */
    url() { }
    /**
     * @returns {string} Type of the file
     */
    type() { }
    /**
     * @returns {string} Title of the track
     */
    title() { }
    /**
     * @returns {string} Artist of the track
     */
    artist() { }
    /**
     * @returns {string} Temporary title of the track; e.g. when playing radio stations
     */
    tempTitle() { }
    /**
     * @returns {string} Temporary artist of the track; e.g. when playing radio stations
     */
    tempArtist() { }
    /**
     * @returns {string} Album of the track
     */
    album() { }
    /**
     * @returns {string} Genre of the track
     * @version 0.9.16
     */
    genre() { }
    /**
     * @returns {number} Duration of the track
     * @version 0.9.16
     */
    duration() { }
    /**
     * @returns {number} Tracknumber of the track
     * @version 0.9.16
     */
    trackNumber() { }
    /**
     * @returns {string} Path to the thumbnail, if any
     */
    thumbnail() { }
    /**
     * @returns {string} Original filename
     */
    filename() { }
    /**
     * @description Starts playback of the track
     * @returns {boolean}
     */
    play() { }
    /**
     * @description Adds the track to the queue
     * @returns {boolean}
     */
    enqueue() { }
    // /**
    //  * @description Adds the track as the first entry in the queue
    //  * @returns {boolean}
    //  */
    // playNext: function() {},
    /**
     * @description Downloads a thumbnail from the internet and stores it for the given track
     * @param {string} url - Url to download the thumbnail from (limited to X MB)
     */
    setThumbnailFromURL(url) { }
    /**
     * @description Removes the thumbnail of a track
     */
    removeThumbnail() { }
}

/**
 * @interface Playlist
 */
class Playlist {
    /**
     * @returns {string} Unique identifier of the playlist
     */
    id() { }
    /**
     * @returns {string} Name of the playlist
     */
    name() { }
    /**
     * @returns {PlaylistTrack[]} List of all tracks inside the given playlist
     */
    getTracks() { }
    /**
     * @description Sets the playlist to active; will continue playing songs from this playlist
     * @returns {boolean}
     */
    setActive() { }
}

/**
 * @interface PlaylistTrack
 * @description Track in a Playlist
 */
class PlaylistTrack {
    /**
     * @returns {string} Title of the track
     */
    title() { }
    /**
     * @returns {string} Artist of the track
     */
    artist() { }
    /**
     * @returns {string} Album of the track
     */
    album() { }
    /**
     * @returns {string} Url of the track (internal or external)
     */
    url() { }
    /**
     * @description Starts playback of the track
     * @returns {boolean} success
     */
    play() { }
    // /**
    //  * adds the track to the queue
    //  * @returns {boolean}
    //  */
    // enqueue: function() {},
    // /**
    //  * adds the track as the first entry in the queue
    //  * @returns {boolean}
    //  */
    // playNext: function() {}
}

/**
 * @interface Bytes
 * @version 0.9.16
 */
class Bytes {
    /**
     * @returns {string} String representation of the bytes
     */
    toString() { }
}

//@interface 

/***********
 *  Types  *
 ***********/

/**
 * @typedef {object} Message
 * @property {string} text - Text of the message
 * @property {Channel} channel - Channel (if given) this message has been sent on
 * @property {Client} client - Client that sent the message
 * @property {number} mode - Number representing the way this message has been sent
 * (1 = private, 2 = channel, 3 = server)
 */

/**
 * @typedef {object} MoveInfo
 * @property {Channel} [fromChannel] - Old channel (or null if the client just got online/changed visibility)
 * @property {Channel} [toChannel] - New channel (or null if the client just went offline/changed visibility)
 * @property {Client} client - Client that was moved
 * @property {Client} invoker - Client that invoked the move
 */

/**
 * @typedef {object} ClientServergroupEvent
 * @property {Client} client - Client that has been added / removed
 * @property {Client} invoker - Client that added client to the group
 * @property {ServerGroup} serverGroup - Server Group
 */

/**
 * @typedef {object} ChannelParams
 * @property {string} name - Displayname of the channel; mandatory on create
 * @property {(Channel|number|string)} parent - Parent channel (you can also use the channelId); ignored on update, mandatory on create
 * @property {string} description
 * @property {string} topic
 * @property {string} password
 * @property {number} codec - See codec types for explanation
 * @property {number} codecQuality
 * @property {boolean} encrypted - `true` by default
 * @property {boolean} permanent
 * @property {boolean} semiPermanent
 * @property {number} position
 * @property {number} maxClients - Set to `-1` for unlimited clients
 * @property {number} maxFamilyClients
 * @property {boolean} default - Whether the channel is the default channel 
 * @property {number} neededTalkPower - TS3 only
 * @property {number} deleteDelay - TS3 only
 * @property {number} icon - TS3 only
 * @description
 * Used to update or create a channel;
 * When creating a channel parent and name are mandatory for TS3;
 * When updating a channel parent will be ignored (use moveTo instead)
 */

//@typedef {object} 