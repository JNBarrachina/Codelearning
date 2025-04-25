const { DataTypes } = require("sequelize");
const connectDB = require("../db");

const Book = Sequelize.define(
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
        tyoe: DataTypes.INTEGER,
      }
    },
    {
    },
);

connectDB.sequelize.sync();
exports.Book = Book;