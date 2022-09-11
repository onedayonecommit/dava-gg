const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            uno: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            }, user_id: {
                allowNull: false,
                type: Sequelize.STRING(80),
                unique: true,
            }, nickname: {
                allowNull: false,
                type: Sequelize.STRING(40),
                unique: true,
            }, email: {
                allowNull: false,
                type: Sequelize.STRING(400),
                unique: true,
            }, password: {
                allowNull: false,
                type: Sequelize.STRING(128),
            }, exp: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0,
            }, refresh_token: {
                allowNull: true,
                type: Sequelize.STRING(500),
                unique: true,
            }
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            modelName: "User",
            tableName: "user",
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        })
    }
    // static associate(db) {
    //     db.User.hasMany(db.Freeboard, { foreignkey: "uno", soucekey: "uno" })
    // }
}
module.exports = User