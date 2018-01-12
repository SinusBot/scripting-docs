# Scripting engine documentation

This repository contains the [JSDoc](http://usejsdoc.org) based javascript file from which the [scripting engine documentation](https://www.sinusbot.com/docs/scripting/) will be generated. 

## Build
### Install [codumentation.js](https://github.com/documentationjs/documentation)

    npm install -g documentation

### Generate html file

    documentation build api.js --project-name "SinusBot Scripting Engine v2" -f html -o documentation