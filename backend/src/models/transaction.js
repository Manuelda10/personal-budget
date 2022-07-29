const { sequelize, Sequelize } = require('../database/db')

const Transaction = sequelize.define('transaction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    concept: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Transaction