const { DataTypes, BelongsTo } = require("sequelize");
const db = require("../db");
const Book = require("./Book");
const Member = require("./Members");

const defineLoansModel = db.sequelize.define(
    'Loans',
    {
      loan_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      return_date: {
        type: DataTypes.DATE,
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {}
  );


Book.hasMany(defineLoansModel);
defineLoansModel.belongsTo(Book);
Member.hasMany(defineLoansModel);
defineLoansModel.belongsTo(Member);

module.exports = defineLoansModel;