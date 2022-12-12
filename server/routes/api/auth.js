// router: to handle routing for the specific part.// auth 
//we need to load the express modul

const express= require("express");
const auth= require("../../middleware/auth");

const router = express.Router();
//@ route GET api/auth
//@desc Get user by token
//@access Private 
router.get("/",auth, function (req, res) {
	res.json({
	message: "Hello from auth!",
	});
});

module.exports = router; 
