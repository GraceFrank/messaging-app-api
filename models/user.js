//Schema for User
const mongoose = require('mongoose');

//Connect to data base or Create if not existing
mongoose.connect('mongodb://localhost/message-app', {
	useNewUrlParser: true
})
  .then(() => console.log(`Conneted to the Database...`))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({//Define User Schema
	name: {//Name of type String
		type: String,
		required: true,
	},
	password: {//Password of type String and minimum length of 6
		type: String,
		required: true,
		minlength: 6,
	},
	email: {//email of type string
		type: String,
		required: true,
	},
	privateChat: {//privateChat will hold email of friend as key and id of message 
    type: Map,
    of: String,
		default: {},//
	},
	groupChat: {//groupChat will hold name of group as key and id of message as value
    type: Map,
    of: String,
		default: {},
	},
	friendList: { //holds emails of friend
		type: [ String ],
		default: [],
	},
});

const User = mongoose.model('User', userSchema);//convert Schema to model

module.exports = User;
