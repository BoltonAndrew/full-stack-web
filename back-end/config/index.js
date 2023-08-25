const db = require("./db.js");

module.exports = {
  ...db,
  port: process.env.PORT || 3001,
};
