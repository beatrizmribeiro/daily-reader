var exports = module.exports = {}


// render home
exports.index = function(req, res) {
	res.render('index');
};


exports.signup = function(req, res){

	res.render('signup');
}

exports.signin = function(req, res){
	//res.render('signin');
	res.render('signin');
}


exports.dashboard = function(req, res) {

	res.render('dashboard');
}

exports.logout = function(req, res){

	req.session.destroy(function(err){

		res.redirect('/signin');

	});
}
