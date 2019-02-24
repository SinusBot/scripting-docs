/**
 * @typedef {object} ChannelParams
 * @property {string} name - Displayname of the channel; mandatory on create
 * @property {(Channel|number|string)} parent - Parent channel (you can also use the channelId); ignored on update, mandatory on create
 * @property {string} description
 * @property {string} topic
 * @property {string} password
 * @property {number} codec - See codec types for explanation
 * @property {number} codecQuality
 * @property {boolean} encrypted - `true` by default
 * @property {boolean} permanent
 * @property {boolean} semiPermanent
 * @property {number} position
 * @property {number} maxClients - Set to `-1` for unlimited clients
 * @property {number} maxFamilyClients
 * @property {boolean} default - Whether the channel is the default channel 
 * @property {number} neededTalkPower - TS3 only
 * @property {number} deleteDelay - TS3 only
 * @property {number} icon - TS3 only
 * @description
 * Used to update or create a channel;
 * When creating a channel parent and name are mandatory for TS3;
 * When updating a channel parent will be ignored (use moveTo instead)
 */