const {testServer} = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = (client) => {
    
    try {
        const localCommands = getLocalCommands();
        const applicationCommands = 
    } catch (error) {
        console.log(`There was an error: ${error}`);

    }
}