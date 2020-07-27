const Joi = require('@hapi/joi');

const logsSchema = {
  _id: Joi.string(),
  event: Joi.string(),
  description: Joi.string(),
};

module.exports = (obj) => Joi.validate(obj, logsSchema);