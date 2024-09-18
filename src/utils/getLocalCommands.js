const path = require('path');
const getAllfiles = require('./getAllFiles');

module.export = (exceptions) => {
    let localCommands = [];

    const commandCategories = getAllfiles(
        path.join(__dirname, '..', 'commands'),
        true
    )

    console.log(commandCategories);

    return localCommands;
}