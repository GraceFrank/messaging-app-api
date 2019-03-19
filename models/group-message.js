const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost/bears', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

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