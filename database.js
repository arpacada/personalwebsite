const Sequelize = require('sequelize');

const connectionUrl = 'postgres://amp:amp@localhost:5432/amp';
const database = new Sequelize(connectionUrl);

module.exports = database;
