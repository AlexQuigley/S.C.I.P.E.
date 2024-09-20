module.exports = {
    name: 'ping',
    description: 'Replies with the bot ping!',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();  
        
      
      interaction.editReply(
          `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
      );
    },
  };