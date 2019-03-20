const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost/group', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

//Message Object Schema (a sub document of the group message schema)
const messageObjectSchema = new mongoose.Schema({
  //Message Content
  content:{
    type: String,
    required: true,
    minlength: 1
  },
  //Sender
  author: {
    type: String,
    required: true
  },
  //Time the message was logged
  date: {
    type: Date,
    default: Date.now()
  }
});

//Group Schema
const groupSchema = new mongoose.Schema({
  //Unique group ID
  groupId: {
    type: String,
    required: true
  },
  //Unique group name
  groupName: {
    type: String,
    required: true
  },
  //Array containing group messages
  groupMessage: [messageObjectSchema]
});

//Group Message model
const Group = mongoose.model('GroupMessage', groupSchema);

module.exports = Group;