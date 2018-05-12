var mongoose = require('mongoose');
var polSchema = mongoose.Schema(
    {
        "title":String,
        "description":String,
        "policymaker": String,
        "state": String,
        "category": String
    }
);
var Policy =  mongoose.model('policies',polSchema);

module.exports =Policy;
