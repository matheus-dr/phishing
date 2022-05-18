import { injectable } from 'tsyringe';

import { prisma } from '@shared/infra/prisma/prisma';
import { IUsuarioDTO } from '@modules/usuario/dto/IUsuarioDTO';
import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';

@injectable()
export class UsuarioRepository implements IUsuarioRepository {
  async create(data: IUsuarioDTO): Promise<void> {
    await prisma.usuario.create({ data });
  }
}
