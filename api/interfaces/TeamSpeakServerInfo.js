/**
 * @interface TeamSpeakServerInfo
 */
class TeamSpeakServerInfo {

  /**
   * @returns {string} returns the servers name
   */
  name() { }

  /**
   * @returns {string} returns the servers uid
   */
  UID() { }

  /**
   * @returns {string} returns the current welcome message 
   */
  welcomeMessage() { }

  /**
   * @todo version is always 0 due to wrong type
   * @returns {number} 
   */
  platform() { }

  /**
   * @returns {number} returns the version of the server 
   */
  version() { }

  /**
   * @returns {string} returns the host message
   */
  hostMessage() { }

  /**
   * @returns {string} returns the banner url
   */
  hostBannerURL() { }

  /**
   * @returns {string} returns the gfx interval of the banner 
   */
  hostBannerGFXURL() { }

  /**
   * @returns {number} returns the banner gfx interval in seconds 
   */
  hostBannerGFXInterval() { }


  /**
   * @returns {string} returns the hostbutton url
   */
  hostButtonURL() { }

  /**
   * @returns {string} returns the hostbutton gfx url
   */
  hostButtonGFXURL() { }

  /**
   * @returns {string} returns the phoenetic server name 
   */
  namePhonetic() { }

  /**
   * @returns {number} returns the current teamspeak server id
   */
  serverID() { }

  /**
   * @returns {number} returns the server icon id 
   */
  iconID() { }

  /**
   * @returns {number} returns the amount of reserved slots on a server 
   */
  reservedSlots() { }

  /**
   * @todo evaluate if it should return a string instead of a number
   * @returns {number} returns the id of the default server group 
   */
  defaultServerGroup() { }

  /**
   * @todo evaluate if it should return a string instead of a number
   * @returns {number} returns the id of the default channel group 
   */
  defaultChannelGroup() { }

  /**
   * @todo evaluate if it should return a string instead of a number
   * @returns {number} returns the id of the default channel admin group 
   */
  defaultChannelAdminGroup() { }

  /**
   * Retrieves the Encryption Mode of the server
   * @returns {number} returns the codecs encryption mode (perChannel=0; GlobalOff=1; GlobalOn=2)
   */
  codecEncryptionMode() { }

  /**
   * @returns {number} returns the server creation timestamp 
   */
  created() { }

  /**
   * Retrieve the raw object
   * @returns {object} returns the serverinfo as stringifyable object 
   */
  asObject() { }
}