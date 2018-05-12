var mongoose = require('mongoose');
var candSchema = mongoose.Schema({
    "name": String,
    "Party": String,
    "gender": String,
    "category": String,
    "profile": String,
    "description":String
}
);
var Candidate =  mongoose.model('candidates',candSchema);

module.exports =Candidate;
