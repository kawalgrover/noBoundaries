var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//create the application
var app = express();

//logging on server side
var morgan = require('morgan');
app.use(morgan('combined'));

//add middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS support
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


//Connect to MongoDB
mongoose.connect('mongodb://admin:admin@ds035127.mongolab.com:35127/noboundaries');
mongoose.connection.once('open', function(){

    //load the models
    app.models = require('./models/index');

    //load the routes
    var routes = require('./routes');
    _.each(routes, function(controller, route){
        app.use(route, controller(app, route));
    });

    console.log('Listening on port 3000...');
    app.listen(3000);
});


