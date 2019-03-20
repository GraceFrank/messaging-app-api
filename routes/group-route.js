const GroupMessage = require('../models/group-message');
const express = require('express');
const router = express.Router();

//Create a group
router.post('/', async (req, res) => {

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