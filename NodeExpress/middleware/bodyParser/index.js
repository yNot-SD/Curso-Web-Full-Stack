var express = require('express');
var app = express();
var bodyParser = require('body-parser');

let consoleBody = (req, res, next) =>{
    console.log(req.method);
    next();
}

let hello = (req, res) => {

    res.send("Hello Wold")

}

app.use("/", bodyParser.json())

app.use("/", consoleBody)
app.get("/", hello)

app.post("/", hello)

app.listen(3000, () => console.log("Server rodando..."))