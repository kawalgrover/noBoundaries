var mongoose = require('mongoose');

//create the regisration schema
var registrationSchema = new mongoose.Schema({
    therapy: {
        type: String,
        required: true
    },
    appointment: {
        type: Date,
        required: true
    }
});

//Export the model schema
module.exports = registrationSchema;
