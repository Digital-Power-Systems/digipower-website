const express = require('express');
const path = require('path');

const app = new express();
var cors = require('cors');
const PORT = process.env.PORT || 8080;

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');


const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}))
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));

    app.get('*', (req, res) => {
      console.log("Boom!!, Wer'e in production",path.resolve(__dirname, 'client', 'build', 'index.html'));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
      app.post('/', (req, res)=>{ 
        transporter.sendMail({
          to: "manager@digipower.in",
          from: 'manager@digipower.in',
          subject: `Customer message from digipower.in, ${req.body.name} has sent a message `,
          html: `<h2>${req.body.name} has sent a message from contact form in www.digipower.in</h2><br /><p style="font-size: 1.1rem"><strong>Name: </strong>  ${req.body.name}</p><p style="font-size: 1.1rem"><strong>Message: </strong>${req.body.message}</p><br /><h2> Contacts given: </h2><br /><p style="font-size: 1.1rem"><strong>Email address: </strong> ${req.body.email} </p><p style="font-size: 1.1rem"><strong>Mobile number:  </strong> ${req.body.mob == undefined?"not given":req.body.mob}<p>`
        })
        .then(res.send("Thank you for contacting us, We'll get back to you soon! :)"))
        .catch((err) => console.log("Encountered Erroe", err)) ;
       console.log(req.body.mob);
       res.send("Boom, Cool")
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
     transporter.sendMail({
       to: "manager@digipower.in",
       from: 'manager@digipower.in',
       subject: `Customer message from digipower.in, ${req.body.name} has sent a message `,
       html: `<h2>${req.body.name} has sent a message from contact form in www.digipower.in</h2><br /><p style="font-size: 1.1rem"><strong>Name: </strong>  ${req.body.name}</p><p style="font-size: 1.1rem"><strong>Message: </strong>${req.body.message}</p><br /><h2> Contacts given: </h2><br /><p style="font-size: 1.1rem"><strong>Email address: </strong> ${req.body.email} </p><p style="font-size: 1.1rem"><strong>Mobile number:  </strong> ${req.body.mob == undefined?"not given":req.body.mob}<p>`
     })
     .then(res.send("Thank you for contacting us, We'll get back to you soon! :)"))
     .catch((err) => console.log("Encountered Erroe", err)) ;
    console.log(req.body.mob);
   
});
}
else{
  app.use(express.static(path.join(__dirname, 'client', 'build')));


  app.get('*', (req, res) => {
    console.log("This isn't prod, but we'll see ",path.resolve(__dirname, 'client', 'build', 'index.html'));
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


