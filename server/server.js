// const express = require('express');

// const app = express()


// app.get("/", (req,res) => {
//     res.send("Boom, BackEnd is up!")
// })
// app.listen(3001, () => {
//     console.log("Server started on port 3001")
// })
const product = {type: "solar", name: "Solar Lamp", description: "Save money with solar lamps", testing: fn}
console.log(product, JSON.stringify(product))

console.log(JSON.parse(fn()))
function fn() { return '{"title": "solar", "name": "Solar lamp", "items": { "i1": [1, 2, 3], "i2": false}}' }


