var express = require('express');
var router = express.Router();
var http = require('http');
var path = require('path');
var url = require('url');
var formDataToObject = require("form-data-to-object");

var users = require('../models/user_schema');
var hospitals = require('../models/hospital_schema');
var doctors = require('../models/doctor_schema');
var mongoose = require('mongoose');

//===================================================================ok
router.get('/api/',function (req, res, next) {
  res.sendFile(path.join(__dirname,"../public/index.html"));
});


//LOGIN===============================================================ok
router.get('/api/login', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/login.html'));
});
//===================================================================
router.post('/api/login', function(req, res, next) {
  
    res.redirect('/api/hospital/search');
    //res.render('profile', {password :req.password});
  
});


//SIGNUP------------------------------------------------------------------ok
router.get('/api/signup', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/signup.html'))
});
//======================================================================ok
router.post('/api/signup', function (req, res) {
  

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
router.get('/api/hospital/search', function (req, res, next) {

 res.render('demosearch2',{});
});




//============================================================================================
router.post('/api/hospital/search', function (req, res, next) {
  const query = req.body.checkbox.reduce((a, x) => ({ ...a,
    [x]: {
      '$gte': 0
    }
  }), {});
  let hosp ;


  hospitals.find(query)
    .then((data) => {
      hosp = data;
      console.log("hosp data"+hosp);
      for (i = 0; i < hosp.length; i++) {
        sum = 0
        for (let key of req.body.checkbox) {
          sum += hosp[i][key];
          console.log(sum);
        }
        hosp[i]["sum"] = sum;
      }
      console.log(hosp);
      res.render('demosearch', {
        hosp
      });
    })
    .catch(err => {
      res.send(err)
    })
  
}) 



//Register Hospitals -----------------------------------------------------
router.get('/api/hospital/register', function (req, res, next) {
  res.sendFile(path.join(__dirname,'../public/hosp_form.html'));
});

router.post('/api/hospital/register', function (req, res, next) {
  console.log(req.body)
  var newHosp = new hospitals({
    h_name: req.body.h_name,
    number: req.body.number,
    email: req.body.email,
    password : req.body.password,
    address: req.body.address,
    pincode: req.body.pincode,
    ENT : req.body.ENT, 
    Surgery: req.body.Surgery,
    Medicine: req.body.Medicine,
    SkinVD: req.body.SkinVD,
    gynaecology: req.body.gynaecology,
    Orthopedics: req.body.Orthopedics,
    Paediatric: req.body.Paediatric,
    Gastroenterology: req.body.Gastroenterology,
    Neurology: req.body.Neurology,
    Neurosurgery: req.body.Neurosurgery,
    PlasticSurgery: req.body.PlasticSurgery,
    Nephrology: req.body.Nephrology,
    Urology: req.body.Urology,
    CasualtyService: req.body.CasualtyService,
    ChildDelivery: req.body.ChildDelivery,
    NICU: req.body.NICU,
    ICU: req.body.ICU,
    Ambulance24: req.body.Ambulance24,
    HaemoglobinA: req.body.HaemoglobinA,
    Urine : req.body.urine,
    Sugar : req.body.sugar,
    Lipid : req.body.lipid,
    ICTMalaria : req.body.malaria,
    Lymphocyte : req.body.lymph
  });

  newHosp.save()
    .then((RES) => {
      console.log(RES);
      res.sendFile(path.join(__dirname,'../public/weWillVerify.html'))
    })
    .catch(err =>{
      res.send(err)
    })
});

//SEARCH DOCTOR------------------------------------------------------------------------------------------------------------
router.get('/api/doctor/search', function (req, res, next) {
  res.render('docSearch',{})
})

//post======================================================================
router.post('/api/doctor/search', function (req, res, next) {
  doc = {};
  const query = req.body.checkbox.reduce((a, x) => ({ ...a,
    [x]: {
      '$gte': 0
    }
  }), {});

  console.log(query);

  doctors.find(query)
    .then((data) => {
      doc = data
    })
    .catch(err => {
      res.send(err)
    })
  sum = 0;
  for(i= 0; i<doc.length; i++){
    sum = 0
    for(j=0; j<req.body.checkbox.length; j++){

    }

  }

  res.render('demosearch', doc);
})



//Register doctor==================================================================
router.get('/api/doctor/register', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/hosp_form.html'));
});

router.post('/api/hospital/register', function (req, res, next) {
  console.log(req.body)
  var newDoc = new doctors({
    dname: req.body.dname,
    number: req.body.number,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    pincode: req.body.pincode,
    ENT: req.body.ENT,
    Surgery: req.body.Surgery,
    Medicine: req.body.Medicine,
    SkinVD: req.body.SkinVD,
    gynaecology: req.body.gynaecology,
    Orthopedics: req.body.Orthopedics,
    Paediatric: req.body.Paediatric,
    Gastroenterology: req.body.Gastroenterology,
    Neurology: req.body.Neurology,
    Neurosurgery: req.body.Neurosurgery,
    PlasticSurgery: req.body.PlasticSurgery,
    Nephrology: req.body.Nephrology,
    Urology: req.body.Urology,
  });

  newDoc.save()
    .then((RES) => {
      console.log(RES);
      res.sendFile(path.join(__dirname, '../public/weWillVerify2.html'))
    })
    .catch(err => {
      res.send(err)
    })
});

module.exports = router;
