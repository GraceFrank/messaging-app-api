const express = require('express');
const router = express.Router();
const signup = require('../controllers/signup')
router.post('/api/users/signup', signup);

module.exports = router;
