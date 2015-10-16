var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'All Mark' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: 'search return' });
});

/* Admin page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'admin login page' });
});
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'admin home page' });
});
router.get('/adminedit', function(req, res, next) {
  res.render('adminedit', { title: 'Edit tool info' });
});



/* password handle part */
var crypto = require('crypto');
var len=128;
var iterations=12000;
var hashfunc=function(pwd,salt,fn){
	if(3==arguments.length){
	crypto.pbkdf2(pwd,salt,iterations,len,function(err,hash){
		fn(err,hash.toString('base64'));
	});
	}else{
	fn=salt;
	crypto.randomBytes(len,function(err,salt){
	if(err) return fu(err);
	salt=salt.toString('base64');
	crypto.pbkdf2(pwd,salt,iterations,len,function(err,hash){
	if(err) return fn(err);
	fn(null,salt,hash.toString('base64'));
	});
	});
	}	};






module.exports = router;
