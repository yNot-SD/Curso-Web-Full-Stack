const http = require('http')
const express = require(' express')
const status = require("http-status")
const sequelize = require('./src/database/database')
const app = express();
const routes = require('./src/routes/routes');

app.use(express.json());

app.use('/sistema', routes)

app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page nou found");
})

app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).json({ error })
})


//force: false impede que recrie as tabelas do zero, perdendo os dados
sequelize.sync({ force: false }.then(() =>   {
    const port = 3003;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
}))