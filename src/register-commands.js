/*----------------------------------------------------------------------------------------------*
* This is the COMMANDS file that will hold the basic code for all slash commands for the bot.   *
* Run this file to register new slash commands or to purge slash commands                       *
*   Type: "node src/register-commands.js" to run this file                                      *
*-----------------------------------------------------------------------------------------------*/

//Pulls IDs from .env file
require('dotenv').config();

//Imports
const { 
    REST,
    Routes,
    ApplicationCommandOptionType 
} = require('discord.js');

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);


/*
* This is an array of objects where each object represents a command
*
* REMEMBER: Every new command added here needs to have a 
* scanner listening for that command set up in 'index.js'
*
* Add new commands here:
*/

//NOTE: Command names CANNOT be uppercase, they MUST be lowercase. 
const commands = [ 
    //-----------------------------------
    /*  TEST CASE - Leave commented out
    {
        name: 'hey',
        description: 'Replies with Hey!',
    },
    //*///-------------------------------
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    /*
    {
        name: 'add',
        description: 'Adds two numbers',
        options:[
            {
                name:'first-number',
                description: 'The first number.',
                type: ApplicationCommandOptionType.Number,
                required: true, 
            },
            {
                name:'second-number',
                description: 'The second number.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'subtract',
        description: 'Subtracts two numbers',
        options:[
            {
                name:'first-number',
                description: 'The first number.',
                type: ApplicationCommandOptionType.Number,
                required: true, 
            },
            {
                name:'second-number',
                description: 'The second number.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'divide',
        description: 'Divides two numbers',
        options:[
            {
                name:'first-number',
                description: 'The first number.',
                type: ApplicationCommandOptionType.Number,
                required: true, 
            },
            {
                name:'second-number',
                description: 'The second number.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'multiply',
        description: 'Multiplies two numbers',
        options:[
            {
                name:'first-number',
                description: 'The first number.',
                type: ApplicationCommandOptionType.Number,
                required: true, 
            },
            {
                name:'second-number',
                description: 'The second number.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    //*/
];



//------------------------[v DO NOT TOUCH v]------------------------\\

//REGISTERS NEW SCIPE slash commands with a server vvv
//*     <- Delete first slash to disable, add back to enable
(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.BOT_ID, 
                process.env.GUILD_ID
            ),
            { body: commands }
        );
        console.log('Slash commands were registered successfully!');
    } catch (error) {
        //Error handling
        console.log(`There was an error: ${error}`)
    }
})();
//*/
//REGISTERS NEW SCIPE slash commands with a server ^^^

//------------------------[^ DO NOT TOUCH ^]------------------------\\