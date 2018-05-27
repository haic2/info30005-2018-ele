var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var path = require('path')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("."));
app.use( express.static(__dirname + '/views'));
//Express session
app.use(session({
    secret:'serect',
    saveUninitialized:true,
    resave:true
}));

//Express Validator
app.use(expressValidator({
    errorFormatter:function (param,msg,value){
        var namespace = param.split('.')
            ,root =namespace.shift()
            ,formParam = root;
        while (namespace.length){
            formParam += '[' +namespace.shift()+']';
        }
        return{
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

//connect flash
app.use(flash());

app.use(function(req, res, next){
    res.locals.success_msg =req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.set('views',path.join(__dirname,'views'));

require('./models/mdb.js');

app.set('view engine','ejs');
const router = require('./route/route');


app.use(router);
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
