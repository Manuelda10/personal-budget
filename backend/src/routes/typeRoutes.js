const express = require('express')
const typesRouter = express.Router()
const typeController = require('../controllers/typeController')

typesRouter
    .get('/', typeController.getAllTypes)
    .get('/:typeId', typeController.getOneType)
    .get('/transactions', typeController.getTransactionsByType)
    .get('/categories', typeController.getCategoriesByType)
    .post(':/id', typeController.postOneType)
    .delete('/:id', typeController.deleteType)

module.exports = typesRouter
