const address = require('../models/db');

module.exports.index = function(req,res){
    res.render('index',{address:address});
}

module.exports.category = function(req,res){
    res.render('category');
};

module.exports.education = function(req,res){
    res.render('education');
};

module.exports.tax = function(req,res){
    res.render('tax');
};

module.exports.health = function(req,res){
    res.render('health');
};

module.exports.safety = function(req,res){
    res.render('safety');
};

module.exports.employment = function(req,res){
    res.render('employment');
};

module.exports.economy = function(req,res){
    res.render('economy');
};

module.exports.candidate = function(req,res){
    res.render('Candidates');
};


module.exports.usersAll = function(req,res){
    res.render('users');
}


module.exports.queueol = function(req,res){
    res.render('readytoVote');
}