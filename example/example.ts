//reference the global definition file by default its sinusbot/typings/global.d.ts
///<reference path="../typings/global.d.ts" />
import { Client } from "@sinusbot/Client"

registerPlugin<{
  //here the config interface will be declared
  foo: { bar: string, baz: number }[]
}>({
  name: "typescript",
  version: "1.0.0",
  description: "typescript description",
  author: "Multivitamin <david.kartnaller@gmail.com>",
  vars: [{
    type: "array" as const, //the as const will be needed otherwise typescript dislikes it
    name: "foo",
    title: "foo config",
    default: [],
    vars: [{
      type: "string" as const,
      name: "bar",
      title: "bar config",
      default: ""
    }, {
      type: "string" as const,
      name: "baz",
      title: "baz config",
      default: ""
    }]
  }]
}, (_, { foo }) => {

  const engine = require("engine")
  const backend = require("backend")
  const event = require("event")

  console.log({ foo })

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