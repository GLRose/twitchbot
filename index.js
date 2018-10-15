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
        username: "Subconixtest",
        password: process.env.TOKEN
    },
    channels: ["subconixtest"]
};

const commandPrefix = '!'
var client = new tmi.client(options)

// Connect the client to the server..
client.connect();

client.on("chat",(channel, user, message, self) => {

    
    if (self) return;

    if (message==commandPrefix+"hi"){
        client.action("subconixtest",user['display-name'] + " Whats up friend?")
    }
    if (message==commandPrefix+"discord"){
        client.action("subconixtest","https://discord.gg/PQA5TX")
    }
    if (message==commandPrefix+"haiku"){
        
haikudos(function(haiku) {
            client.action("subconixtest",user['display-name'] + " " + haiku);
        });
    }
});






