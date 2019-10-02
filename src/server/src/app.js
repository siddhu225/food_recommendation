const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var { User } = require("../models/user");
var nodemailer = require('nodemailer');
var zomato = require('zomato-api');
var client = zomato({
userKey: '3e1f89ffc585da2d6eda1dc259fbc373'
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Users');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.post("/forgot/password", (req, res) => {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      console.log("THIS IS ERROR RESPONSE");
      //res.json(err)
    }
    user.password = req.body.password;

    user.save(function(error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true
      });
    });
  });
});


app.post("/login", (req, res) => {
  
  var username = req.body.email;
  var password = req.body.password;

  User.findOne({ email: username }, function(err, user) {
    
    if (err) {
      console.log("THIS IS ERROR RESPONSE");
      res.json(err);
    }

    if (user && user.password == password ) {
      console.log("User found");
      res.send("login successfull");
    } else {
      console.log("Credentials wrong");
      res.send("not_user");
    }
  });
});

app.post('/signup',(req,res)=>{
  let r = Math.random()
    .toString(36)
    .substring(7);
  var new_user = new User({
    name: req.body.name,
    dob: req.body.dob,
    gender: req.body.gender,
    number: req.body.number,
    email: req.body.email,
    password: r,
  });

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sumalasai225@gmail.com',
      pass: 'siddhu@98'
    }
  });
  
  var mailOptions = {
    from: 'sumalasai225@gmail.com',
    to: req.body.email,
    subject: 'welcome to zomato food recommendation system',
    text: "YOUR PASSWORD IS:" + r
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  new_user.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "User saved successfully!"
    });
});

});

app.get('/posts',(req,res)=>{

  client.getCities({q: 'Hyderabad'})
  .then(res => console.log(res))
  .catch(err => console.log(err)); 

  client.getCollections({city_id: 256})
  .then(res => console.log(res))
  .catch(err => console.log(err));

})


app.listen(process.env.PORT || 8081)