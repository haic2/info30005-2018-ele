var mongoose = require('mongoose');
var boothSchema = mongoose.Schema(
    {
        "content": {
            "name": String,
            "address": String,
            "hours": String,
            "phone": String
        },
        "coords": {
            "lat": Number,
            "lng": Number
        },
    }
);
var Booth =  mongoose.model('booth',boothSchema);

module.exports = Booth;
