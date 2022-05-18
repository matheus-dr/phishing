import { inject, injectable } from 'tsyringe';

import { IUsuarioDTO } from '@modules/usuario/dto/IUsuarioDTO';
import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';

@injectable()
export class CreateUsuarioService {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository
  ) {}

  public async execute(data: IUsuarioDTO): Promise<void> {
    await this.usuarioRepository.create(data);
  }
}
