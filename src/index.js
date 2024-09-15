
require('dotenv').config();                                 //grants access to the .env file where the TOKEN is stored
const {Client, IntentsBitField} = require('discord.js');

//New instance of bot
const SCIPE = new Client({
    //Intents = Permissions for your bot 
    //(https://discord.com/developers/docs/topics/gateway)
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});


SCIPE.login(process.env.TOKEN);                             //Passes the bots token ("password")
/*
* type: 'nodemon' in the cmd prompt to start bot
* OR
* type: 'node .' in the cmd prompt to start bot
*
* NOTE: If nodemon is returning:
* "[nodemon] app crashed - waiting for file changes before starting..."
* then it means your code isn't compiling correctly
*/
//---------------------------------------------------------------------------------------------- Basic Bot setup ^^^

//---------------------------------------------------------------------------------------------- Bot Commands/Interactions vvv


//Logs to terminal that the bot is online
SCIPE.on('ready', (client) => {
    console.log(`${client.user.tag} is online.`)
});


SCIPE.on('messageCreate', (message) => {

    if (message.author.bot) {                          //Prevents bot from responding to itself or another bot
        return 0;
    }
    //scan all messages for this phrase
    if (message.content === 'SCIPE Status') {
        //Reply with this message when phrase is detected
        message.reply('Bot is Online')
    }
});

SCIPE.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;     //Checks if message was a slash command, executes code if true
    //console.log(interaction.commandName);              //Displays command output to console 
    //if (interaction.commandName === 'hey') {
        //interaction.reply('hey');
    //}
});
        
    
//1284997801134133340
