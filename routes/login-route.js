//Required files 
const express = require('express');
const router = express.Router();
const login = require('../controllers/login');

//Router for login 
router.post('api/login',login);

module.exports = router;