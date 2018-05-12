var mongoose = require('mongoose');
var boothSchema = mongoose.Schema(
    {
        "name":String,
        "address":String,
        "hours":String,
        "phone":String,
        "photo":String
    }
);
var Booth =  mongoose.model('booth',boothSchema);

module.exports = Booth;
