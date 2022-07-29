const { sequelize, Sequelize } = require('../database/db')

const Transaction = sequelize.define('transaction', {
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