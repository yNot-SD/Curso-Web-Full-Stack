var express = require("express"); 
var app = express();
var bodyParser = require("body-parser");


let alunos = [
    { id: 0, nome: "João"},
    { id: 1, nome: "Marcia"},
    { id: 2, nome: "Jelfred"},
    { id: 3, nome: "Malafaia"}
]

app.use(bodyParser.urlencoded);

app.get("/", (req, res) => {

    res.send("Hello World")

})

app.get("/alunos", (req, res) => {

    res.json(JSON.stringify(alunos))

})

app.get("/alunos", (req, res) => {

    console.log(req.body);
    let aluno = aluno[req.body.id];
    res.json(aluno);
})

app.get("/alunos/:id", (req, res) => {

    console.log(req.params.id);
    let aluno = aluno[req.params.id];
    res.json(aluno);
})

app.listen(3000, () => console.log('Server funfando...'))