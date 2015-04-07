var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var passport = require('passport')

var UserHandler = require('./handlers/UserHandler');
var AuthHandler = require('./handlers/AuthHandler');

//create the application
var app = express();

var google_strategy = require('passport-google-oauth').OAuth2Strategy;

//logging on server side
var morgan = require('morgan');
app.use(morgan('dev'));

//add middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(passport.initialize());

//CORS support
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});



//Connect DB
mongoose.connect('mongodb://admin:admin@ds035127.mongolab.com:35127/noboundaries');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    //load the models
    app.models = require('./models/index');

    //load the routes
    var routes = require('./routes/routes');
    _.each(routes, function(controller, route){
        app.use(route, controller(app, route));
    });

    var handlers = {
    user: new UserHandler(),
    auth: new AuthHandler()
    };

    var passportRoutes = require('./routes/passportroutes');
    passportRoutes.setup(app,handlers);

});

passport.use(new google_strategy({
    clientID: '738881702552-t7ta31oc68pf9ujljftteu4v7h6v71oh.apps.googleusercontent.com',
    clientSecret: 'wst49LrsAT0SGSa35j4cAeIf',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    db.findOne({email: profile._json.email},function(err,usr) {
        usr.token = accessToken;
        usr.save(function(err,usr,num) {
            if(err) {
                console.log('error saving token');
            }
        });
        process.nextTick(function() {
            return done(null,profile);
        });
    });
  }
));




console.log('Listening on port 3000...');
app.listen(3000);
