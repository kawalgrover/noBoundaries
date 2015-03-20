var mongoose = require('mongoose');

//User

var userSchema = new mongoose.Schema({
        official_name : String,
        website : String,
        description : String,
        token_name : String,
        online : Boolean,
        session_token : String,
        facebook : {
            id : String,
            token : String,
            email : String,
            name : String
        },
        twitter : {
            id : String,
            token : String,
            displayName : String,
            username : String
        },
        google : {
            id : String,
            token : String,
            email : String,
            name : String
        }
    });

module.exports = userSchema;
