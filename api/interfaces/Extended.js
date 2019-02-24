/**
 * @interface Extended
 */
class Extended {
  /**
   * Retrieves info about the specific Guild
   * @todo Complete Discord Documentation
   * @param {string} guildId the guild id of which the info should be retrieved
   * @returns {object} the object with the guild info
   */
  getGuild(guildId) { }

  /**
   * Modifys the guild
   * @todo Complete Discord Documentation
   * @param {string} guildId the guild id which should be modified
   * @param {object} guildObject the data which should be modified
   * @returns {object} Json body
   */
  modifyGuild(guildId, guildObject) { }

  /**
   * Retrieves TeamSpeak Server Info
   * @returns {TeamSpeakServerInfo} retrieves the TeamSpeakServerInfo Object for the current server
   */
  getServerInfo() { }

  /**
   * Retrieve Extended TeamSpeak Server Info
   * @returns {TeamSpeakExtendedServerInfo} retrieves the TeamSpeakExtednedServerInfo Object for the current server
   */
  requestExtendedServerInfo() { }
}