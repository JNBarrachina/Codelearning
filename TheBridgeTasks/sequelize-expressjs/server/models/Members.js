const { DataTypes } = require("sequelize");
const db = require("../db");

const defineMembersModel = db.sequelize.define(
    'Members',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      registration_date: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      timestamps: false  // <---- esto elimina createdAt y updatedAt
    }
  );

  
module.exports = defineMembersModel;