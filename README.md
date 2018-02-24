# Scripting engine documentation

[![Build Status](https://travis-ci.org/SinusBot/scripting-docs.svg?branch=master)](https://travis-ci.org/SinusBot/scripting-docs)

This repository contains the [JSDoc](http://usejsdoc.org) based javascript file from which the [scripting engine documentation](https://www.sinusbot.com/docs/scripting/) will be generated. 

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

There are Typescript Typings available which are generated out of the docs. You can use them e.g. in Visual Studio Code.

### Visual Studio Code

First of all, you need to install these typings by executing: `npm install sinusbot-scripting-engine` or `yarn add sinusbot-scripting-engine`. Now you have the typings installed, to give the Typescript interpreter some parameters in, you need to create a `jsconfig.json`:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs"
    }
}
```

At this time, you are ready to go, just add `// @ts-check` at the first line of your script. This enables the type checking.

For reference, you can check out [this repository](https://github.com/SinusBot/scripts), which is using these typings.
