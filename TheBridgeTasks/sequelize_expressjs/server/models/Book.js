const { DataTypes } = require("sequelize");
const db = require("../db");

const defineBookModel = db.sequelize.define(
    'Books',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
      },
      publication_year: {
        type: DataTypes.INTEGER,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {}
  );
  
module.exports = defineBookModel;