const { sequelize, Sequelize } = require('../database/db')

const Type = sequelize.define('type', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
})

module.exports = Type