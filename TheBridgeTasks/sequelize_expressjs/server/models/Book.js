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
      publisher: {
        type: DataTypes.STRING,
      },
      publication_year: {
        type: DataTypes.INTEGER,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false  // <---- esto elimina createdAt y updatedAt
    }
  );
  
module.exports = defineBookModel;