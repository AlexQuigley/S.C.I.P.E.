//Registers slash commands when bot comes online

const { testServer } = require('../../../config.json');
const areCommandsDifferent = require('../../utils/areCommandsDifferent');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client) => {
  try {
    //Gets a copy of all local commands stored in bot's filestructure
    const localCommands = getLocalCommands();
    //Gets a copy of all commands registered to the bot on the discord server
    const applicationCommands = await getApplicationCommands(
      client,
      testServer
    );

    //Loop through all local commands and compare them to application commands for any differences
    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      //Checks if command exists on bot
      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );

      //If command DOES exist, compares commands
      if (existingCommand) {
        //If command has property "deleted: true" then bot will remove the command
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id);
          console.log(`🗑 Deleted command "${name}".`);
          continue;
        }

        //Checks if commands are different
        if (areCommandsDifferent(existingCommand, localCommand)) {
          //If commands are different, updates registered command with local command
          await applicationCommands.edit(existingCommand.id, {
            description,
            options,
          });

          console.log(`🔁 Edited command "${name}".`);
        }
        //Checks if local command is set to be deleted and skips it if so
      } else {
        if (localCommand.deleted) {
          console.log(
            `⏩ Skipping registering command "${name}" as it's set to delete.`
          );
          continue;
        }

        //If local command does not exist on bot and it is not set to be 
        //deleted, then: registers command with bot.
        await applicationCommands.create({
          name,
          description,
          options,
        });

        console.log(`👍 Registered command "${name}."`);
      }
    }
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};
