var mongoose = require('mongoose');


var queueSchema = mongoose.Schema(
    {
        "fname":String,
        "lname":String,
        "idno":{
            type:String,
            unique:true
        },
        "bname":String
    }
);
var queue =  mongoose.model('queue',queueSchema);

module.exports = queue;


