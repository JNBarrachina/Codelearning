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
    {}
  );

  
module.exports = defineMembersModel;