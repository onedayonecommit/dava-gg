const Sequelize = require("sequelize");

class Admin extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.STRING(80),
            }, password: {
                allowNull: false,
                type: Sequelize.STRING(128)
            }
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            modelName: "Admin",
            tableName: "admin",
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        })
    }
}

module.exports = Admin