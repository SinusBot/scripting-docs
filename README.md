# Scripting engine documentation

[![Build Status](https://travis-ci.org/SinusBot/scripting-docs.svg?branch=master)](https://travis-ci.org/SinusBot/scripting-docs)

This repository contains the [JSDoc](http://usejsdoc.org) based javascript file from which the [scripting engine documentation](https://sinusbot.github.io/scripting-docs/) is generated.

## Build

### Install [documentation.js](https://github.com/documentationjs/documentation)

```bash
npm install -g documentation
```

### Generate html file

```bash
documentation build api.js --project-name "SinusBot Scripting Engine" -f html -o documentation
```

## IntelliSense

There are TypeScript typings available which are generated out of the documentation. You can use them in IDEs like Visual Studio Code.

### Visual Studio Code

![Visual Studio Code IntelliSense demo](intellisense-demo.gif)

First of all you need to install the typings by executing: `npm i sinusbot-scripting-engine` or `yarn add sinusbot-scripting-engine`.

After you have the typings installed, you need to create a `jsconfig.json` with the following content:

```json
{
    "compilerOptions": {
        "target": "es5",
        "checkJs": true
    }
}
```

Or alternatively if you only want to enable type checking for specific files set the config to

```json
{
    "compilerOptions": {
        "target": "es5"
    }
}
```

and add `// @ts-check` as the first line of your script that should be checked.

For reference, you can check out [this repository](https://github.com/SinusBot/scripts).
