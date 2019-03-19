const User = require('../models/user');
const signupValidate = require('../auth/signup-auth')


const signup = async (req, res) => {
	//api to create new user for signup
	try {
		//check if request body is valid
		const {error} = signupValidate(req.body);
		if (error) {
			return res.status(400).send(`Request not process: ${error.details[0].message}`)
		}
		//check if a user exist with the email from signup
		const user = await User.find({
			email: req.body.email,
		});
		//if user already exist, returns 404
		if (user.length) return res.status(400).send(`Email already in use`);
		//if user does not exist create user
		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});
		//save user to DB
		const signupResponse = await newUser.save();
		res.send(signupResponse);
	} catch (error) {
		console.log(error.message);
	}
}

module.exports = signup;