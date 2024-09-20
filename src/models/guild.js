const Sequelize = require('sequelize');
const sequelize = require('../utils/database');


module.exports = sequelize.define('guild', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	welcomeChannelId: {
		type: Sequelize.STRING,
		allowNull: true
	},
	welcomeRoleId: {
		type: Sequelize.STRING,
		allowNull: true
	},
})



/*
 * equivalent to: CREATE TABLE tags(
 * name VARCHAR(255) UNIQUE,
 * description TEXT,
 * username VARCHAR(255),
 * usage_count  INT NOT NULL DEFAULT 0
 * );
 */

/*
const Guild = sequelize.define('guild', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});

module.exports = Guild;
//*/