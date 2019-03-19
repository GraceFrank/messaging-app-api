//This is a guide for routers

/*
  Please comment code out or modify to us this file
*/

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();




//Connect to data base

mongoose.connect('mongodb://localhost/messaging_api', {useNewUrlParser: true})
  .then(()=> console.log(`Conneted to the Database...`))
  .catch((err) => console.log(err));





module.exports = router;