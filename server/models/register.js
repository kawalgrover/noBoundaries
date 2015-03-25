var mongoose = require('mongoose');

//create the regisration schema
var registrationSchema = new mongoose.Schema({
    user : {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    registeredFor : {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'sessions',
        required: true
    }
});

//Export the model schema
module.exports = registrationSchema;
