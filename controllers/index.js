//Create Schema and model guide
/*
  Please comment code out or modify to us this file
*/
const mongoose = require('mongoose');

const dummySchema = new mongoose.Schema({
  name: String
})

const Dummy = mongoose.model('Dummy', dummySchema)

module.exports = Dummy