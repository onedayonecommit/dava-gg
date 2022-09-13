const { dot } = require("../modules/module")
const config = {
  dev: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE_NAME,
    dialect: "mysql",
  },
};

module.exports = config;