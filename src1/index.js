const client = require("./Client");
const path = require("path");
const fs = require("fs");
require("dotenv").config()

const { commandHandler } = require("./Handler/commands.js")
const { eventHandler } = require("./Handler/events.js")

commandHandler(client, fs, path);
eventHandler(client, fs, path);

client.login(process.env.TOKEN)