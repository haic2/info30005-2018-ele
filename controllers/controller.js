const info = require('../models/db');

module.exports.index = function(req,res){
    res.render('index');
}

module.exports.usersAll = function(req,res){
    res.render('users');
}
module.exports.fetch = function(req,res){
    res.render('info',{info:info[req.params.id]});
}