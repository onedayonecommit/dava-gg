const Sequelize = require("sequelize");

class Reply extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            rno: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            // bno: {} freeboard bno FK
            content: {
                allowNull: false,
                type: Sequelize.STRING(2000)
            },
            // nickname:{} user nickname FK
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            modelName: "Reply",
            tableName: "reply",
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        })
    }
}

module.exports = Reply