const express = require ('express')
const app = express()
const cors = require('cors') 

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
        {nome: 'Alex'},
        {password: 'santos'},
        {email: 'alex@teste.com'}
    ])
})

app.listen('4567')