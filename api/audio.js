/**
 * @module audio
 */
module.exports = {
    /**
     * @description Applies a [ffmpeg filter](https://ffmpeg.org/ffmpeg-filters.html) to the audio output.
     * 
     * Warning: This method is curretly **not safe to use** and **leads to crashes**!
     * @param {string} filter - ffmpeg compatible filter string
     * @returns {boolean} success
     */
    setAudioFilter: (filter) => {},

    /**
     * @description Enables or disables audio return channel; required for speech recognition engine / recording
     * @param {number} flags - bitmask; use 0x01 for general audio return (recording) or 0x02 for separated audio (for speech recognition) - 0x03 for both
     * @returns {boolean}
     * @since 0.13.37
     */
    setAudioReturnChannel: (flags) => {},

    /**
     * @returns {number}
     * @since 0.13.37
     */
    getAudioReturnChannel: () => {},

    /**
     * @description Starts recording to a file
     * @returns {boolean}
     */
    startRecording: () => {},

    /**
     * @description Stops recording to a file
     * @returns {boolean}
     */
    stopRecording: () => {},

    /**
     * @description Streams audio output to an icecast-server
     * @param {string} url - Endpoint to stream to
     * @param {string} username - Username used for authentication
     * @param {string} password - Password
     * @returns {boolean}
     */
    streamToServer: (url, username, password) => {},

    /**
     * @description Stops streaming started with streamToServer 
     * @returns {boolean}
     */
    stopStream: () => {},

    /**
     * Returns the state of repeat-mode
     * @returns {boolean}
     */
    isRepeat: () => {},

    /**
     * @description Sets the state of repeat-mode
     * @param {boolean} val
     */
    setRepeat: (val) => {},

    /**
     * Returns the state of shuffle-mode
     * @returns {boolean}
     */
    isShuffle: () => {},

    /**
     * @description Sets the state of shuffle-mode
     * @param {boolean} val
     */
    setShuffle: (val) => {},

    /**
     * Returns the current volume (0-100)
     * @returns {number} volume
     */
    getVolume: () => {},

    /**
     * @description Sets the volume (0-100)
     * @param {number} volume
     * @returns {boolean}
     */
    setVolume: (volume) => {},

    /**
     * Returns the position of the current track
     * @returns {number} position (in seconds)
     */
    getTrackPosition: () => {},

    /**
     * @description Seeks to a specific position
     * @param {number} pos - New position (in seconds)
     */
    seek: (pos) => {},

    /**
     * Returns if the audio output has been muted
     * @returns {boolean}
     */
    isMute: () => {},

    /**
     * @description Enables/disables mute
     * @param {boolean} mute
     * @returns {boolean}
     */
    setMute: () => {},

    /**
     * @returns {boolean} Whether the bot is playing music
     */
    isPlaying: () => {},

    /**
     * @description Plays audio returned from the text-to-speech engine
     * @param {string} text - Text to say
     * @param {string} [locale] - Locale to use
     */
    say: (text, locale) => {},

    /**
     * @description Sets the volume of a specific stream (0-100)
     * @param {string} streamID - name or alias of the stream(s) to modify
     * @param {number} volume
     * @returns {boolean}
     */
    setStreamVolume: (streamID, volume) => {},

    /**
     * @since 1.0.0-beta.6
     * @description Sets the TTS URL
     * @param {string} url - TTS URL
     * @returns {boolean}
     */
    setTTSURL: (url) => {},

    /**
     * @since 1.0.0-beta.6
     * @description Sets the TTS default locale
     * @param {string} locale - Locale
     * @returns {boolean}
     */
    setTTSDefaultLocale: (locale) => {},
}