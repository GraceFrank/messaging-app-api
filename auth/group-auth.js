const Joi = require('joi');

//Validation
function validatesGroup(group) {
  //schema is used to valid the input object with several criteria
  const schema = {
    authorId: Joi.string().required(),
    groupName: Joi.string().min(1).required(),
  }
  //compares the req.body with the schema
  return Joi.validate(group, schema);

}

module.exports = validatesGroup;