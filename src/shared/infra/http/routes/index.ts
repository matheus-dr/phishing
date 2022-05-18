import { Router } from 'express';

import { usuarioRoutes } from '@modules/usuario/infra/http/routes';

const routes = Router();

routes.use(usuarioRoutes);

export { routes };
