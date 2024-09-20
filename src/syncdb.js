const sequelize = require('./utils/database');
const Guild = require('./models/guild');

//Refreshes ENTIRE db
sequelize.sync({ force: true });

//only adds NEW columns 
//sequelize.sync({ alter: true });
