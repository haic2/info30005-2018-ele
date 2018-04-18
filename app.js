const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')

app.set('view engine','ejs');
const router = require('./route/route');


app.use( express.static(__dirname + '/views'));
app.use(router);
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
