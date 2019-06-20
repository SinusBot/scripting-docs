"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
registerPlugin({
    name: "typescript",
    version: "1.0.0",
    description: "typescript description",
    author: "Multivitamin <david.kartnaller@gmail.com>"
}, () => {
    const engine = require("engine");
    const backend = require("backend");
    const event = require("events");
    event.on("load", () => {
        let botClient;
        backend.getClients().forEach(client => {
            if (client.isSelf())
                botClient = client;
        });
        if (botClient) {
            engine.log(`My country is ${botClient.country()}`);
        }
        else {
            engine.log("no bot client found :(");
        }
    });
});
