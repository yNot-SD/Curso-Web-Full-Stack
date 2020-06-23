const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000;
const linkRoute = require('./routes/linkRoute')

mongoose.connect('mongodb://localhost/links', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") })
db.once("open", () => { console.log("Banco de dados carregado") })

app.use('/', linkRoute)

app.listen(port, () => console.log(`Exemple app listenin on port ${port}`))