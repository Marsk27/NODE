// router: to handle routing for the specific part.// auth 
//we need to load the express modul

const express= require("express");

const router = express.Router();

router.get("/", function (req, res) {
	res.json({
	message: "Hello from users!",
	});
});
/*
@ end point:/api/users/register 
method:POST
description: to registerr the user with the specified deatails
register: we are going to ceate a new user 
new entity: post method from http protocol


*/
router.post("/register",(req,res)=> {
	console.log(req.headers);
	console.log(JSON.stringify(req.body));
	res.status(201).json({
	message: "Register post called successfully",
	});
});

module.exports = router; 