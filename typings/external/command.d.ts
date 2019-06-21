import Client from "../interfaces/Client"
import Channel from "../interfaces/Channel"
import DiscordMessage from "../interfaces/DiscordMessage"
import { ChatMode } from "../modules/event"

declare interface MessageEvent {
  text: string
  client: Client
  channel: Channel 
  mode: ChatMode,
  message: DiscordMessage
}
declare function replyCallback(message: string): void
declare function execCallback(client: Client, args: any, reply: typeof replyCallback, event: MessageEvent)
declare function checkPermissionCallback(client: Client): boolean

declare class CommandDisabledError extends Error {}
declare class ThrottleError extends Error {}
declare class TooManyArguments extends Error {
  parseError: ParseError
}
declare class ParseError extends Error {}

export enum GroupArgumentType {
  OR = "or",
  AND = "and"
}

export enum OverrideType {
  YES_I_KNOW_THAT_I_SHOULD_NOT_USE_COMMANDS_WITH_LENGTH_OF_ONE = "YES_I_KNOW_THAT_I_SHOULD_NOT_USE_COMMANDS_WITH_LENGTH_OF_ONE"
}

declare class Throttle {

}

declare class Argument {
  /**
   * sets an Argument as optional
   * if the argument has not been parsed successful,
   * it will use the first argument which has been given inside this method
   * @param fallback the default value which should be set if this parameter has not been found
   * @param displayDefault wether it should display the default value when called with the #getUsage method
   */
  optional(fallback?: any, displayDefault?: boolean): ThisType<Argument>

  /**
   * retrieves the default value if it had been set
   */
  getDefault(): any

  /**
   * checks if the Argument has a default value
   */
  hasDefault(): boolean 

  /**
   * gets the manual of a command
   */
  getManual(): string

  /**
   * checks if the argument is optional
   */
  isOptional(): boolean

  /**
   * sets a name for the argument to identify it later when the command gets dispatched
   * this name will be used when passing the parsed argument to the exec function
   * @param name sets the name of the argument
   * @param display sets a beautified display name which will be used when the getManual command gets executed, if none given it will use the first parameter as display value
   */
  setName(name: string, display?: boolean): ThisType<Argument>

  /**
   * retrieves the name of the Argument
   */
  getName(): string
}

declare class Commander {
  /**
   * returns the current command name
   */
  getCommandName(): string

  /**
   * returns the current command name with its prefix
   */
  getFullCommandName(): string

  /**
   * Forces a different Prefix then given by the Instance Settings
   * THIS SHOULD ONLY BE USED WHEN HAVING A GOOD REASON TO DO SO
   * @param prefix the prefix for this command
   */
  forcePrefix(prefix: string): ThisType<Commander>

  /**
   * returns the current prefix for which the command listens to
   */
  getPrefix(): string

  /**
   * sets a short help text for the help command (used inside the !help command)
   * This should be a very brief description of what the command does
   * @param text the short text for the help command
   */
  help(text: string): ThisType<Commander>

  /**
   * checks if the command has a help text
   */
  hasHelp(): boolean

  /**
   * returns the short help command
   */
  getHelp(): string

  /**
   * adds an Instance of the throttle class
   */
  throttle(throttle: typeof Throttle): ThisType<Commander>

  /**
   * disables the command
   * it can be enabled again with #enable()
   */
  disable(): ThisType<Commander>

  /**
   * enables the command
   */
  enable(): ThisType<Commander>

  /**
   * checks if the command is currently enabled
   */
  isEnabled(): boolean

  /**
   * sets the function which should get executed when a command gets triggered
   */
  exec(callback: typeof execCallback): ThisType<Commander>

  /**
   * dispatches a command
   */
  dispatchCommand(args: any, ev: MessageEvent): ThisType<Commander>

  /**
   * sets a detailed manual command on how to use the command the manual command can be called multiple times
   * for every call it will add it as a new line use this to create a detailed documentation for your command
   * @param text sets a line of the manual text
   */
  manual(text: string): ThisType<Commander>

  /**
   * checks if the command has a manual text
   */
  hasManual(): boolean

  /**
   * returns the Manual text
   */
  getManual(): string

  /**
   * returns the usage of the command with its parameterized names
   */
  getUsage(): string

  /**
   * checks if the client has permissions to execute this command takes a function as argument
   * which will be called on every permission test the function will receive the sinusbot client object as first parameter,
   * the callback should return a true value when the client is allowed to execute the command
   */
  checkPermission(callback: typeof checkPermissionCallback): ThisType<Commander>

  /**
   * checks if a Client is allowed to use the command
   */
  isAllowed(client: Client): boolean

  /**
   * runs a command
   */
  run(args: string, ev: MessageEvent): Promise<void>

  /**
   * validates the command with the given arguments
   */
  validate(args: string): { [key: string]: any }

  /**
   * validates the given input string to all added arguments
   */
  validateArgs(args: string): any

  /**
   * adds an argument to the command
   */
  addArgument(argument: typeof Argument): ThisType<Commander>

  /**
   * retrieves all available arguments
   */
  getArguments(): typeof Argument[]
}


export module Command {

  /**
   * creates a new command Instance with the given command Name
   * @example
   * command.createCommand("ping")
   *  .help("responds with pong")
   *  .exec((_, _, reply) => reply("pong"))
   */
  export function createCommand(cmd: string, overrides?: OverrideType): typeof Commander


}