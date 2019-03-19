
const User = require('../models/user');


const signup = async (req, res) => {
	//api to create new user for signup
	try {
		//check if a user exist with the email from signup
		const user = await User.find({
			email: req.body.email,
		});
		if (user.length) return res.status(400).send(`Email already in use`);
		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});

		const signupResponse = await newUser.save();
		res.send(signupResponse);
	} catch (error) {
		console.log(error.message);
	}
}

module.exports = signup;