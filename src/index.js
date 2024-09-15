//Tutorial: https://www.youtube.com/watch?v=KZ3tIGHU314

const {Client, IntentsBitField} = require('discord.js');

//New instance of bot
const client = new Client({
    //Intents = Permissions for your bot (https://discord.com/developers/docs/topics/gateway)
    intents: [
        IntentsBitField.Flags.Guilds,
    ]
}) 