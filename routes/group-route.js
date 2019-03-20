const group = require('../controllers/group');
const express = require('express');
const router = express.Router();

//Create a group
router.post('/group', group);

module.exports = router;