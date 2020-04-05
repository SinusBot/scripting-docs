/**
 * @event api:eventName
 * @memberof event
 * @param {ApiEvent} event - API event
 * @description Gets fired whenever api:<eventName> is triggered via the http API.
 * You can trigger this by sending a http request to `{sinusbot address}/api/v1/bot/i/{instanceID}/event/{eventName}` with the `POST` method and the correct headers.
 * This can only be called by users that are logged in and authenticated via the `Authorization` header. For a public api event see [`public:<your event name>`](#eventeventpubliceventname).
 * @example
 * // ** SinusBot Script **
 * 
 * event.on('api:logMyFoo', ev => {
 *     engine.log(ev.data().foo);
 * });
 * 
 * // this is the short form of: function(ev) {return {something: '...'}}
 * event.on('api:respondWithSomething', ev => ({
 *     something: 'Hello browser, how are you doing?'
 * }));
 * 
 * @example
 * // ** JavaScript on the web-page **
 * 
 * // This example uses jQuery but you can very easily rewrite it to work without it by using "fetch".
 * // See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * 
 * // This assumes you're logged in and the webpage is included with the script.
 * // HTTP API methods to Login and get a list of the Instances are documented here: https://www.sinusbot.com/api/
 * // Information on how to include a webpage can be found here: https://sinusbot.github.io/docs/scripts/#enableweb-bool
 * 
 * //TODO: Rewrite this to use fetch.
 * 
 * function sendDataToScript(instanceID) {
 *     $.ajax({
 *         url: '/api/v1/bot/i/' + instanceID + '/event/logMyFoo',
 *         method: 'POST',
 *         headers: {
 *             'Content-Type': 'application/json',
 *             'Authorization': 'bearer ' + window.localStorage.token
 *         },
 *         data: JSON.stringify({"foo": "bar"})
 *     });
 * }
 * 
 * function requestDataFromScript(instanceID) {
 *     $.ajax({
 *         url: '/api/v1/bot/i/' + instanceID + '/event/respondWithSomething',
 *         method: 'POST',
 *         headers: {
 *             'Content-Type': 'application/json',
 *             'Authorization': 'bearer ' + window.localStorage.token
 *         },
 *         data: '{}'
 *     }).done(function (data) {
 *         console.log("Response:");
 *         console.log(data);
 *     });
 * }
 */
/**
 * @event public:eventName
 * @memberof event
 * @param {ApiEvent} event - API event
 * @description Gets fired whenever public:<eventName> is triggered via the http API.
 * You can trigger this by sending a http request to `{sinusbot address}/api/v1/b/i/{instanceID}/event/{eventName}` with the `POST` method.
 * This is similar to [`api:<your event name>`](#eventeventapieventname) with the only difference being
 * that no authentication is required.
 * @example
 * event.on('api:foobar', ev => {
 *     engine.log('Received foobar event from api!');
 *     // JSON data is in: ev.data()
 * });
 * 
 * // This event can be triggered by sending a http `POST` request to `{sinusbot address}/api/v1/b/i/{instanceID}/event/foobar`.
 * // Data can be passed by sening JSON in the request body.
 */
/**
 * @event chat
 * @memberof event
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
 * @event message
 * @memberof event
 * @param {DiscordMessage} msg - Message
 * @description
 * Note: This event is **only for discord messages**. For both TS3 and Discord messages use the chat event.
 * 
 * This event gets triggered whenever a discord message has been received.
 * @example
 * var event = require('event');
 * 
 * event.on('message', msg => {
 *     // like message
 *     msg.createReaction('👍');
 * });
 */
/**
 * @event poke
 * @memberof event
 * @param {Message} msg - Message
 * @description Gets fired whenever the bot is poked
 * @example
 * var event = require('event');
 * var engine = require('engine');
 * 
 * event.on('poke', function(msg) {
 *     engine.log('Got poke message "' + msg.text + '" from ' + msg.client.name());
 * });
 */
/**
 * @event typing
 * @memberof event
 * @param {Client} client - Client that started typing
 * @description Gets fired whenever a client starts typing in a chat with the bot
 */
/**
 * @event track
 * @memberof event
 * @param {Track} track
 * @description Gets fired whenever a new track starts
 */
/**
 * @event trackInfo
 * @memberof event
 * @param {Track} track
 * @description Gets fired whenever a track changes its information (like radio stations)
 */
/**
 * @event trackEnd
 * @memberof event
 * @param {Track} track
 * @param {string} callback - Callback string
 * @description Gets fired whenever a track has stopped playing
 */
