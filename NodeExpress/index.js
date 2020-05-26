const express = require('express');
const path = require('path');


const app = express();

let consoleMethod =(req, res, next) => {
    console.log(req.method);
    next("Error qq")
}

app.use("/site", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res)=>{
    res.send("Hello World from GET");
})


const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})