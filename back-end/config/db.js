const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");
const options = process.env.URI || {
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
};

const db = new Sequelize(options);

module.exports = {
  db,
  DataTypes,
  Model,
};
