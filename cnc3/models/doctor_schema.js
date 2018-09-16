
/* eslint-disable */
var mongoose = require('mongoose');
/* eslint-enable */
const Schema = mongoose.Schema;

var doctor_schema = new Schema ({
        dNumber:{
            type: String
        },
        number: {
            type: Number
        },
        email: {
            type: String
        },
        address: {
            type: String
        },
        pincode: {
            type: Number
        },
        password: {
            type: String
        },
        ENT: {
            type: Number
        },
        Surgery: {
            type: Number
        },
        Medicine: {
            type: Number
        },
        SkinVD: {
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
});

var doctor_schema = mongoose.model('doctor_schema', doctor_schema);

module.exports = doctor_schema;
