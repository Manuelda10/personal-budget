const express = require('express')
const transactionsRouter = express.Router()
const transactionController = require('../controllers/transactionController')

transactionsRouter
    .get('/', transactionController.getAllTransactions)
    .get('/:transactionId', transactionController.getOneTransaction)

module.exports = transactionsRouter