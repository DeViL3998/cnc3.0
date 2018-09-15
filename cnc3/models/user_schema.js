var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var user_schema = new Schema({
    username :{
        type : String
    },
    userage :{
      type: Number  
    },
    email:{
        type: String
    },
    userNumber :{
        type: Number
    },
    address:{
        type: String
    },
    pincode :{
        type: Number
    },
    password :{
        type: String
    }

});

var user_schema = mongoose.model('user_schema', user_schema);

module.exports = user_schema;