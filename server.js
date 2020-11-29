const express = require('express');
const path = require('path');

const app = new express();
const PORT = process.env.PORT || 8080;



app.use(express.static(path.join(__dirname, 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});



// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
// app.get('/', (req, res) => {
//     res.json({"text": "The backend is alive"});
// })

// app.post('/', (req, res) => {
//     console.log("Server recieved the following data", req.body);
//     res.send("Succesfully recieved data !!")
// })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      console.log(path.resolve(__dirname, 'client', 'build', 'index.html'));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
}
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
// const product = {type: "solar", name: "Solar Lamp", description: "Save money with solar lamps", testing: fn}
// console.log(product, JSON.stringify(product))

// console.log(JSON.parse(fn()))
// function fn() { return '{"title": "solar", "name": "Solar lamp", "items": { "i1": [1, 2, 3], "i2": false}}' }


