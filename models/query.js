var mongoose = require('mongoose');

var qrySchema = mongoose.Schema(
    {
        "name":String,
        "email":String,
        "title": String,
        "message": String,

    }
);
var query =  mongoose.model('query',qrySchema);

module.exports =query;
