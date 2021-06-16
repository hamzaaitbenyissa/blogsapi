var User 	= require ('../repositories/users');
var jwt 	= require('jsonwebtoken');
var express = require('express');
var router = express.Router();

	router.post('/', async function(req, res){
		// data validation
		var user = await User.getUserByEmail(req.body.email);

		if(user) {
			if(user.password == req.body.password) {
				var token = jwt.sign({id: user.id}, 'ismykey');
				return res.status(200).send({
					message: 'Auth success',
					token: token
				})
			}
		}

		return res.status(400).send({
				message: 'Email or password is incorrect'
		});
	});

module.exports=router;

