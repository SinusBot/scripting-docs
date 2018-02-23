# Scripting engine documentation

[![Build Status](https://travis-ci.org/SinusBot/scripting-docs.svg?branch=master)](https://travis-ci.org/SinusBot/scripting-docs)

This repository contains the [JSDoc](http://usejsdoc.org) based javascript file from which the [scripting engine documentation](https://www.sinusbot.com/docs/scripting/) will be generated. 

## Build

### Install [documentation.js](https://github.com/documentationjs/documentation)

    npm install -g documentation

### Generate html file

    documentation build api.js --project-name "SinusBot Scripting Engine" -f html -o documentation
