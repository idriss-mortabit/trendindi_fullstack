var app = require('express')();
var express = require('express');
var path = require('path');
// var http = require('http').Server(app);
// var bCrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var router = require('./router.js');
var Authrouter = require('./Authrouter.js');
var session = require('express-session');

// Access public folder from root.
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use('*/public', express.static('public'));
app.get('/layouts', function(req, res) {
  res.render('view');
});
app.use(express.static(path.join(__dirname, './../client/build/')));


app.use(express.urlencoded({ extended: false }))
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));


// Add Authentication Route file with app
app.use('/', Authrouter);


var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Add Route file with app
app.use('/admin',restrict, router); 

app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});

// app.get('/admin', function(req, res){
//   res.redirect('/admin/login');
// });
app.use('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './../client/build/index.html'));
});
function restrict(req, res, next) {
  if (req.session.user) {
    console.log("hello my dear")
    next();
  } else {
    console.log("hello my dear2")
    req.session.error = 'Access denied!';
    res.redirect('/admin/login');
  }
}


// http.listen(8000, function(){
//   console.log('listening on *:8000');
// });

module.exports = app;