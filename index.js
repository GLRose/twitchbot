var tmi = require('tmi.js')
var haikudos = require('haikudos')
require('dotenv/config')


var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "Subconix",
        password: process.env.TOKEN
    },
    channels: ["subconix"]
};

const commandPrefix = '!'
var client = new tmi.client(options)

// Connect the client to the server..
client.connect();

client.on("chat", (channel, user, message, self) => {


    if (self) return;

    if (message == commandPrefix + "hi") {
        client.action("subconix", user['display-name'] + " Whats up friend?")
    }
    if (message == commandPrefix + "discord") {
        client.action("subconix", "https://discord.gg/JySkgq5")
    }
    if (message == commandPrefix + "haiku") {

        haikudos(function (haiku) {
            client.action("subconix", user['display-name'] + " " + haiku);
        });
    }
});