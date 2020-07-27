const Joi = require('@hapi/joi');

const userSchema = {
  _id: Joi.string(),
  name: Joi.string(),
  surname: Joi.string(),
  age: Joi.string(),
};

module.exports = (obj) => Joi.validate(obj, userSchema);