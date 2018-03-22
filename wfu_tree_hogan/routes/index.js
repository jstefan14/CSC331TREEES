//The landing points

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	//when get(/), do function()
	//YUQING: jin dao /(localhost:3000) zhe ge wang zhan
	//Then the server gives back the information to the web browser
	res.render('index',
		{title: "Wake Forest Tree Map"});
});

module.exports = router;
