const { dot } = require("../modules/module")
const config = {
  dev: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: "0.0.0.0",
    database: process.env.DB_TABLE_NAME,
    dialect: "mysql",
  },
};

module.exports = config;