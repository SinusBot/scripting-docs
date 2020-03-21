/**
 * @interface ExtendedDiscord
 * @since 1.0.0-alpha.6
 * @todo //TODO: fix return types and callbacks
 */
class ExtendedDiscord {
    /**
     * Retrieves info about the specific Guild
     * @since 1.0.0-alpha.6
     * @param {string} guildId the guild id of which the info should be retrieved
     * @param {function} callback => (err, object)
     */
    getGuild(guildId, callback) { }

    /**
     * Modifys the guild
     * @since 1.0.0-alpha.6
     * @param {string} guildId Guild ID
     * @param {object} guildObject [Guild Object](https://discordapp.com/developers/docs/resources/guild#guild-object) with the data that should be modified
     * @param {function} [callback] => (err, object)
     */
    modifyGuild(guildId, guildObject, callback) { }

    /**
     * Sends a presence or status update.
     * @see https://discordapp.com/developers/docs/topics/gateway#update-status
     * @since 1.0.0-alpha.6
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
     * @param {object} status
     * @param {object} [status.game] Activity
     * @param {string} [status.game.name] Activity's name
     * @param {number} [status.game.type] Activity's type: 0 (game), 1 (streaming), 2 (listening)
     * @param {string} [status.game.url] Only https://twitch.tv/ urls work.
     * @param {string} status.status [Status Type](https://discordapp.com/developers/docs/topics/gateway#update-status-status-types). Either online, dnd, idle, invisible or offline.
     * @param {boolean} status.afk Whether or not the client is afk.
     * @param {number}  [status.since] Unix time (in milliseconds) of when the client went idle, or null if the client is not idle.
     */
    setStatus(status) { }

    /**
     * Get a channel by ID. Returns a channel object.
     * @see https://discordapp.com/developers/docs/resources/channel#get-channel
     * @since 1.0.0-alpha.6
     * @param {string} channelId
     * @param {function} callback => (err, [ChannelObject](https://discordapp.com/developers/docs/resources/channel#channel-object))
     */
    getChannel(channelId, callback) { }

    /**
     * Update a channels settings. Requires the `MANAGE_CHANNELS` permission for the guild.
     * @see https://discordapp.com/developers/docs/resources/channel#modify-channel
     * @since 1.0.0-alpha.6
     * @param {string} channelId
     * @param {object} data [Channel Params](https://discordapp.com/developers/docs/resources/channel#modify-channel-json-params)
     * @param {function} [callback] => (err, object)
     */
    modifyChannel(channelId, data, callback) { }

    /**
     * Delete a channel, or close a private message.
     * Requires the `MANAGE_CHANNELS` permission for the guild.
     * Deleting a category does not delete its child channels;
     * they will have their parent_id removed and a Channel Update Gateway event will fire for each of them.
     * @see https://discordapp.com/developers/docs/resources/channel#deleteclose-channel
     * @since 1.0.0-alpha.6
     * @param {string} channelId
     * @param {function} [callback] => (err, object)
     */
    deleteChannel(channelId, callback) { }

    /**
     * Returns the messages for a channel.
     * If operating on a guild channel, this endpoint requires the `VIEW_CHANNEL` permission to be present on the current user.
     * If the current user is missing the `READ_MESSAGE_HISTORY` permission in the channel then this will return no messages (since they cannot read the message history).
     * @see https://discordapp.com/developers/docs/resources/channel#get-channel-messages
     * @since 1.0.0-alpha.6
     * @param {string} channelId
     * @param {function} callback => (err, object)
     */
    getChannelMessages(channelId, callback) { }

    /**
     * Returns a specific message in the channel.
     * If operating on a guild channel, this endpoint requires the `READ_MESSAGE_HISTORY` permission to be present on the current user.
     * @see https://discordapp.com/developers/docs/resources/channel#get-channel-message
     * @since 1.0.0-alpha.6
     * @param {string} channelId
     * @param {function} callback => (err, object)
     */
    getChannelMessage(channelId, callback) { }

    /**
     * Post a message to a guild text or DM channel.
     * If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.
     * If the tts field is set to true, the `SEND_TTS_MESSAGES` permission is required for the message to be spoken.
     * @see https://discordapp.com/developers/docs/resources/channel#create-message
     * @since 1.0.0-alpha.6
     * @param {string} channelId
     * @param {object} data [Message Params](https://discordapp.com/developers/docs/resources/channel#create-message-params)
     * @param {function} [callback] => (err, object)
     */
    createMessage(channelId, data, callback) { }

    /**
     * Sends a raw http request to the discord API and therefore allows potentially unsafe and arbitrary API calls.
     * Check the [discord documentation](https://discordapp.com/developers/docs/resources/channel) for available API calls.
     * 
     * **Important:** In previous SinusBot versions (1.0.0-beta.6 or older) this method was protected and only works if `requiredModules: ['discord-dangerous']` is set in the script manifest.
     * @since 1.0.0-alpha.6
     * @param {string} method HTTP Method
     * @param {string} path HTTP path
     * @param {object} data Data (JSON Object)
     * @param {function} [callback] => (err, object)
     */
    rawCommand(method, path, data, callback) { }
}