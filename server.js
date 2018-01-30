var PORT = process.env.PORT || 3000;
var express 	= require('express');
var path 			= require('path');
var bodyParser= require('body-parser');
var sequelize = require("sequelize");
var exphbs 		= require("express-handlebars");
var passport	= require('passport');
var session	 	= require('express-session');
var env 			= require('dotenv').load();
var app 	 		= express();


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// static

console.log(path.join(__dirname, 'public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

// redirect users of main page to /home
app.get('/', function(req, res){
	res.redirect('/index');
});




//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);


//load passport
require('./app/config/passport/passport.js')(passport, models.user);


//Sync Database
models.sequelize.sync().then(function(){
	console.log('Nice! It is working')

}).catch(function(err){
	console.log(err, "Not working")
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(3000, function(err){
  if(!err)
  console.log("Site is live"); else console.log(err)

});
