const address = require('../models/db');
const Booth = require('../models/booth');
const db = require('../models/mdb');
var mongoose = require('mongoose');
const Edu = require('../models/policies');
var Queue = require('../models/queue');
const Policy = require('../models/policies');
const Candidate = require('../models/candidates');


module.exports.createCandidate = function(req,res){

    Candidate.create(req.body).then(function(candidate){
        res.send(candidate);
    });
};

var findAllCandidates = function(req,res){
    Candidate.find(function(err,candidate){
        if(!err){
            res.send(candidate);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneCandidate = function(req,res){
    var CandidateInx = req.params.id;
    Candidate.findById(CandidateInx,function(err,candidate){
        if(!err){
            res.send(candidate);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.addbooth = function(req,res){
    Booth.create(req.body).then(function(booth){
        res.send(booth);
    });
};
module.exports.findAllbooths = function(req,res){
    Booth.find(function(err,booth){
        if(!err){
            res.send(booth);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.findOnebooth = function(req,res){
    var BoothInx = req.params.id;
    Booth.findById(BoothInx,function(err,booth){
        if(!err){
            res.send(booth);
        }else{
            res.sendStatus(404);
        }
    });
};
module.exports.getedu = function(req, res, next) {
    Edu.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('education', { policies: result });
        }
    });
};
module.exports.getemp = function(req, res, next) {
    Policy.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('employment', { policies: result });
        }
    });
};
module.exports.getsaf = function(req, res, next) {
    Policy.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('safety', { policies: result });
        }
    });
};

module.exports.gettax = function(req, res, next) {
    Policy.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('tax', { policies: result });
        }
    });
};
module.exports.getcand = function(req, res, next) {
    Candidate.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('Candidates', { candidates: result });
        }
    });
}

module.exports.gethea = function(req, res, next) {
    Policy.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('health', { policies: result });
        }
    });
};
module.exports.enqueue = function(req, res){
        var fname = req.body.fname;
        var lname = req.body.lname;
        var idno = req.body.idno;
        var bname = req.body.bname;

        var data = {fname:fname, lname:lname, idno:idno, bname:bname};

        req.checkBody("fname", 'First name is required').notEmpty();
        req.checkBody("lname", 'Last name is required').notEmpty();
        req.checkBody("idno", 'Personal Identification is required').notEmpty();
        req.checkBody("bname", 'Specifiy a booth is required').notEmpty();

        var errors = req.validationErrors();

        if (errors){
            res.render('readytoVote',{errors: errors});
        }else {
            var newQueue = new Queue({
                fname: fname,
                lname: lname,
                idno: idno,
                bname: bname
            });
            newQueue.save(function(err) {
                if (err) {
                    if (err.name === 'MongoError' && err.code === 11000) {

                        res.render('failed',{body: data});
                    }
                }
                else {
                    console.log(data)
                    res.render('users',{body: data});
                }

                });

        }
};

module.exports.geteco = function(req, res, next) {
    Policy.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('economy', { policies: result });
        }
    });
}
module.exports.findAllCandidates = findAllCandidates;
module.exports.findOneCandidate = findOneCandidate;

module.exports.index = function(req,res){

    res.render('index',{address:address});
};

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
};


module.exports.queueol = function(req,res){
    var errors = [];
    res.render('readytoVote',{errors:errors});
};
module.exports.failed = function(req,res){
    res.render('failed');
};

