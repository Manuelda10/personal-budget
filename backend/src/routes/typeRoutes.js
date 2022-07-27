const express = require('express')
const typesRouter = express.Router()
const typeController = require('../controllers/typeController')

typesRouter
    .get('/', typeController.getAllTypes)
    .get('/:id', typeController.getOneType)
    .get('/transactions', typeController.getTransactionsByType)
    .get('/categories', typeController.getCategoriesByType)