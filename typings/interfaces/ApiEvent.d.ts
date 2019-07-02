import { User } from "./User"

export interface ApiEvent {

  /**
   * returns the name of the event
   */
  name(): string

  /**
   * returns the json body
   */
  data(): { [key: string]: any }

  /**
   * returns the User which called the event
   */
  user(): User|undefined

  /**
   * returns the remote address which triggered the call
   */
  remoteAddr(): string

  /**
   * gets the parameters inside the url
   */
  queryParams(): { [key: string]: any }
}