/**
 * @module crypto
 * @since 1.0.0
 * @todo TODO: add some explanations and examples
 */
module.exports = {
    /**
     * Generates a new {@link CryptoKeypair}.
     * @returns {CryptoKeypair} New {@link CryptoKeypair}.
     */
    generateKeypair: () => {},

    /**
     * Loads a keypair from bytes and returns it as a {@link CryptoKeypair}.
     * @param {BytesWriter} keypair Keypair bytes.
     * @returns {CryptoKeypair}
     */
    loadKeypair: (keypair) => {},

    /**
     * @todo TODO: add some explanations
     * Encrypts a message.
     * @param {BytesWriter} secret Secret
     * @param {BytesWriter} message Message
     * @returns {BytesWriter} Encrypted message
     */
    seal: (secret, message) => {},

    /**
     * @todo TODO: add some explanations
     * Decrypts a message.
     * @param {BytesWriter} secret Secret
     * @param {BytesWriter} message Message
     * @returns {BytesWriter} Decrypted message
     */
    open: (secret, message) => {},

    /**
     * @todo TODO: add some explanations
     * @todo TODO: What is hname for?
     * @param {string} hname
     * @param {BytesWriter} password The master password from which a derived key is generated.
     * @param {BytesWriter} salt Salt.
     * @param {number} iterations Number of iterations.
     * @param {number} keylength Desired bit-length of the derived key.
     * @todo TODO: Is this correct?
     * @returns {BytesWriter} Keypair bytes
     */
    pbkdf2: (hname, password, salt, iterations, keylength) => {},

    /**
     * Returns a given number of random bytes.
     * @param {number} number Number of random bytes to return
     * @returns {BytesWriter} Random bytes
     */
    randomBytes: (number) => {}
}