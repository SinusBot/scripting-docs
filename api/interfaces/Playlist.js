/**
 * @interface Playlist
 */
class Playlist {
  /**
   * @returns {string} Unique identifier of the playlist
   */
  id() { }
  /**
   * @returns {string} Name of the playlist
   */
  name() { }
  /**
   * @returns {PlaylistTrack[]} List of all tracks inside the given playlist
   */
  getTracks() { }
  /**
   * @description Sets the playlist to active; will continue playing songs from this playlist
   * @returns {boolean}
   */
  setActive() { }
}