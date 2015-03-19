var mongoose = require('mongoose');

//create the Contact schema
var contactSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String
    },
    subject : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
});

module.exports = contactSchema;
