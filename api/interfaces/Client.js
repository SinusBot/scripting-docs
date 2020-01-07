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
   * @returns {string} Unique ID of the client
   */
  uid() { }

  /**
   * Alias of uid()
   * @deprecated Please use uid() instead.
   * @returns {string} Unique ID of the client
   */
  uniqueId() { }

  /**
   * @returns {string} TeamSpeak database ID of the client
   */
  databaseID() { }

  /**
   * Alias of databaseID()
   * @returns {string} TeamSpeak database ID of the client
   */
  databaseId() { }

  /**
   * @returns {string} Country of the client
   */
  country() { }

  /**
   * @returns {string} Description of the client
   */
  description() { }

  /**
   * @since 0.9.19
   * @param {string} description
	 * @returns {boolean} success
   */
  setDescription(description) { }

  // /**
  //  * @param {string} description
	//  * @returns {boolean} success
  //  */
  // setDescriptionHex(description) { }

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
   * Returns the TS3 client URL in the format `client://0/uid~nickname`.
   * On discord it returns an @-mention in the format `<@uid>`.
   * @returns {string} Client URL / mention
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
   * @returns {boolean} success
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
   * @param {number} time - Amount of time (in seconds) the ban should last (-1 for permanent)
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
  removeFromServerGroup(group) { }

  /**
   * @description
   * Moves a client to another channel
   * 
   * *Note: This can also be used to disconnect a discord bot-instance from the voice chat with `backend.getBotClient().moveTo('')`.
   * @param {(Channel|string)} target - Channel the client should be moved to
   * @param {string} [password] - Password for the target channel, if required
   */
  moveTo(target, password) { }

  /**
   * @description Enables / disables subscription for this client; requires subscription mode
   * @param {boolean} val
   */
  subscribe(val) { }

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
   * @since 1.0.0-beta.10
   * @description Forces an update on the client
   * @returns {boolean}
   */
  requestConnectionInfoUpdate() { }

  /**
   * @description Returns the client type (Query=0; Normal=1)
   * @returns {string} client type
   */
  type() { }

  /**
   * @private
   * @returns {string} Something like: "Client{ ID: <...>, Name: <...> }"
   */
  string() {}
}