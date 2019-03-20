const GroupMessage = require('../models/group-message');
const express = require('express');
const router = express.Router();
const validateGroup = require('../auth/group-auth');

//Create a group
router.post('/', async (req, res) => {
  //validates the input
  const { error } = validateGroup(req.body);
  //access the error message based on Joi error object
  if (error) return res.status(404).send(error.details[0].message);

  const group = new GroupMessage({
    groupId: req.body.groupId,
    groupName: req.body.groupName,
    groupMessage: [{
      content: req.body.groupMessage.content,
      author: req.body.groupMessage.author
    , date: req.body.groupMessage.date
    }]
  });

  //save the group to the database
  await group.save();
  res.send(group);
});

module.exports = router;