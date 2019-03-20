const Joi = require('joi');

//Validation
function validatesGroup(group) {
  //schema is used to valid the input object with several criteria
  const schema = {
    name: Joi.string().min(3).required(),
    groupId: Joi.string().required(),
    groupName: Joi.string().min(1).required(),
    groupMessage: [{
      content: Joi.string().min(1).required(),
      author: Joi.string().required(),
    }]
  }
  //compares the req.body with the schema
  return Joi.validate(group, schema);

}