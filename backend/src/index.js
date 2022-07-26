const express = require('express')
const app = express()
const categoriesRouter = require('./routes/categoryRoutes')
const transactionsRouter = require('./routes/transactionRoutes')


app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>NOTES API</h1>')
})

app.use('/api/transactions', transactionsRouter)
//app.use('/api/categories', categoriesRouter)

const PORT = process.env.PORT || 3030

const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})