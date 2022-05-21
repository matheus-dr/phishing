import { container } from 'tsyringe';

import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';
import { UsuarioRepository } from '@modules/usuario/infra/prisma/repositories/UsuarioRepository';
import { IMailerProvider } from '@shared/providers/MailerProvider/IMailerProvider';
import { NodeMailerProvider } from '@shared/providers/MailerProvider/implementations/NodeMailerProvider';

container.registerSingleton<IUsuarioRepository>(
  'UsuarioRepository',
  UsuarioRepository
);

container.registerSingleton<IMailerProvider>(
  'MailerProvider',
  NodeMailerProvider
);
