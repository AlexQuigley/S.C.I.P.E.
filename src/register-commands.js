/*----------------------------------------------------------------------------------------------*
* This is the COMMANDS file that will hold the basic code for all slash commands for the bot.   *
* Run this file to register new slash commands or to purge slash commands                       *
*   Type: "node src/register-commands.js" to run this file                                      *
*-----------------------------------------------------------------------------------------------*/

//Pulls IDs from .env file
require('dotenv').config();
const { //Imports
    REST,
    Routes,
    ApplicationCommandOptionType 
} = require('discord.js');

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);


/*
* This is an array of objects where each object represents a command
* REMEMBER: Every new command added here needs to have a 
* scanner to be listening for that command set up in 'index.js'
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
];



//------------------------[v DO NOT TOUCH v]------------------------\\

/*
* Both of these functions work togeather to completely flush all slash 
* commands and then register all slash commands again, preventing ghost 
* commands from showing up on server
*/


//Please run the 'purge-commands.js' file instead of using this to purge slash commands

//PURGES ALL SCIPE slash commands from a server vvv
/*     <- Delete first slash to disable, add back to enable
(async () => {
    try {
        console.log('Purging slash commands...');
        await rest.get(Routes.applicationGuildCommands(
            process.env.BOT_ID,
            process.env.GUILD_ID
        )).then(data => {
            const promises = [];
            for (const command of data) {
                const deleteUrl = `${Routes.applicationGuildCommands(
                    process.env.BOT_ID,
                    process.env.GUILD_ID
                )}/${command.id}`;
                promises.push(rest.delete(deleteUrl));
            }
            return Promise.all(promises);
        })
        console.log('Slash commands were purged successfully!');
    } catch (error) {
        //Error handling
        console.log(`There was an error: ${error}`)
    }
})();
//*/
//PURGES ALL SCIPE slash commands from a server ^^^



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