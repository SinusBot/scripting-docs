/**
 * @interface
 * @typedef {object} Message
 * @property {string} text - Text of the message
 * @property {Channel} channel - Channel (if given) this message has been sent on
 * @property {Client} client - Client that sent the message
 * @property {number} mode - Number representing the way this message has been sent
 * (1 = private, 2 = channel, 3 = server)
 */