
/* eslint-disable */
var mongoose = require('mongoose');
/* eslint-enable */
const Schema = mongoose.Schema;

var hospital_schema = new Schema ({
  h_name : {
    type : String
  },
  number : {
    type :Number
  },
  email : {
    type:String
  },
  address : {
    type: String
  },
  pincode : {
    type : Number
  },
  doctor : {
    type : Array
  },
  
  ENT: {type : Number},
  Surgery: {
       type: Number
     },
  Medicine: {
    type: Number
   },
  SkinVD:{
     type: Number
  },
  gynaecology: {
       type: Number
  },
  Orthopedics: {
     type: Number
  },
  Paediatric: {
     type: Number
  },
// normal ends here-------------------------------------
  Gastroenterology: {
      type: Number
    },
    Neurology: {
      type: Number
    },
    Neurosurgery: {
      type: Number
    },
    PlasticSurgery: {
      type: Number
    },
    Nephrology: {
      type: Number
    },
    Urology: {
      type: Number
    },
    //Special Ends-------------------------------------
    CasualtyService: {
      type: Number
    },
    ChildDelivery: {
      type: Number
    },
    NICU: {
      type: Number
    },
    ICU: {
      type: Number
    },
    Ambulance24: {
      type: Number
    },
    HaemoglobinA: {
      type: Number
    },


});

var hospital_schema = mongoose.model('hospital_schema', hospital_schema);

module.exports = hospital_schema;
