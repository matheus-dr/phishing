import { Joi } from 'celebrate';

const createUsuarioSchema = Joi.object({
  uname: Joi.string().required(),
  pass: Joi.string().required(),
});

export { createUsuarioSchema };
