const Sequelize = require("sequelize");

class Freeboard extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            bno: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            }, title: {
                allowNull: false,
                type: Sequelize.STRING(400),
            }, content: {
                allowNull: false,
                type: Sequelize.STRING(4000),
            },
            // nickname: {},
            view_point: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0
            }, heart: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0
            }
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            modelName: "Freeboard",
            tableName: "freeboard",
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        })
    }
}

module.exports = Freeboard