const express = require('express');
const userController = require('../controllers/index')

const router = express.Router();

router.post('/api/users/:userId/addFriend', userController.addFriend);

module.exports = router;