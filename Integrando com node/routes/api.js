const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const posts = require('../posts')

const options = {
    origin: "http://localhost:3000"
}

router.use(cors());

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