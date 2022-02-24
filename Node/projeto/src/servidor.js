const porta = 3003

const express = require('express')
const app = express()

app.get('/produto', (req, res, next) =>{
    console.log('Middleware 1...')
    next()
})

app.get('/produto', (req, res, next) =>{
    res.send({ nome: 'Notebook', preco: 123.45 }) //Converter para JSON
})
// app.use('/produto', (req, res, next) =>{
//     res.send({ nome: 'Notebook', preco: 123.45 }) //Converter para JSON
// })  // assim vc pode chamar por todas as requisições - use o postman para testar

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})