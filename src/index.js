
require('dotenv').config();                                 //grants access to the .env file where the TOKEN is stored
const {Client, IntentsBitField} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

//New instance of bot
const client = new Client({
    //Intents = Permissions for your bot 
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

//Calls the eventHandler function to start all bot processies
//Passes client info to eventHandler
eventHandler(client);

client.login(process.env.TOKEN);                             //Passes the bots token ("password") and brings the bot online

