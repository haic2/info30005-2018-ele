const Booth = require('../models/booth');
const db = require('../models/mdb');
const mongoose = require('mongoose');
const Edu = require('../models/policies');
const Queue = require('../models/queue');
const Policy = require('../models/policies');
const Candidate = require('../models/candidates');
const Query =require('../models/query');





var getbooth = function(req, res, next) {
    Booth.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('map', { booths: result });
        }
    });
};
module.exports.getbooth = getbooth;





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
};

module.exports.gethea = function(req, res, next) {
    Policy.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('health', { policies: result });
        }
    });
};
module.exports.enqueue = function(req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var idno = req.body.idno;
    var bname = req.body.bname;




    req.checkBody('fname', 'First name is required').notEmpty();
    req.checkBody("lname", 'Last name is required').notEmpty();
    req.checkBody("idno", 'Personal Identification is required').notEmpty();
    req.checkBody("bname", 'Specifiy a booth is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        Booth.find(function(error, result) {
            if (error) {
                console.log(error);
            } else {
                res.render('readytoVote', {errors: errors, booths: result});
            }
        });
    }else {
        var newQueue = new Queue({
            fname: fname,
            lname: lname,
            idno: idno,
            bname: bname,
            time: Date.now()
        });
        newQueue.save(function (err) {
            if (err) {
                if (err.name === 'MongoError' && err.code === 11000) {
                    Queue.find({idno: idno},function(err, newbee){
                        bname = newbee[0].bname;
                        Queue.find({bname: bname}, function (err, queue) {
                            var position = 0;
                            var qtime;
                            var sortQueue = queue.sort({time:1});
                            for (i = 0; i < sortQueue.length; i++) {
                                if(sortQueue[i].idno == idno){
                                        position=i;
                                        qtime = sortQueue[i].time;

                                }
                            }

                            var data = {fname: fname, lname: lname, idno: idno, bname: bname, etime: (qtime.toString())};

                            res.render('failed', {body: data, front: position});


                        });

                    });

                }
            }
            else {
                Queue.find({bname: bname}, function (err, queue) {
                    var position = 0;
                    var sortQueue = queue.sort({time:1});
                    for (i = 0; i < sortQueue.length; i++) {
                        if(sortQueue[i].idno ==  idno){
                            position=i;
                        }
                    }

                    res.render('users', {body: newQueue, front: position});
                });

            }

        });
    }
};

module.exports.query = function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var title = req.body.title;
    var message = req.body.message;

    req.checkBody('name', 'Please Leave your name').notEmpty();
    req.checkBody("email", 'Input correct Email format').isEmail();
    req.checkBody("title", 'Enter the Subject of your enquiry').notEmpty();
    req.checkBody("message", 'Enter the content of your enquiry').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        var success=[];
        res.render('index', {errors: errors, success:success});
    }else{
        var success = [{feedback: "Your feedback has been received!"}];
        res.render('index',{errors: errors, success:success});
    }


}
module.exports.geteco = function(req, res, next) {
    Policy.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('economy', { policies: result });
        }
    });
};


module.exports.index = function(req,res){
    var errors = [];
    var success = [];

    res.render('index', {errors:errors,success:success});
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
    Booth.find(function(error, result) {
        if (error) {
            console.log(error);
        } else {
            res.render('readytoVote', { errors:errors, booths:result});
        }
    });

};
module.exports.failed = function(req,res){
    res.render('failed');
};

