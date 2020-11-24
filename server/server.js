const express = require('express');

const app = express()


app.get("/", (req,res) => {
    res.send("Boom, BackEnd is up!")
})
app.listen(3001, () => {
    console.log("Server started on port 3001")
})