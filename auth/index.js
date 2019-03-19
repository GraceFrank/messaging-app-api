//Authentication goes here
/*
  Please comment code out or modify to us this file
*/

const Joi = require('joi')


let validate = (validationProperty) => {
  const schema = {
    //validate properties
    name: Joi.string().required()
  }

  Joi.validate(validationProperty, schema)
}

module.exports = validate;