var express = require('express');
var router = express.Router();
// Load the data model
var usersModel = require('../models/usersModel');

//*************************************************//
// All of these routes are relative to /users      //
//*************************************************//

// GET to Add Character page
router.get('/addTree', addTree);
//YUQING: jin dao addcharacter zhe ge wang zhan (route)

// POST data from
router.post('/record', record_data);

// SEARCH function
router.post('/search', search_tree);
//
// Functions responding to HTTP requests
//


function addTree(req, res, next) {
	// parameters for res.render(par1, par2)
	// par1 : a view in the views folder
	// par2 : data to be used when rendering the view
  res.render(
  	'addTree',
  	{ title: 'Add Tree',
  	  users: usersModel
  	}
  	);
}

function record_data(req, res, next) {
	console.log(req.body); // show in the console what the user entered
	usersModel.push(req.body); // Add the user data to the users_data dataset
	res.redirect('/users/addTree');	// reload the page
}

function search_tree(req, res, next) {
	console.log(req.body);
	res.redirect('/');	// reload the page
}

// Export the router, required in app.js
module.exports = router;
