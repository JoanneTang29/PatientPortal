// Validation
const Joi = require('joi');

const registrationValidation = {
  registrationValidationObject: {
    body: Joi.object({
      name: Joi.string().min(6).required(),
      email: Joi.string().min(6).required(),
      password: Joi.string().min(6).required(),
    }),
  },
};

const loginValidation = {
  loginValidationObject: {
    body: Joi.object({
      name: Joi.string().min(6).required(),
      email: Joi.string().min(6).required(),
      password: Joi.string().min(6).required(),
    }),
  },
};

module.exports = {
  loginValidation,
  registrationValidation,
};
