const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost/bears', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

//Message Object Schema (a sub document of the group message schema)
const messageObjectSchema = mongoose.Schema({
  content:{
    type: String,
    required: true,
    minlength: 1
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

//Group-Message Schema
const groupMessageSchema = mongoose.Schema({
  groupId: {
    type: String,
    required: true
  },
  groupName: {
    type: String,
    required: true
  },
  groupMessage: {
    type: Object,
    required: true
  }
});


module.exports = GroupMessage;