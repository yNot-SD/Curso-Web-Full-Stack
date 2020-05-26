var express = require('express');
var app = express();


let consoleMethod = (req, res, next) =>{
    console.log(req.method);
    next();
}

let hello = (req, res) => {

    res.send("Hello Wold")

}

app.get("/", consoleMethod, hello)

app.post("/", consoleMethod, hello)

app.listen(3000, () => console.log("Server rodando..."))