/**
 * @interface ExtendedTS3
 * @since 1.0.0-alpha.6
 */
class ExtendedTS3 {
  /**
   * Retrieves TeamSpeak Server Info
   * @since 1.0.0-alpha.6
   * @returns {TeamSpeakServerInfo} TeamSpeakServerInfo Object for current server
   */
  getServerInfo() { }

  /**
   * Retrieve Extended TeamSpeak Server Info
   * @since 1.0.0-alpha.6
   * @returns {TeamSpeakExtendedServerInfo} TeamSpeakExtednedServerInfo Object for current server
   */
  requestExtendedServerInfo() { }
}