//This file handles all events within the events folder

const path = require('path');
const getAllFiles = require('../utils/getAllFiles');

module.exports = (client) => {
  //List of all folders inside the /events folder
  const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

  //Loops through all folders:
  for (const eventFolder of eventFolders) {
    //gets all Files within event folder
    const eventFiles = getAllFiles(eventFolder);
    //sorts files inside folders so that files with lower numbers get higher priority
    eventFiles.sort((a, b) => a > b);

    //Gets the name of the event based on the folder name
    const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();

    //Listens for events to happen and then calls the required event
    client.on(eventName, async (arg) => {
      for (const eventFile of eventFiles) {
        const eventFunction = require(eventFile);
        await eventFunction(client, arg);
      }
    });
  }
};
