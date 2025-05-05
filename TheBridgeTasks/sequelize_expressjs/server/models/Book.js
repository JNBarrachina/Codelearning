const { DataTypes } = require("sequelize");
const db = require("../db");

const defineBookModel = db.sequelize.define(
    'Books',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      length: {
        type: DataTypes.INTEGER,
      }
    },
    {}
  );

  
module.exports = defineBookModel;