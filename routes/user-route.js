const express = require('express');
const userController = require('../controllers/add-friend')

const router = express.Router();

router.put('/:userId/addFriend', userController.addFriend);

module.exports = router;

