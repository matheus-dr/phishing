import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';

import { createUsuarioSchema } from '@modules/usuario/schemas/createUsuario.schema';
import { UsuarioController } from '@modules/usuario/infra/http/controllers/UsuarioController';

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();

usuarioRoutes.post(
  '/user',
  [celebrate({ [Segments.BODY]: createUsuarioSchema }, { abortEarly: false })],
  usuarioController.create
);

export { usuarioRoutes };
