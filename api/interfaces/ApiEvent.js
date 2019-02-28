/**
 * @interface ApiEvent
 * @description This type is passed to a `(api|public):<eventName>`-event,
 * see [`api:<eventName>`](#eventeventapieventname) or [`public:<eventName>`](#eventeventpubliceventname) for more.
 */
class ApiEvent {
  /**
   * @returns {string} Name of the event
   */
  name() { }
  /**
   * @returns {object} Json body
   */
  data() { }
  /**
   * @returns {?User} User that called the event (or null, if unset)
   */
  user() { }
  /**
   * @returns {string} Remote address that triggered the call
   */
  remoteAddr() { }
  /**
   * @since 0.14
   * @returns {object} Key/Value map of the query parameters in the url
   */
  queryParams() { }
}