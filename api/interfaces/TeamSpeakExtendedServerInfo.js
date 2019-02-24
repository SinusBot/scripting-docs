/**
 * @interface TeamSpeakExtendedServerInfo
 */
class TeamSpeakExtendedServerInfo {
  
    /**
     * @returns {number} returns the max clients which are allowed to connect to the server
     */
    maxClients() { }
  
    /**
     * @returns {number} returns the amount of clients which are connected to the server
     */
    clientsOnline() { }
  
    /**
     * @returns {number} returns the amount of created channels on the server
     */
    channelsOnline() { }
  
    /**
     * @returns {number} returns the servers uptime in seconds
     */
    uptime() { }
  
    /**
     * @returns {number} returns how many complains a client needs to have until he gets banned
     */
    complainAutobanCount() { }
  
    /**
     * @returns {number} returns the autoban duration
     */
    complainAutobanTime() { }
  
    /**
     * @returns {number} returns the seconds of when a complain gets removed
     */
    complainRemoveTime() { }
  
    /**
     * @returns {number} returns the number of clients need to be connected to a channel until all get silenced (enforces talkpower)
     */
    minClientsInChannelBeforeForcedSilence() { }
  
    /**
     * @todo add some meaningful description
     * @returns {number} 
     */
    antifloodPointsTickReduce() { }
  
    /**
     * @todo add some meaningful description
     * @returns {number}
     */
    antifloodPointsNeededCommandBlock() { }
  
    /**
     * @todo add some meaningful description
     * @returns {number}
     */
    antifloodPointsNeededIPBlock() { }
  
    /**
     * @todo add some meaningful description
     * @returns {number}
     */
    clientConnections() { }
  
    /**
     * @todo add some meaningful description
     * @returns {number}
     */
    queryClientConnections() { }
  
    /**
     * @returns {number} returns the amount of query clients connected to the server
     */
    queryClientsOnline() { }
  
    /**
     * @returns {number} retrieves the voiceservers port
     */
    port() { }
  
    /**
     * @returns {number} returns wether the server is set to autostart or not
     */
    autostart() { }
  
    /**
     * @todo evaluate what the machine id is
     * @returns {string}
     */
    machineID() { }
  
    /**
     * @returns {number} returns the needed security level to connect to the server
     */
    neededIdentitySecurityLevel() { }
  
    /**
     * @returns {number} returns wether logging for clients actions is enabled
     */
    logClient() { }
  
    /**
     * @returns {number} returns wether logging for query actions is enabled
     */
    logQuery() { }
  
    /**
     * @returns {number} returns wether logging for channel changes is enabled
     */
    logChannel() { }
  
    /**
     * @returns {number} returns wether logging for permissions changes is enabled
     */
    logPermissions() { }
  
    /**
     * @returns {number} returns wether logging for server actions is enabled
     */
    logServer() { }
  
    /**
     * @returns {number} returns wether logging for filetransfer actions is enabled
     */
    logFiletransfer() { }
  
    /**
     * @returns {number} returns the minimum client version needed to connect
     */
    minClientVersion() { }
  
    /**
     * @returns {number} returns the max download bandwith which is allowed for filetransfer
     */
    maxDownloadTotalBandwidth() { }
  
    /**
     * @returns {number} returns the max upload bandwith which is allowed for filetransfer
     */
    maxUploadTotalBandwidth() { }
  
    /**
     * @returns {number} returns the maximum bytes which are able to be downloaded via filetransfer
     */
    downloadQuota() { }
  
    /**
     * @returns {number} returns the maximum bytes which are able to be uploaded via filetransfer
     */
    uploadQuota() { }
  
    /**
     * @returns {number} returns the amount of bytes which have been downloaded this month
     */
    monthBytesDownloaded() { }
  
    /**
     * @returns {number} returns the amount of bytes which have been uploaded this month
     */
    monthBytesUploaded() { }
  
    /**
     * @returns {number} returns the total amount of bytes which have been downloaded
     */
    totalBytesDownloaded() { }
  
    /**
     * @returns {number} returns the total amount of bytes which have been uploaded
     */
    totalBytesUploaded() { }
  
    /**
   * Retrieve the raw object
   * @returns {object} returns the serverinfo as stringifyable object 
     */
    asObject() { }
}