const express = require('express')
const app = express();
const path = require("path")
require('dotenv').config()

const videos = [
    "Lf3ZV0UsnEo",
    "elIl48sZ3rA",
    "ZtMzB5CoekE",
    "NYdrAIPLhIw"
]

app.get("/api/videos", (req, res) => {
    res.send(videos)
})

// if (process.env.NODE_ENV != 'development') {
    app.use(express.static(path.join(__dirname, 'front/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'front/build', function (error) {
            if (error) {
                res.status(500).res.send(error)
            }
        }))
    })
// }


app.listen(3000, () => {
    console.log("Running")
})