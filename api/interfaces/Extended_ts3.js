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
   * 
   * This will fire a [serverinfo_int](#eventeventserverinfo_int) event with a {@link TeamSpeakExtendedServerInfo} object as callback parameter.
   * @since 1.0.0-alpha.6
   * @fires event#serverinfo_int
   * @returns {boolean} success
   */
  requestExtendedServerInfo() { }
}