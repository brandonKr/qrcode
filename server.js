var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs");
var QRCode = require('qrcode');


app.set('views',__dirname+'/view');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static('public'));

var server = app.listen(3000,function(){
    console.log("express server has started on port 3000")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: '@#@$doublechain#@$#$',
    resave: false,
    saveUninitialized: true
}))


var router = require('./router/main')(app,fs)
