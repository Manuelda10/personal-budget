const express = require('express')
const transactionsRouter = express.Router()
const transactionController = require('../controllers/transactionController')

transactionsRouter
    .get('/', transactionController.getAllTransactions)
    .get('/:id', transactionController.getOneTransaction)
    .post('/:id', transactionController.postOneTransaction)
    .put('/:id', transactionController.updateTransaction)
    .delete('/:id', transactionController.deleteTransaction)

module.exports = transactionsRouter