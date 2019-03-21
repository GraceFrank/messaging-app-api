const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost/groups', {
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

//Message Object Schema (a sub document of the group message schema)
const messageObjectSchema = new mongoose.Schema({
  //Message Content
  content: {
    type: String,
    required: true,
    minlength: 1,
    default: []
  },
  //Sender
  sender: {
    type: String,
    required: true,
    default: []
  },
  //Time the message was logged
  date: {
    type: Date
  }
});

//Group Schema
const groupSchema = new mongoose.Schema({
  //Unique group ID
  authorId: {
    type: String,
    required: true
  },
  //Unique group name
  groupName: {
    type: String,
    required: true
  },
  //Array containing group messages
  groupMessage: {
    type: [messageObjectSchema],
    default: []
  }
});

//Group model
const Group = mongoose.model('Group', groupSchema);

const GroupMessage = mongoose.model('GroupMessage', messageObjectSchema);

module.exports = { Group, GroupMessage };