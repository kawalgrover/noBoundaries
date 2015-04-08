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

//SignIn
userSchema.methods.signInFB = function(id,name,email,token){
    this.online = true;
    this.official_name = name;
    this.session_token = generateToken(6);
    this.facebook.id = id;
    this.facebook.name = name;
    this.facebook.email = email;
    this.facebook.token = token;
}
userSchema.methods.signInTW = function(id,displayName,username,token){
    this.online = true;
    this.official_name = displayName;
    this.session_token = generateToken(6);
    this.twitter.id = id;
    this.twitter.displayName = displayName;
    this.twitter.username = username;
    this.twitter.token = token;
}
userSchema.methods.signInGG = function(id,name,email,token){
    this.online = true;
    this.official_name = name;
    this.session_token = generateToken(6);
    this.google.id = id;
    this.google.name = name;
    this.google.email = email;
    this.google.token = token;
}

//LogIn
userSchema.methods.logInFB = function(name,email,token){
    this.online = true;
    this.session_token = generateToken(6);
    this.facebook.name = name;
    this.facebook.email = email;
    this.facebook.token = token;
}
userSchema.methods.logInTW = function(displayName,username,token){
    this.online = true;
    this.session_token = generateToken(6);
    this.twitter.displayName = displayName;
    this.twitter.username = username;
    this.twitter.token = token;
}
userSchema.methods.logInGG = function(name,email,token){
    this.online = true;
    this.session_token = generateToken(6);
    this.google.name = name;
    this.google.email = email;
    this.google.token = token;
}

//Link social network
userSchema.methods.linkFB = function(id,name,email,token){
    this.facebook.id = id;
    this.facebook.name = name;
    this.facebook.email = email;
    this.facebook.token = token;
}
userSchema.methods.linkTW = function(id,displayName,username,token){
    this.twitter.id = id;
    this.twitter.displayName = displayName;
    this.twitter.username = username;
    this.twitter.token = token;
}
userSchema.methods.linkGG = function(id,name,email,token){
    this.google.id = id;
    this.google.name = name;
    this.google.email = email;
    this.google.token = token;
}

//LogOut
userSchema.methods.LogOut = function(){
    this.online = false;
    this.google.token = null;
    this.twitter.token = null;
    this.facebook.token = null;
}

var generateToken = function(lenght){
    var token = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < lenght; i++ )
        token += possible.charAt(Math.floor(Math.random() * possible.length));
    return token;
}

module.exports = mongoose.model('users', userSchema);;
