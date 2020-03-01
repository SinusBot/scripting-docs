//reference the global definition file by default its ./node_modules/sinusbot-scripting-engine/typings/global.d.ts
///<reference path="../typings/global.d.ts" />
import { Client } from "@sinusbot/Client"

registerPlugin({
  name: "typescript",
  version: "1.0.0",
  description: "typescript description",
  author: "Multivitamin <david.kartnaller@gmail.com>"
}, () => {

  const engine = require("engine")
  const backend = require("backend")
  const event = require("event")


  event.on("load", () => {
    let botClient: Client|null = null
    backend.getClients().forEach(client => {
      if (client.isSelf()) botClient = client
    })
    if (botClient) {
      engine.log(`My country is ${botClient!.country()}`)
    } else {
      engine.log("no bot client found :(")
    }

    const { createCommandGroup } = require("command")
    const exampleCommand = createCommandGroup("typescript")

    //command !typescript ping
    exampleCommand
      .addCommand("ping")
      .help("responds with pong")
      .exec((client, args, reply) => reply("Pong!"))

  })

})