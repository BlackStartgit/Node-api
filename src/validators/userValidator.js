import Joi from 'joi';

export const userSchema = {
  create: Joi.object({
    name: Joi.string().required().min(2).max(50),
    email: Joi.string().required().email(),
    age: Joi.number().integer().min(0).max(120)
  }),
  
  update: Joi.object({
    name: Joi.string().min(2).max(50),
    email: Joi.string().email(),
    age: Joi.number().integer().min(0).max(120)
  })
};