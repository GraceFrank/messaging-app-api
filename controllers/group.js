const Group = require('../models/group-message');

const group = async (req, res) => {
  try { 
    //validates the input
    const { error } = validateGroup(req.body);
    //access the error message based on Joi error object
    if (error) return res.status(404).send(error.details[0].message);

    //takes in the required parameter
    const group = new Group({
      groupId: req.body.groupId,
      groupName: req.body.groupName,
      groupMessage: [{
        content: req.body.groupMessage.content,
        author: req.body.groupMessage.author,
        date: req.body.groupMessage.date
      }]
    });

    //save the group to the database
    await group.save();
    res.send(group);
  } catch (e) {
    res.send(e);
  }
}

module.exports = group;