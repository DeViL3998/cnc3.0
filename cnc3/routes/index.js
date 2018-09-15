var express = require('express');
var router = express.Router();
var http = require('http');
var path = require('path');
var url = require('url');

var users = require('../models/user_schema');
var hospitals = require('../models/hospital_schema')
var mongoose = require('mongoose');


router.get('/',function (req, res, next) {
  res.sendFile(path.join(__dirname,"../public/index.html"));
});


//LOGIN
router.get('/login', function(req, res, next) {
  res.send('hello');
});
/* GET home page. */
router.post('/login', function(req, res, next) {
  res.send(req.body.email);
  if((req.body.email == "adarsh.brata@gmail.com" && req.body.password=="adarsh") || (req.body.email == "dikshant.brahma@gmail.com" && req.body.password=="dikshant")){
    res.send("hello")
    //res.render('profile', {password :req.password});
  } else {
    res.send('not welcome')
  }
});


//SIGNUP------------------------------------------------------------------------------------------------------------------
router.get('/signup', function (req, res) {
  
});

router.post('/signup', function (req, res) {

    console.log(req.body.email);
    var newUser = new users({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      userage : req.body.age,
      userNumber : req.body.number,
      address : req.body.address,
      pincode : req.body.pincode,
    });

    newUser.save()
      .then(() => {
        console.log("SAVED USER");
        res.sendFile(path.join(__dirname,'../public/login.html'));
      })
      .catch(err => {
        res.send(err)
      });
});

//SEARCH HOSPITAL---------------------------------------------------------------------------------------------------------
router.get('/hospital/search', function (req, res, next) {
  
});

router.post('/hospital/register', function (req, res, next) {
  var newHosp = new hospitals({
    h_name:req.body.name,
    number: req.body.number,
    email: req.body.email,
    address: req.body.address,
    pincode: req.body.pincode,
    doctor: req.body.doctor,
    facilities: req.body.facilities,
    superSpec: req.body.superSpeciality,
    optionalFacilities: req.body.optionalFacilities
  });

  newHosp.save()
    .then((RES) => {
      console.log("hosp saved");
      res.sendFile(path.join(__dirname,'../public/weWillVerify.html'))
    })
    .catch(err =>{
      res.send(err)
    })
});

//SEARCH DOCTOR------------------------------------------------------------------------------------------------------------
router.get('/doctor/search')

module.exports = router;
