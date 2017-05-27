const Sequelize = require('sequelize');
const database = require('./database');

const User = database.define('users', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
    name: {
        type: Sequelize.STRING
    },
	email: {
		type: Sequelize.STRING,
		allowNull: false
	},
    phonenumber: {
        type: Sequelize.STRING,
    },
    message: {
        type:Sequelize.STRING,
        allowNull:false
    }
  
}, {
	timestamps: true
});


database.sync();
module.exports.User = User;

