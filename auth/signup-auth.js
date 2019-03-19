const Joi = require('joi');

//Api level validation of user signup request body
const signupValidate = (signupBodyObject) => {
	let schema = {
		name: Joi.string().max(40).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6),
	};
	return Joi.validate(signupBodyObject, schema);
};

module.exports = signupValidate;
