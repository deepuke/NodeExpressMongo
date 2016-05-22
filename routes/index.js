var express = require('express');
var router = express.Router();

var standupCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'Express' });
	return standupCtrl.list(req, res);
});

/* GET home page. */
router.post('/', function(req, res, next) {
	return standupCtrl.filterByMember(req, res);
});

/* GET home page. */
router.get('/newnote', function(req, res, next) {
	return standupCtrl.getNote(req, res);
});

/* GET home page. */
router.post('/newnote', function(req, res, next) {
	return standupCtrl.create(req, res);
});

module.exports = router;
