import { container } from 'tsyringe';

import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import { UsuarioRepository } from '@modules/usuario/infra/prisma/repositories/UsuarioRepository';

container.registerSingleton<IUsuarioRepository>('UsuarioRepository', UsuarioRepository);
