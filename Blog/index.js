const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("funcionando")
})

const routes = require("./routes/index")
app.use('/api', routes)

app.use(express.static(__dirname + "/client"))

const port = 3000

app.listen(port, ()=>{
    console.log("Server running")
})