//This is the COMMANDS file that will hold the basic code for all slash commands for the bot.


require('dotenv').config();                                 //grants access to the .env file where the TOKEN is stored
const { REST, Routes } = require('discord.js');

const token = process.env.TOKEN;
const clientId = process.env.BOT_ID;
const guildId = process.env.GUILD_ID;

const commands = [ //Array of objects where each object represents a command
    {
        //name: 'hey',
        //description: 'Replies with Hey!',
    },

];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

/*
rest.get(Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        return Promise.all(promises);
    });
*/


//I still have no idea what this "async" actually does but its important for some reason
/*
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
        console.log(`There was an error: ${error}`)
    }
})();*/