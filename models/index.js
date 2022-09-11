const dev = require("../config/config")
const Sequelize = require("sequelize");

const Admin = require("./admin")
const Freeboard = require("./freeboard")
const Reply = require("./reply")
const User = require("./user")

let sequelize = new Sequelize(
  dev.dev.database,
  dev.dev.username,
  dev.dev.password,
  dev.dev
)

const db = {}

db.sequelize = sequelize
db.Admin = Admin
db.Freeboard = Freeboard
db.Reply = Reply
db.User = User

Admin.init(sequelize)
Freeboard.init(sequelize)
Reply.init(sequelize)
User.init(sequelize)

// User.associate(db)
Freeboard.associate(db)

module.exports = db