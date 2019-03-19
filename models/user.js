//Schema for User
const mongoose = require('mongoose');

//Connect to data base
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true })
  .then(() => console.log(`Conneted to the Database...`))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	email: {
		type: String,
		required: true,
	},
	private_chat: {
		type: Object,
		default: {},
	},
	group_chat: {
		type: Object,
		default: {},
	},
	friend_list: {
		type: [ String ],
		default: [],
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
