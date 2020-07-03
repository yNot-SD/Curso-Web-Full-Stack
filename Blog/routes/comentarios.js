const express = require("express");
const router = require("express").Router()

router.get('/comentarios/:postid', (req, res) =>{
    res.json({
        autor: "Autor",
        conteudo: 'Comentario qualquer'
    })
})

module.exports = router