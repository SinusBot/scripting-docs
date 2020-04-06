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
   * const ENQUEUE           = 1 << 13;
   * const SKIP_QUEUE        = 1 << 14;
   * const ADMIN_QUEUE       = 1 << 15;
   * const PLAYBACK          = 1 << 12;
   * const START_STOP        = 1 <<  8;
   * const EDIT_BOT_SETTINGS = 1 << 16;
   * const LOGIN             = 1 <<  0;
   * const UPLOAD_FILES      = 1 <<  2;
   * const DELETE_FILES      = 1 <<  3;
   * const EDIT_FILES        = 1 <<  4;
   * const CREATE_AND_DELETE_PLAYLISTS = 1 << 5;
   * const EDIT_PLAYLISTS    = 1 <<  7;
   * const EDIT_INSTANCES    = 1 << 17;
   * const EDIT_USERS        = 1 <<  9;
   * 
   * function hasPlaybackPermission(user) {
   *     // returns true if user has playback permission
   *     return (user.privileges() & PLAYBACK) != 0
   * }
   * 
   * @description Returns the privileges of the user
   * @returns {number} Privileges of the user
   * @since 0.13.37
   */
  privileges() { }

  /**
   * @description Returns the instance privileges of the user
   * @returns {number} Instance privileges of the user
   * @since 1.0.0-beta.9
   * @see privileges
   */
  instancePrivileges() { }

  /**
   * @returns {string} teamspeak or discord unique ID if bound to a client
   * @since 0.13.37
   * @see uid
   */
  tsUid() { }

  /**
   * @returns {string} teamspeak or discord unique ID if bound to a client
   * @since 1.0.0-alpha.6
   * @see tsUid
   */
  uid() { }

  /**
   * @returns {string} Group ID if bound to a teamspeak group or discord role
   * @since 0.13.37
   * @see groupId
   */
  tsGroupId() { }

  /**
   * @returns {string} Group ID if bound to a teamspeak group or discord role
   * @since 1.0.0-alpha.6
   * @see tsGroupId
   */
  groupId() { }

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
   * @description Sets the teamspeak/discord unique ID
   * @returns {boolean} Success or not
   * @param {string} uid - teamspeak/discord unique ID of the client 
   * @since 0.13.37
   * @see setUid
   */
  setTSUid(uid) { }

  /**
   * @description Sets the teamspeak/discord unique ID
   * @returns {boolean} Success or not
   * @param {string} uid - teamspeak/discord unique ID of the client 
   * @since 1.0.0-beta.9
   * @see setTSUid
   */
  setUid(uid) { }

  /**
   * @description Sets the group ID
   * @returns {boolean} Success or not
   * @param {string} groupId - teamspeak group ID or discord role ID
   * @since 1.0.0-alpha.6
   */
  setGroupId(groupId) { }

  /**
   * @description Sets the users privileges
   * @returns {boolean} Success or not
   * @param {number} privileges - New privileges of the user
   * @since 0.13.37
   */
  setPrivileges(privileges) { }

  /**
   * @description Adds a privilege to a user
   * @returns {boolean} Success or not 
   * @param {number} privilege - New privilege which should be added
   * @since 0.13.37
   */
  addPrivilege(privilege) { }

  /**
   * @description Removes a privilege from a user
   * @returns {boolean} Success or not 
   * @param {number} privilege - Privilege which should be removed
   * @since 0.13.37
   */
  removePrivilege(privilege) { }

  /**
   * @description Sets the users instance privileges
   * @returns {boolean} Success or not
   * @param {number} privileges - New privileges of the user
   * @since 1.0.0-beta.9
   */
  setInstancePrivileges(privileges) { }

  /**
   * @description Adds an instance privilege to a user
   * @returns {boolean} Success or not 
   * @param {number} privilege - New privilege which should be added
   * @since 1.0.0-beta.9
   */
  addInstancePrivilege(privilege) { }

  /**
   * @description Removes an instance privilege from a user
   * @returns {boolean} Success or not 
   * @param {number} privilege - Privilege which should be removed
   * @since 1.0.0-beta.9
   */
  removeInstancePrivilege(privilege) { }

  /**
   * @description Deletes an user
   * @returns {boolean} Success or not 
   * @since 0.13.37
   */
  delete() { }
}