/**
 * @interface TeamSpeakExtendedServerInfo
 * @since 1.0.0-alpha.6
 */
class TeamSpeakExtendedServerInfo {

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} max clients which are allowed to connect to the server
     */
    maxClients() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} amount of clients which are connected to the server
     */
    clientsOnline() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} amount of created channels on the server
     */
    channelsOnline() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} server uptime in seconds
     */
    uptime() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} how many complains a client needs to have until he gets banned
     */
    complainAutobanCount() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} autoban duration
     */
    complainAutobanTime() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} seconds of when a complain gets removed
     */
    complainRemoveTime() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} number of clients need to be connected to a channel until all get silenced (enforces talkpower)
     */
    minClientsInChannelBeforeForcedSilence() { }

    /**
     * @since 1.0.0-alpha.6
     * @todo //TODO: add some meaningful description
     * @returns {number}
     */
    antifloodPointsTickReduce() { }

    /**
     * @since 1.0.0-alpha.6
     * @todo //TODO: add some meaningful description
     * @returns {number}
     */
    antifloodPointsNeededCommandBlock() { }

    /**
     * @since 1.0.0-alpha.6
     * @todo //TODO: add some meaningful description
     * @returns {number}
     */
    antifloodPointsNeededIPBlock() { }

    /**
     * @since 1.0.0-alpha.6
     * @todo //TODO: add some meaningful description
     * @returns {number}
     */
    clientConnections() { }

    /**
     * @since 1.0.0-alpha.6
     * @todo //TODO: add some meaningful description
     * @returns {number}
     */
    queryClientConnections() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} amount of query clients connected to the server
     */
    queryClientsOnline() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} voiceservers port
     */
    port() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} wether the server is set to autostart or not
     */
    autostart() { }

    /**
     * @since 1.0.0-alpha.6
     * @todo //TODO: evaluate what the machine id is
     * @returns {string}
     */
    machineID() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} needed security level to connect to the server
     */
    neededIdentitySecurityLevel() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} wether logging for clients actions is enabled
     */
    logClient() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} wether logging for query actions is enabled
     */
    logQuery() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} wether logging for channel changes is enabled
     */
    logChannel() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} wether logging for permissions changes is enabled
     */
    logPermissions() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} wether logging for server actions is enabled
     */
    logServer() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} wether logging for filetransfer actions is enabled
     */
    logFiletransfer() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} minimum client version needed to connect
     */
    minClientVersion() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} max download bandwith which is allowed for filetransfer
     */
    maxDownloadTotalBandwidth() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} max upload bandwith which is allowed for filetransfer
     */
    maxUploadTotalBandwidth() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} maximum bytes which are able to be downloaded via filetransfer
     */
    downloadQuota() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} maximum bytes which are able to be uploaded via filetransfer
     */
    uploadQuota() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} amount of bytes which have been downloaded this month
     */
    monthBytesDownloaded() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} amount of bytes which have been uploaded this month
     */
    monthBytesUploaded() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} total amount of bytes which have been downloaded
     */
    totalBytesDownloaded() { }

    /**
     * @since 1.0.0-alpha.6
     * @returns {number} total amount of bytes which have been uploaded
     */
    totalBytesUploaded() { }

    /**
     * Retrieve the raw object
     * @since 1.0.0-alpha.6
     * @returns {object} serverinfo as stringifyable object
     */
    asObject() { }
}