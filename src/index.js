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
//type: 'node .' in the cmd prompt to run bot
//tupe: nodemon in the cmd prompt to run bot with auto-refresh

//----------------------------------------------------------------------------------------------
//Basic Bot setup ^^^

//Logs to terminal that the bot is online
SCIPE.on('ready', (bot) => {
    console.log(`${bot.user.tag} is online.`)
})


SCIPE.on('messageCreate', (message) => {
    console.log(message)
})
