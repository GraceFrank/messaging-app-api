const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost/bears', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));





const GroupMessage;

module.exports = GroupMessage;