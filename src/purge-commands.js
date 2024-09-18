/*
* |---------------------------------------------------------|
* |Run this file to PURGE old slash commands                |
* |  Type: "node src/purge-commands.js" to run this file    |
* |---------------------------------------------------------|
*/

//WILL BE REPLACED BY 01registerCommands.js <-------



//grants access to the .env file where the TOKEN is stored
require('dotenv').config();                                 
const {REST, Routes } = require('discord.js');
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

//commands array
const commands = [];

//------------------------[v DO NOT TOUCH v]------------------------\\

//PURGES ALL SCIPE slash commands from a server vvv
//*     <- Delete first slash to disable, add back to enable
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

//------------------------[^ DO NOT TOUCH ^]------------------------\\