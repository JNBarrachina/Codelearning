const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'librarydb', 'root', 'Password123#@!', {  //Password123#@! or root;
        host: 'localhost',
        dialect: 'mysql'
});

const db = {};
db.sequelize = sequelize;

module.exports = db;

