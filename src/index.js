
require('dotenv').config();                                 //grants access to the .env file where the TOKEN is stored
const {Client, IntentsBitField} = require('discord.js');

//New instance of bot
const SCIPE = new Client({
    //Intents = Permissions for your bot 
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

SCIPE.login(process.env.TOKEN);                             //Passes the bots token ("password") and brings the bot online
SCIPE.on('ready', (client) => {
    console.log("Don't forget to run register-commands.js")
    console.log(`${client.user.tag} is online.`)            //Logs in terminal that the bot is online
});


/*
* type: 'nodemon' in the cmd prompt to start bot
* OR
* type: 'node .' in the cmd prompt to start bot
*
* NOTE: If nodemon is returning an error when starting
* then it means your code isn't compiling correctly
*/

//----------------------------------------------------------------- Basic Bot setup ^^^



//----------------------------------------------------------------- Bot Commands/Interactions vvv


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

//EXAMPLE code for the "/hey" command:
/*
SCIPE.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;     //Checks if message was a slash command, executes code if true
        if (interaction.commandName === 'hey') {
            interaction.reply('hey!');
        }
});
*/

SCIPE.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;     //Checks if message was a slash command, executes code if true
        
    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`${num1} + ${num2} = ${num1 + num2}`)
        }
});