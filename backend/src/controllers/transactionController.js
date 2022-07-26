const {Transaction} = require('../models/association')

//GET
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({})
        res.json(transactions)
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving transactions'
        })
    }
}

//GET
const getOneTransaction = async (req, res) => {
    const id = req.params.id
    try {
        const transaction = await Transaction.findByPk(id)
        res.send(transaction)
    } catch (err) {
        res.status(500).send({
            message: `Error while retrieving Transaction with id: ${id}`
        })
    }
}

module.exports = {
    getAllTransactions,
    getOneTransaction
}