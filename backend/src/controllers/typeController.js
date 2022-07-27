const Type = require("../models/type")
const Transaction = require("../models/transaction")

//GET
const getAllTypes = async (req, res) => {
    try {
        const types = await Type.findAll({})
        res.json(types)
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving types'
        })
    }
}

//GET
const getOneType = async (req, res) => {
    const id = req.params.id
    try {
        const type = await Type.findByPk(id)
    } catch (err) {
        res.status(500).send({
            message: `Error while retrieving Transaction with id: ${id}`
        })
    }
}

//GET
const getTransactionsByType = async (req, res) => {
    const idType = req.params.id
    try {
        const transactions = await Transaction.findAll({ where: { typeId: idType } })
        res.json(transactions)
    } catch (err) {
        res.status(500).send({
            message: `Error retrieving transactions of Type with id: ${idType}`
        })
    }
}

const getCategoriesByType = async (req, res) => {
    const idType = req.params.id
    try {
        const categories = await Category.findAll({ where: { typeId: idType } })
        res.json(categories)
    } catch (err) {
        res.status(500).send({
            message: `Error retrieving categorires of Type with id: ${idType}`
        })
    }
}

module.exports = {
    getAllTypes,
    getOneType,
    getTransactionsByType,
    getCategoriesByType
}