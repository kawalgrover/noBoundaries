var restful = require('node-restful');

module.exports = function(app, route){

    // Setup the controller for REST.
    var rest = restful.model(
         'register',
         app.models.register
         ).methods(['get', 'put', 'post', 'delete']);

    rest.register(app, route);

    return function(req, res, next) {
        next();
    };
};
