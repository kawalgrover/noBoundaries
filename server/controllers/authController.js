module.exports = function(app, route){

    return function(req, res) {
        if (!req.user){
            res.json({success : false, message : "User not authenticated"});
        } else{
            res.json({success : true, user : req.user});
        }
    };

};