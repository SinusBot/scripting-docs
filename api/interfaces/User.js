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