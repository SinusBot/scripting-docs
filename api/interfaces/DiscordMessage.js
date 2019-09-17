/**
 * @interface DiscordMessage
 * @description Parameter of the message event callback.
 */
class DiscordMessage {
    /**
     * @returns {Client} Client that sent the message.
     */
    author() {}

    /**
     * @returns {string} ID of the client that sent the message.
     */
    authorID() {}

    /**
     * @returns {Channel} Channel in which the message was posted.
     */
    channel() {}

    /**
     * @returns {string} ID of the channel in which the message was posted.
     */
    channelID() {}

    /**
     * @returns {string} Content/Text of the message.
     */
    content() {}

    /**
     * Create a reaction for the message.
     * `emoji` takes the form of `name:id` for custom guild emoji, or Unicode characters.
     * 
     * Requires the `READ_MESSAGE_HISTORY` permission.
     * Additionally, if nobody else has reacted to the message using this emoji,
     * this requires the `ADD_REACTIONS` permission to be present on the current user.
     * @see https://discordapp.com/developers/docs/resources/channel#create-reaction
     * @param {string} emoji - Emoji in the form of `name:id` for custom guild emoji, or Unicode character.
     * @param {function} [callback]
     * @returns {boolean} success
     */
    createReaction(emoji, callback) {}

    /**
     * Deletes the message.
     * @param {function} [callback]
     * @returns {boolean} success
     */
    delete(callback) {}

    /**
     * Deletes all reactions on a message. This requires the `MANAGE_MESSAGES` permission.
     * @see https://discordapp.com/developers/docs/resources/channel#delete-all-reactions
     * @param {function} [callback]
     * @returns {boolean} success
     */
    deleteAllReactions(callback) {}

    /**
     * Delete a reaction the bot has made for the message.
     * @param {string} emoji - Emoji in the form of `name:id` for custom guild emoji, or Unicode character.
     * @param {function} [callback]
     * @returns {boolean} success
     */
    deleteOwnReaction(emoji, callback) {}

    /**
     * Delete a reaction that a given user has made for the message.
     * @since 1.0.0-beta.2
     * @param {string} emoji - Emoji in the form of `name:id` for custom guild emoji, or Unicode character.
     * @param {(Client|string)} user
     * @param {function} [callback]
     * @returns {boolean} success
     */
    deleteUserReaction(emoji, user, callback) {}

    /**
     * Edits the content/text of the message.
     * @param {string} content
     * @param {function} [callback]
     * @returns {boolean} success
     */
    editContent(content, callback) {}

    /**
     * @returns {string} ID of the guild the message was sent in.
     */
    guildID() {}

    /**
     * @returns {string} ID of the Message.
     */
    ID() {}

    /**
     * @returns {boolean} Whether this was a TTS message.
     */
    isTTS() {}

    /**
     * Posts a message in the same channel/chat that the original message was sent in.
     * @param {string} text
     * @param {function} [callback]
     * @returns {boolean} success
     */
    reply(text, callback) {}

    /**
     * @returns {Date} Timestamp when this message was sent.
     */
    timestamp() {}

    /**
     * @returns {Date} Timestamp when this message was edited (same as timestamp() if never).
     */
    timestampEdited() {}
}
