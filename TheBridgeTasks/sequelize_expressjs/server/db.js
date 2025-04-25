const { Sequelize } = require('sequelize');

async function dbconnect(){
    const sequelize = new Sequelize('sequelizetest', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return sequelize
}

const db = {};
db.sequelize = connectdb();

module.exports = dbconnect;

