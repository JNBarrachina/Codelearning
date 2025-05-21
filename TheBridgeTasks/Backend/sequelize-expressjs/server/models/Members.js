const { DataTypes } = require("sequelize");
const db = require("../db");

const defineMembersModel = db.sequelize.define(
    'Members',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      registration_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false  // <---- esto elimina createdAt y updatedAt
    }
  );

  
module.exports = defineMembersModel;