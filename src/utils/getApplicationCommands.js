
//Gets all command files registered with the discord bot

module.export = async (client, guildId) => {
    let applicationCommands;

    //If server exists
    if (guildId) {
        const guild = await client.guilds.fetch(guildId);
        //Copies a list of registered server commands to applicationCommands
        applicationCommands = guild.commands;
    } else {
        //Fetches global commands
        applicationCommands = await client.application.commands;
    }

    await applicationCommands.fetch();
    return applicationCommands;
}