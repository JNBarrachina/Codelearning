const { DataTypes } = require("sequelize");
const db = require("../db");

const defineAuthorModel = db.sequelize.define(
    'Authors',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
      }
    },
    {}
  );


module.exports = defineAuthorModel;