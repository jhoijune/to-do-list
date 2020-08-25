const Sequelize = require('sequelize');
const item = require('./item');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Item = item(sequelize, Sequelize);

module.exports = { sequelize, Sequelize, Item };
