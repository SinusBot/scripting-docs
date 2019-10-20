/**
 * @interface Channel
 */
class Channel {
  /**
   * @returns {string} ID
   */
  id() {}
  
  /**
   * @returns {string} Name
   */
  name() {}

  /**
   * @returns {?Channel} Parent of channel or null if none is set
   */
  parent() {}

  /**
   * @since 0.9.16.3
   * @returns {number} Order / position of this channel.
   * For ts3 this is a numeric value determining the order in which channels are displayed below their parent. To set a new value, please use moveTo.
   */
  position() {}
  
	/**
	 * @param {number} pos
	 */
  setPosition(pos) {}

  /**
   * @description delete the current channel
   * @since 0.9.17
   * @returns {boolean}
   */
  delete() {}

  /**
   * @description Moves the channel to a new parent with a new position value
   * @since 0.9.16.3
   * @param {(string|Channel)} parent - New parent channel
   * @param {number} order - New order value
   */
  moveTo(parent, order) {}

  /**
   * @param {string} name
   * @since 0.9.16
   */
  setName(name) {}

  /**
   * @returns {number} Type (0 = voice, 1 = text)
   */
  type() {}

  /**
   * @returns {string} Topic
   */
  topic() {}

  /**
   * @param {string} topic
   * @since 0.9.16
   */
  setTopic(topic) {}

  /**
   * @since 0.9.19
   * @returns {string} Description
   */
  description() {}

  /**
   * @param {string} description
   * @since 0.9.16
   */
  setDescription(description) {}

  /**
   * @returns {number} Codec
   */
  codec() {}

  /**
   * @param {number} codec
   * @since 0.9.16
   */
  setCodec(codec) {}

  /**
   * @returns {number} Codec quality
   */
  codecQuality() {}

  /**
   * @param {number} quality
   * @since 0.9.16
   */
  setCodecQuality(quality) {}

  /**
   * @returns {number} Configured number of clients the channel can hold (-1 if unlimited)
   */
  maxClients() {}

  /**
   * @param {boolean} maxClients Set to -1 for unlimited clients
   * @since 0.9.16
   */
  setMaxClients(maxClients) {}

  /**
   * @returns {number}
   */
  maxFamilyClients() {}

  /**
   * @param {boolean} maxFamilyClients
   * @since 0.9.16
   */
  setMaxFamilyClients(maxFamilyClients) {}

  /**
   * @returns {boolean} Whether channel is permanent or not
   */
  isPermanent() {}

  /**
   * @param {boolean} permanent
   * @since 0.9.16
   */
  setPermanent(permanent) {}

  /**
   * @returns {boolean} Whether channel is semi-permanent or not
   */
  isSemiPermanent() {}

  /**
   * @param {boolean} permanent
   * @since 0.9.16
   */
  setSemiPermanent(permanent) {}

  /**
   * @returns {boolean} Whether channel is the default one
   */
  isDefault() {}

	/**
	 * @param {boolean} bool Whether channel is the default one
	 */
	setDefault(bool) {}

  /**
   * @returns {boolean} Whether channel is password-protected or not
   */
  isPassworded() {}
  
	/**
	 * @param {string} password Password
	 */
	setPassword(password) {}

  /**
   * @returns {boolean} Whether channel is encrypted or not
   */
  isEncrypted() {}

  /**
   * @param {boolean} encrypted
   * @since 0.9.16
   */
  setEncrypted(encrypted) {}

  /**
   * @description Compares two channels
   * @param {Channel} otherChannel
   * @returns {boolean} True, if both channels are the same
   */
  equals(otherChannel) {}

  /**
   * @description Sends a chat message to the channel
   * @param {string} msg - Message to send
   * @returns {boolean} success
   */
  chat(msg) {}

  /**
   * @returns {Client[]} Clients that are in this channel
   */
  getClients() {}

  /**
   * @returns {number} Number of clients that are in the channel 
   */
  getClientCount() {}

  /**
   * @description enables / disables subscription for this channel; requires subscription mode
   * @param {boolean} val
   */
  subscribe(val) {}

  /**
   * @description Updates multiple channel parameters at once
   * @since 0.9.16.3
   * @param {ChannelParams} channelParams
   */
  update(channelParams) {}

  /**
   * @description Assigns a client to a channel group
   * @since 0.9.18
   * @param {Client} client
   * @param {ChannelGroup} channelGroup
   */
  setChannelGroup(client, channelGroup) {}

  /**
   * @description Gets the permissions for the channel from the server - this is an expensive call as the permissions are _not_ cached
   * @since 0.13.37
   * @returns {Permission[]}
   */
  getPermissions() {}

  /**
   * @description Adds/sets a new permission on the channel; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
   * @since 0.13.37
   * @param {string} id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
   * @returns {Permission}
   */
  addPermission(id) {}

	/**
	 * @returns {string}
	 */
	getURL() {}
  
	/**
   * Gets the messages of a discord channel.
   * @since 1.0.0-beta.2
   * @see https://discordapp.com/developers/docs/resources/channel#get-channel-messages
	 * @param {object} params e.g. `{ around: 'messageid', limit: '1' }`, see [discord documentation](https://discordapp.com/developers/docs/resources/channel#get-channel-messages)
	 * @param {function} callback (error, messages)
	 * @returns {boolean}
	 */
	getMessages(params, callback) {}

  /**
   * @private
   * @returns {string} Something like: "Channel{ ID: <...>, Name: <...> }"
   */
  string() {}
}