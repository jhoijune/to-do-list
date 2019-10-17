import Sequelize from 'sequelize';
import item from './item';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

const Item = item(sequelize, Sequelize);

export { sequelize, Sequelize, Item };
