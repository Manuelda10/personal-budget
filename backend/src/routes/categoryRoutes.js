const express = require('express')
const categoriesRouter = express.Router()
const categoryController = require('../controllers/categoryController')

categoriesRouter
    .get('/', categoryController.getAllCategories)
    .get('/:id', categoryController.getOneCategory)
    .post('/:id', categoryController.postOneCategory)
    .delete('/:id', categoryController.deleteCategory)

module.exports = categoriesRouter