/**
 * @interface TeamSpeakServerInfo
 * @since 1.0.0-alpha.6
 */
class TeamSpeakServerInfo {

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} server name
   */
  name() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} server uid
   */
  uid() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} welcome message
   */
  welcomeMessage() { }

  /**
   * @since 1.0.0-alpha.6
   * @todo //TODO: version is always 0 due to wrong type
   * @returns {number}
   */
  platform() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {number} version of the server
   */
  version() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} host message
   */
  hostMessage() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} banner url
   */
  hostBannerURL() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} gfx url of the banner
   */
  hostBannerGFXURL() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {number} banner gfx interval in seconds
   */
  hostBannerGFXInterval() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} hostbutton url
   */
  hostButtonURL() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} hostbutton gfx url
   */
  hostButtonGFXURL() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {string} phoenetic server name
   */
  namePhonetic() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {number} teamspeak server id
   */
  serverID() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {number} server icon id
   */
  iconID() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {number} amount of reserved slots
   */
  reservedSlots() { }

  /**
   * @since 1.0.0-alpha.6
   * @todo //TODO: evaluate if it should return a string instead of a number
   * @returns {number} id of the default server group
   */
  defaultServerGroup() { }

  /**
   * @since 1.0.0-alpha.6
   * @todo //TODO: evaluate if it should return a string instead of a number
   * @returns {number} id of the default channel group
   */
  defaultChannelGroup() { }

  /**
   * @since 1.0.0-alpha.6
   * @todo //TODO: evaluate if it should return a string instead of a number
   * @returns {number} id of the default channel admin group
   */
  defaultChannelAdminGroup() { }

  /**
   * Retrieves the Encryption Mode of the server
   * @since 1.0.0-alpha.6
   * @returns {number} encryption mode (perChannel=0; GlobalOff=1; GlobalOn=2)
   */
  codecEncryptionMode() { }

  /**
   * @since 1.0.0-alpha.6
   * @returns {number} server creation timestamp
   */
  created() { }

  /**
   * Retrieve the raw object
   * @since 1.0.0-alpha.6
   * @returns {object} serverinfo as stringifyable object
   */
  asObject() { }
}