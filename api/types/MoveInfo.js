/**
 * @interface
 * @typedef {object} MoveInfo
 * @property {Channel} [fromChannel] - Old channel (or null if the client just got online/changed visibility)
 * @property {Channel} [toChannel] - New channel (or null if the client just went offline/changed visibility)
 * @property {Client} client - Client that was moved
 * @property {Client} invoker - Client that invoked the move
 */