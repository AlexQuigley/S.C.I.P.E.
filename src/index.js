//Tutorial: https://www.youtube.com/watch?v=KZ3tIGHU314
const {Client, IntentsBitField} = require('discord.js');
const {token} = require("./config.json");

//New instance of bot
const SCIPE = new Client({
    //Intents = Permissions for your bot (https://discord.com/developers/docs/topics/gateway)
    //Manual (1.01)
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

SCIPE.login(token); //Passes the bots token ("password") KEEP SECRET
//type: 'node src/index.js' in the cmd prompt to run bot

