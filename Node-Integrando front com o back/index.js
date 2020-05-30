const PORT = 3000;
const express = require('express')
const bodyParser = require('body-parser')
const posts = require('./posts.js')


const app = express();

app.get("/all", (res, req) => {

    res.json(JSON.stringify(posts.getAll()))

});

app.post("/new", bodyParser.json(), (req, res) => { 
    
    let tittle = req.body.tittle;
    let description = req.body.description;

    posts.newPost(tittle, description)

    res.send("post adicionado")
 })

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})



