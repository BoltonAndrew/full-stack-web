const { db, DataTypes, Model } = require("../../config");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    pass: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
