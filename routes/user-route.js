//required modules
const express = require('express');
const router = express.Router();


//required files
const signup = require('../controllers/signup');


//Router for signup
router.post('/signup', signup);

module.exports = router;