/**
 * @event ytdl.success
 * @memberof event
 * @param {object} ev
 * @param {string} ev.url - YouTube URL
 * @param {string} ev.jobId - Job ID
 * @param {string} [ev.trackId] - Track ID (only when downloaded)
 * @description Gets fired whenever a track was successfully downloaded via ytdl
 * @example
 * event.on("ytdl.success", ev => {
 *     engine.log(`Successfully downloaded a YouTube Video: ${ev.url}, jobId: ${ev.jobId}, trackId: ${ev.trackId}`)
 * })
 */
/**
 * @event ytdl.error
 * @memberof event
 * @param {object} ev
 * @param {string} ev.url - YouTube URL
 * @param {string} ev.jobId - Job ID
 * @param {string} message - Error Message
 * @description Gets fired whenever a download via ytdl fails
 * @example
 * event.on("ytdl.error", (ev, message) => {
 *     engine.log(`Error while downloading a YouTube Video: ${ev.url}, jobId: ${ev.jobId}, message: ${message}`)
 * })
 */
/**
 * @event connect
 * @memberof event
 * @description Gets fired whenever a connection with the server has been established
 */
/**
 * @event connectionFailed
 * @memberof event
 * @param {string} reason
 * @description Gets fired whenever the client is unable to connect to a server
 */
/**
 * @event disconnect
 * @memberof event
 * @description Gets fired whenever the bots connection to the server is closed
 */
/**
 * @event clientMove
 * @memberof event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client moves, joins or disconnects
 */
/**
 * @event clientNick
 * @memberof event
 * @param {Client} client
 * @param {string} oldNick
 * @description Gets fired whenever a clients nickname is changed
 */
/**
 * @event clientVisible
 * @memberof event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client becomes visible to the bot
 */
/**
 * @event clientInvisible
 * @memberof event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client becomes invisible to the bot
 */
/**
 * @event clientKicked
 * @memberof event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client gets kicked from the server
 */
/**
 * @event clientKickedFromChannel
 * @memberof event
 * @param {MoveInfo} moveInfo
 * @description Gets fired whenever a client gets kicked from a channel
 */
/**
 * @event clientIPAddress
 * @memberof event
 * @param {Client} client
 * @description Gets fired whenever a clients IP address changes or has initially been fetched
 */
/**
 * @event clientAway
 * @memberof event
 * @param {Client} client
 * @description Gets fired whenever a client sets himself as away
 */
/**
 * @event clientBack
 * @memberof event
 * @param {Client} client
 * @description Gets fired whenever a client removes himself as away
 */
/**
 * @event clientRecord
 * @memberof event
 * @param {Client} client
 * @description Gets fired whenever a client starts recording
 */
/**
 * @event clientRecordStop
 * @memberof event
 * @param {Client} client
 * @description Gets fired whenever a client stops recording
 */
/**
 * @event clientMute
 * @memberof event
 * @param {Client} client
 * @description Gets fired whenever a client mutes his microphone
 */
/**
 * @event clientUnmute
 * @memberof event
 * @param {Client} client
 * @description Gets fired whenever a client unmutes his microphone
 */
/**
 * @event clientDeaf
 * @memberof event
 * @since 0.9.18
 * @param {Client} client
 * @description Gets fired whenever a client mutes his sound
 */
/**
 * @event clientUndeaf
 * @memberof event
 * @since 0.9.18
 * @param {Client} client
 * @description Gets fired whenever a client unmutes his sound
 */
/**
 * @event clientBanned
 * @memberof event
 * @since 1.0.0-beta.6
 * @param {string} message the ban reason
 * @param {Client} invoker user which created the ban
 * @param {Channel} fromChannel the channel the client was in
 * @param {Client} client user which has been banned
 * @param {number} time the bantime in seconds
 * @description Gets fired whenever a client is banned from a TS server
 */
/**
 * @event serverGroupAdded
 * @memberof event
 * @param {ClientServerGroupEvent} event
 * @description Gets fired whenever a client got added to a server group
 */
/**
 * @event serverGroupRemoved
 * @memberof event
 * @param {ClientServerGroupEvent} event
 * @description Gets fired whenever a client got removed from a server group
 */
/**
 * @event channelCreate
 * @memberof event
 * @param {Channel} channel - Channel that got created
 * @param {Client} invoker - Client that created the channel
 * @description Gets fired whenever a channel is created
 */
