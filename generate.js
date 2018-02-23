const fs = require("fs")

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

let appendix = "";
modules.forEach(moduleName => {
    appendix += `declare var ${moduleName}: ${moduleName[0].toUpperCase() + moduleName.substr(1)};

declare module "${moduleName}" {
    export = ${moduleName};
}
`
})

fs.appendFile("tsd/types.d.ts", appendix, err => {
    if (err) {
        console.error(`Failed to append appendix to file: ${err.message}`)
        return
    }
    console.log("Successfully appended to file")
})