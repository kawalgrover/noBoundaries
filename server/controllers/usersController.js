var restful = require('node-restful');

module.exports = function(app, route){

    // Setup the controller for REST.
    var rest = restful.model(
         'users',
         app.models.users
         ).methods(['get', 'put', 'post', 'delete']);

    //register this endpoint with the application.
    rest.register(app, route);

    return function(req, res, next) {
        next();
    };
};
