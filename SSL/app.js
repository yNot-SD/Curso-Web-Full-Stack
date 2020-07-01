const express = require('express');
const app = express();

app.use("*", (req, res, next) => {
    if (req.headers['x-forwarded-proto'] == "https"){
        next();
    } else {
        res.redirect("https://" + req.headers.host + req.originalUrl)
    }
})


app.get('/teste', (req, res) => {
    res.send("Teste do HTTPS")
})

app.get('/', (req, res) => {
    res.send("Hello World - SSL")
})

app.listen(3000, () => {
    console.log("Server Running")
})

