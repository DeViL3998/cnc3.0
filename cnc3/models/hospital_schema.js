
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
  facilities : {
    type : Array
  },
  superSpec : {
    type : Array
  },
  optionalFacilities: {
    type : Array
  }
});

var hospital_schema = mongoose.model('hospital_schema', hospital_schema);

module.exports = hospital_schema;
