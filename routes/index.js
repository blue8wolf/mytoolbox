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
module.exports = router;
