/**
 * @module media
 */
module.exports = {
    /**
     * @description Streams a URL or plays a track via internal url
     * @param {string} url - URL or Internal Track-URL (see {@link Track#url}, something like track://...)
     * @returns {boolean} success
     */
    playURL: (url) => {},

    /**
     * Returns the current track
     * @returns {Track}
     */
    getCurrentTrack: () => {},

    /**
     * Returns the track with the given ID (or null if none was found)
     * @param {string} id - Track ID
     * @returns {?Track}
     */
    getTrackByID: (id) => {},

    /**
     * Returns all Tracks
     * @since 1.0.0-beta.3
     * @returns {Track[]}
     */
    getTracks: () => {},

    /**
     * @description Searches for tracks matching the search term, returns 20 entries at most
     * @param {string} searchString
     * @returns {Track[]}
     * @example
     * var event = require('event');
     * var media = require('media');
     * 
     * event.on('chat', function(ev) {
     *     var params = ev.text.split(' ');
     *     if (params.length == 1) {
     *         ev.client.chat('Please enter a searchterm after .play - like .play november rain');
     *         return;
     *     }
     *     if (params[0] == '.play') {
     *         params.shift();
     *         var results = media.search(params.join(' '));
     *         if (results.length > 0) {
     *             results[0].play();
     *             ev.client.chat('Playing - just for you: ' + results[0].artist() + ' - ' + results[0].title());
     *         } else {
     *             ev.client.chat('Sorry, I could not find anything that matched your search.');
     *         }
     *     }
     * });
     */
    search: (searchString) => {},

    /**
     * @description Adds the given url to the queue
     * @param {string} url Track-URL (see {@link Track#url})
     * @returns {boolean} success
     */
    enqueue: (url) => {},

    /**
     * @description Adds the given url as the first entry in the queue
     * @param {string} url Track-URL (see {@link Track#url})
     * @returns {boolean} success
     * @since 0.12.0
     */
    playAsNext: (url) => {},

    /**
     * @description Plays the next track of the queue / playlist
     * @returns {boolean} success
     */
    playNext: () => {},

    /**
     * @description Plays the next previous of the queue / playlist
     * @returns {boolean} success
     */
    playPrevious: () => {},

    /**
     * @description Stops playback completely
     * @param {string} [trackID] - (optional) the track to stop; if not present, all tracks will be stopped
     * @returns {boolean} success
     */
    stop: (trackID) => {},

    /**
     * Returns all tracks of the queue
     * @returns {Track[]}
     */
    getQueue: () => {},

    /**
     * Returns all playlists
     * @returns {Playlist[]}
     */
    getPlaylists: () => {},

    /**
     * Returns the playlists with the given id
     * @returns {Playlist}
     */
    getPlaylistByID: (id) => {},

    /**
     * Returns the currently active playlist
     * @returns {Playlist}
     */
    getActivePlaylist: (id) => {},

    /**
     * @description Removes the track at a given position from the queue
     * @param {number} index - Index of the track that should be removed from the queue (0 being the first entry)
     * @returns {boolean} success
     */
    removeFromQueue: (index) => {},

    /**
     * @description Removes all entries from the queue
     * @returns {boolean} success
     */
    clearQueue: () => {},

    /**
     * @description Clears the current playlist (if set) so that playback won't continue inside that playlist
     * @returns {boolean} success
     */
    clearPlaylist: () => {},

    /**
     * @description Plays a file via youtube-dl.
     * @param {string} url - URL that youtube-dl supports
     * @returns {string} jobId
     */
    yt: (url) => {},

    /**
     * @description Streams something via youtube-dl.
     * @param {string} url - URL that youtube-dl supports
     * @returns {boolean} success
     */
    ytStream(url) {},

    /**
     * @description Downloads a file via youtube-dl, optionally plays it
     * @param {string} url - URL that youtube-dl supports
     * @param {boolean} play - Set to true to play after download
     * @returns {string} jobId
     */
    ytdl: (url, play) => {},

    /**
     * @description Enqueues a stream via youtube-dl
     * @param {string} url - URL that youtube-dl supports
     * @returns {string} jobId
     */
    enqueueYt: (url) => {},

    /**
     * @description Downloads a file via youtube-dl, then enqueues it
     * @param {string} url - Url that youtube-dl supports
     * @returns {string} jobId
     */
    enqueueYtdl: (url) => {},

    /**
     * @description Plays the next track of the queue; resumes queue if stopped.
     * @since 1.0.0-beta.6
     */
    playQueueNext: () => {},

    /**
     * @description Alias for `playQueueNext()`. Plays the next track of the queue; resumes queue if stopped.
     * @since 1.0.0-beta.6
     */
    resumeQueue: () => {},

    /**
     * @description Clears the idle track.
     * @since 1.0.0-beta.6
     */
    clearIdleTrack: () => {},

    /**
     * @description Clears the startup track.
     * @since 1.0.0-beta.6
     */
    clearStartupTrack: () => {},

    /**
     * @description Sets the idle track.
     * @param {string} url Track-URL (see {@link Track#url})
     * @since 1.0.0-beta.6
     */
    setIdleTrackURL: (url) => {},

    /**
     * @description Sets the startup track.
     * @param {string} url Track-URL (see {@link Track#url})
     * @since 1.0.0-beta.6
     */
    setStartupTrackURL: (url) => {},

    /**
     * @description Starts playback of a playlist with a given track index.
     * @param {Playlist} playlist Playlist
     * @param {number} index Index of the track (e.g. `0` for first one)
     * @since 1.0.0-beta.8
     */
    playlistPlayByID: (playlist, index) => {},
}