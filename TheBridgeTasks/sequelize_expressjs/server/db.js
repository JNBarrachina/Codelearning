const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'sequelizetest', 'root', 'Password123#@!', {
        host: 'localhost',
        dialect: 'mysql'
});

const db = {};
db.sequelize = sequelize;

module.exports = db;

