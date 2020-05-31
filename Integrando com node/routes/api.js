const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const posts = require('../posts')

router.get("/all", (res, req) => {

    res.json(JSON.stringify(posts.getAll()))

});

router.post("/new", bodyParser.json(), (req, res) => { 
    
    let tittle = req.body.tittle;
    let description = req.body.description;

    posts.newPost(tittle, description)

    res.send("post adicionado")
 })

 module.exports = router;