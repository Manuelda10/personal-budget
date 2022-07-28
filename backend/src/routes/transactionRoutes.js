const express = require('express')
const transactionsRouter = express.Router()
const transactionController = require('../controllers/transactionController')

transactionsRouter
    .get('/', transactionController.getAllTransactions)
    .get('/:transactionId', transactionController.getOneTransaction)
    .post('/:transactionId', transactionController.postOneTransaction)
    .put('/:transactionId', transactionController.updateTransaction)
    .delete('/:transactionId', transactionController.deleteTransaction)

module.exports = transactionsRouter