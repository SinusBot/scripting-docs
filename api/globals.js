/**
 * @interface
 * @typedef {object} Manifest
 * @see registerPlugin
 * @property {string} name - Short name of your script
 * @property {string} author - Your name and your email address in the form of: `your name <your-email@example.com>`
 * @property {string} description - A longer description - tell the user what exactly your script does
 * @property {string} version - Start with something like 1.0 and increase it with every release
 * @property {boolean} [autorun] - Set to true, if you want the script to be run on every instance, without the option to disable it.
 * @property {string[]} [backends]
 * Per default scripts will only be available on TS3 instances.
 * If your script supports Discord (or in the future maybe other backends) as well, you have to specify this explicitly by setting this variable to an array containing all backends: `backends: ["ts3", "discord"]`
 * @property {boolean} [enableWeb]
 * If your script required own web content, you can set enableWeb to true and put files into the ./scripts/scriptname/html directory.
 * After restart, the script title will be clickable and lead to an index.html inside that html-directory you just created.
 * 
 * From there you have access to the localStorage variables containing the login and may communicate with the bot api from your own pages.
 * @property {string} [engine] - Sets the required engine version (bot version). This uses [Semantic Versioning](https://semver.org). Example: `engine: ">= 0.9.16"`
 * @property {boolean} [hidden]
 * Hides the script from the settings page. Should be used together with autorun.
 * 
 * Hidden scripts can not have variables (vars), since they'd never be shown and thus not configurable.
 * @property {string[]} [requiredModules]
 * An array of protected modules (i.e. 'http' or 'db') that the script requires.
 * @property {object[]} [vars] - More information about the usage of variables can be found [here](https://sinusbot.github.io/docs/scripts/#vars-array).
 * @property {string[]} [voiceCommands]
 * This parameter is only used for the speech recognition feature and may contain one or more strings that are to be detected for the given script.
 * You can find more details on how to use it here: [Speech Recognition](https://sinusbot.github.io/docs/speechrecognition/)
 */

 /**
 * @callback mainFunction
 * @see registerPlugin
 * @param {object} [_] - This parameter is deprecated and should not be used anymore.
 * @param {object} config - Configuration of the plugin that the user set from within the web interface
 * (given you have added anything to the vars field of your script manifest).
 * @param {Manifest} meta - Manifest as specified in registerPlugin.
 */
function mainFunction(_, config, meta) {}

/**
 * @description
 * This is the first and only top-level function that should be called in your script,
 * everything else will be done in the function that is passed to it.
 * @example
 * registerPlugin({
 *     name: 'Demo Script',
 *     version: '1.0',
 *     description: 'This example actually does nothing',
 *     author: 'Author <author[at]example.com>',
 *     vars: []
 * }, function(_, config, meta) {
 *     // your code goes here
 * });
 * @param {Manifest} manifest
 * The manifest determines which features are available to the script and
 * contains metadata and variables that will be shown in the web interface.
 * @param {mainFunction} mainFunction
 * If the script is activated this function is called when the scripts are loaded.
 * The function receives three parameters, the first one (`_`) is deprecated and should not be used anymore.
 */
function registerPlugin(manifest, mainFunction) { }