/**
 * @event channelUpdate
 * @memberof event
 * @param {Channel} channel - Channel that got updated
 * @param {Client} invoker - Client that updated the channel
 * @description Gets fired whenever a channel is updated
 */
/**
 * @event channelDelete
 * @memberof event
 * @param {Channel} channel - Channel that got deleted
 * @param {Client} invoker - Client that deleted the channel
 * @description Gets fired whenever a channel is deleted
 */
/**
 * @event clientConnectionInfoUpdate
 * @memberof event
 * @type {Client} client - the client which got updated
 * @description gets fired when a client connection info gets updated
 * @since 1.0.0-beta.10
 */
/**
 * @event speech
 * @memberof event
 * @param {object} ev - Event data
 * @param {Client} ev.client - Client
 * @param {string} ev.text - Recognized text
 * @since 0.13.37
 * @description
 * This event gets triggered whenever the bot recognizes a voice command that the script registered, assuming:
 * 1) SpeechRecognition was installed
 * 2) SpeechRecognition is enabled in the config.ini
 * 3) The voice command was registered by the script in registerPlugin
 * 4) AudioReturnChannel is set to 2
 * 
 * Check out the [documentation](https://sinusbot.github.io/docs/speechrecognition/) for reqirements and instructions on how to install it.
 * @example
 * var event = require('event');
 * var engine = require('engine');
 * var audio = require('audio');
 * 
 * audio.setAudioReturnChannel(2)
 * 
 * event.on('speech', function(ev) {
 *     engine.log('Got speech command "' + ev.text + '" from ' + ev.client.name());
 * });
 */
/**
 * @event talkerCount
 * @memberof event
 * @param {number} number - Number of users that are currently talking in the channel
 * @description Gets fired whenever the number of users that are currently talking in the channel changes
 */
/**
 * @event unload
 * @memberof event
 * @description Gets fired whenever the script is going to be unloaded or reloaded; use this to clean up or save stuff
 */
/**
 * @event load
 * @memberof event
 * @description Gets fired when all scripts have been loaded
 */
/**
 * @event discord:eventName
 * @memberof event
 * @param {object} ev - Discord event data
 * @description
 * This event gets triggered whenever a discord event got received.
 * Every event will be emitted in uppercase and the spaces will be replaced by underscores.
 * All available discord events can be found in the [discord documentation](https://discordapp.com/developers/docs/topics/gateway#events)
 * @example
 * var event = require('event');
 * var engine = require('engine');
 * 
 * event.on('discord:GUILD_CREATE', function (ev) {
 *   engine.log('GUILD_CREATE' + JSON.stringify(ev));
 * });
 */
/**
 * @event ws.connect
 * @memberof event
 * @since 0.9.20
 * @see ws
 * @param {string} id - ID of the new connection
 */
/**
 * @event ws.close
 * @memberof event
 * @since 0.9.20
 * @see ws
 * @param {string} id - ID of the closed connection
 */
/**
 * @event ws.error
 * @memberof event
 * @since 0.9.20
 * @see ws
 * @param {string} id - ID of the connection
 * @param {string} error - Error
 */
/**
 * @event ws.data
 * @memberof event
 * @since 0.9.20
 * @see ws
 * @param {string} id - ID of the connection
 * @param {number} type - Type of the message
 * @param {Bytes} data - Data object
 */
/**
 * @event serverinfo_int
 * @memberof event
 * @since 1.0.0-alpha.6
 * @see backend.requestExtendedServerInfo
 * @param {TeamSpeakExtendedServerInfo} serverinfo
 * @description
 * This event is fired when calling [backend.extended().requestExtendedServerInfo()](#extendedts3requestextendedserverinfo) when the backend is TS3.
 */


/**
 * @module event
 * @example
 * var event = require('event');
 * var engine = require('engine');
 * 
 * event.on('chat', function(ev) {
 *     engine.log('Got message "'+ev.text +'" from '+ ev.client.name());
 * })
 */
module.exports = {
    /**
     * @description Registers an event listener
     * @param {string} eventName - Event to listen to
     * @param {function} callback - Gets called when the given event is triggered
     */
    on: (eventName, callback) => {},

    /**
     * @description Emits an event to the current instance
     * @param {string} eventName - Name of the event to be emitted
     * @param {object} data - A data object to be sent with the event
     */
    emit: (eventName, data) => {},

    /**
     * @description Emits an event to all instances
     * @param {string} eventName - Name of the event to be emitted
     * @param {object} data - A data object to be sent with the event
     */
    broadcast: (eventName, data) => {},
}
