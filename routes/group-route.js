const group = require('../controllers/group');
const express = require('express');
const router = express.Router();

//POST
router.post('/create', group.post);

//PUT
router.put('/:groupId', group.put);

module.exports = router;