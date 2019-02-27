/**
 * @interface User
 */
class User {
  /**
   * @description Returns the ID of the user
   * @returns {string} ID of the User
   * @since 0.13.37
   */
  id() { }

  /**
   * @description Returns the name of the user
   * @returns {string} Name of the User
   * @since 0.13.37
   */
  name() { }

  /**
   * @example
   * let privileges = {
   *     LOGIN:           1 <<  0,
   *     LIST_FILE:       1 <<  1,
   *     UPLOAD_FILE:     1 <<  2,
   *     DELETE_FILE:     1 <<  3,
   *     EDIT_FILE:       1 <<  4,
   *     CREATE_PLAYLIST: 1 <<  5,
   *     DELETE_PLAYLIST: 1 <<  6,
   *     ADDTO_PLAYLIST:  1 <<  7,
   *     STARTSTOP:       1 <<  8,
   *     EDITUSERS:       1 <<  9,
   *     CHANGENICK:      1 << 10,
   *     BROADCAST:       1 << 11,
   *     PLAYBACK:        1 << 12,
   *     ENQUEUE:         1 << 13,
   *     ENQUEUENEXT:     1 << 14,
   *     EDITBOT:         1 << 15,
   *     EDITINSTANCE:    1 << 16,
   * }
   * 
   * function hasPlaybackOrEnqueuePermission(user) {
   *     // returns true if user has playback or enqueue permission
   *     return (user.privileges() & (privileges.PLAYBACK | privileges.ENQUEUE)) != 0
   * }
   * 
   * @description Returns the privileges of the user
   * @returns {number} Privileges of the user 
   * @since 0.13.37
   */
  privileges() { }

  /**
   * @description Returns the teamspeak unique ID of the bind client
   * @returns {string} teamspeak unique ID of the bind ts client 
   * @since 0.13.37
   */
  tsUid() { }

  /**
   * @description Returns the teamspeak group ID
   * @returns {string} ID of the bind teamspeak group
   * @since 0.13.37
   */
  tsGroupId() { }

  /**
   * @description Checks if an user is an admin
   * @returns {boolean} Admin status of the user 
   * @since 0.13.37
   */
  isAdmin() { }

  /**
   * @description Sets a new password to the user
   * @returns {boolean} Success or not 
   * @param {string} password - new password of the user
   * @since 0.13.37
   */
  setPassword(password) { }

  /**
   * @description Sets the teamspeak unique ID to the user
   * @returns {boolean} Success or not
   * @param {string} tsUid - teamspeak unique ID of the client 
   * @since 0.13.37
   */
  setTSUid(tsUid) { }

  /**
   * @description Sets the privileges to an user
   * @returns {boolean} Success or not
   * @param {number} privileges - New privileges of the user
   * @since 0.13.37
   */
  setPrivileges(privileges) { }

  /**
   * @description Adds an privilege to an user
   * @returns {boolean} Success or not 
   * @param {number} privilege - New privilege which should be added
   * @since 0.13.37
   */
  addPrivilege(privilege) { }

  /**
   * @description Removes an privilege from an user
   * @returns {boolean} Success or not 
   * @param {number} privilege - Privilege which should be removed
   * @since 0.13.37
   */
  removePrivilege(privilege) { }

  /**
   * @description Deletes an user
   * @returns {boolean} Success or not 
   * @since 0.13.37
   */
  delete() { }
}