const fs = require("fs")
const os = require('os')

let modules = [
    "backend",
    "event",
    "engine",
    "ws",
    "net",
    "db",
    "store",
    "format",
    "audio",
    "media",
    "helpers"
]

let appendix = "declare var require: any;"
modules.forEach(moduleName => {
    appendix += os.EOL + os.EOL +
        `declare var ${moduleName}: ${moduleName[0].toUpperCase() + moduleName.substr(1)};
declare module "${moduleName}" {
    export = ${moduleName};
}`
})

fs.appendFile("tsd/types.d.ts", appendix, err => {
    if (err) {
        console.error(`Failed to append module exports: ${err.message}`)
        return
    }
    console.log("Successfully appended module exports")
})