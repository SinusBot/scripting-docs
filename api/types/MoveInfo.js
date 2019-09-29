/**
 * @interface
 * @typedef {object} MoveInfo
 * @property {Channel} [fromChannel] - Old channel (or null if the client just got online/changed visibility)
 * @property {Channel} [toChannel] - New channel (or null if the client just went offline/changed visibility)
 * @property {Client} client - Client that was moved
 * @property {Client} invoker - Client that invoked the move
 * @property {string} [message] - move/ban/kick message (TS3; since 1.0.0-beta.6)
 */