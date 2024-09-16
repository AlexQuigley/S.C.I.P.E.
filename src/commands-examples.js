/*----------------------------------------------------------------------------------------------*
* This is an EXAMPLE SETUP of the register-commands.js file.                                    *
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
* Array of objects where each object represents a command
* REMEMBER: Every new command added here needs to have a 
* scanner to be listening for that command set up in 'index.js'
* Add new commands here:
*/

const commands = [ 
    //EXAMPLE of how to add a command with multiple options/inputs
    //*
    {
        name: 'add',                                        //Main command name
        description: 'Adds two numbers.',
        options: [                                   
            //First Option
            {
                name: 'first-number',                       
                description: 'The first number.',
                type: ApplicationCommandOptionType.Number,  //Specifies the kind of input (number)
                choices: [                                  //Allows for pre-set inputs for each option
                    {
                        name: 'one',
                        value: 1,
                    },
                    {
                        name: 'two',
                        value: 2,
                    },
                    {
                        name: 'three',
                        value: 3,
                    }
                ],
                required: true,                             //Makes this input mandatory 
                                                            //By default all options are optional unless specified
            },
            //Second Option:
            {
                name: 'second-number',
                description: 'The second number.',
                type: ApplicationCommandOptionType.Number,
                choices: [
                {
                    name: 'one',
                    value: 1,
                },
                {
                    name: 'two',
                    value: 2,
                },
                {
                    name: 'three',
                    value: 3,
                }
            ],
                required: true,
            },
        ],
    },
    //*/
];



//------------------------[v DO NOT TOUCH v]------------------------\\

/*
* Both of these functions work togeather to completely flush all slash 
* commands and then register all slash commands again, preventing ghost 
* commands from showing up on server
*/

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