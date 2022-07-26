const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>NOTES API</h1>')
})

const PORT = process.env.PORT || 3030

const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})