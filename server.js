const express = require('express');
const path = require('path');

const app = new express();
var cors = require('cors');
const PORT = process.env.PORT || 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));

    app.get('*', (req, res) => {
      console.log("Boom!!, Wer'e in production",path.resolve(__dirname, 'client', 'build', 'index.html'));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
}
else{
  app.use(cors());
  app.use(express.static(path.join(__dirname, 'client', 'build')));


  app.get('*', (req, res) => {
    console.log("This isn't prod, but we'll see ",path.resolve(__dirname, 'client', 'build', 'index.html'));
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  
  app.post('/', (req, res)=>{ 
      
    console.log(req.body.name); 
    res.send("Boom, Cool")
});
}
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
// const product = {type: "solar", name: "Solar Lamp", description: "Save money with solar lamps", testing: fn}
// console.log(product, JSON.stringify(product))

// console.log(JSON.parse(fn()))
// function fn() { return '{"title": "solar", "name": "Solar lamp", "items": { "i1": [1, 2, 3], "i2": false}}' }


