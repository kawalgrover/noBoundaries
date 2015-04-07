var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;

function setup(app,db,passport) {

    /* GOOGLE */

    passport.use(new GoogleStrategy({
        clientID: '738881702552-t7ta31oc68pf9ujljftteu4v7h6v71oh.apps.googleusercontent.com',
        clientSecret: 'wst49LrsAT0SGSa35j4cAeIf',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        passReqToCallback : true 
    },
    function(req, token, refreshToken, profile, done) {
        process.nextTick(function() {
            //Check if the user is already logged in
            if (!req.user) {
                db.users.findOne({ 'google.id' : profile.id }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        // LogIn
                        if (!user.google.token) {
                            newUser.logInGG(profile.displayName,(profile.emails[0].value || '').toLowerCase(),token)
                            user.save(function(err) {
                                if (err)
                                    return done(err);
                                else
                                    return done(null, user);
                            });
                        } else {
                            return done(null, user);
                        }
                    } else {
                        // Sign in
                        var newUser = new db.users();
                        newUser.signInGG(profile.id,profile.displayName,(profile.emails[0].value || '').toLowerCase(),token)
                        newUser.save(function(err) {
                            if (err)
                                return done(err);
                            else
                                return done(null, newUser);
                        });
                    }
                });
            } else {
                // Link account
                var user = req.user;
                user.linkGG(profile.id,profile.displayName,(profile.emails[0].value || '').toLowerCase(),token)
                user.save(function(err) {
                    if (err)
                        return done(err);
                    else
                        return done(null, user);
                });
            }
        });
    }));
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/sessions',
            failureRedirect : '/login'
        })
    );
    /*
    app.get('/auth/facebook',handlers.auth.facebookSignIn);
    app.get('/auth/facebook/callback',handlers.auth.facebookSignInCallback);
    app.get('/auth/local',handlers.auth.localSignIn);
    app.get('/auth/local/callback',handlers.auth.localSignInCallback);
    app.get('/user',handlers.user.getUsers);
    app.get('/user/:id',handlers.user.getUser);
    app.put('/user/:id',handlers.user.updateUser);
    app.get('/user/:first/:last/:email',handlers.user.createUser);
    */
    console.log("Successfully set up auth routes");
};

exports.setup = setup;
