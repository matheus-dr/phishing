import { inject, injectable } from 'tsyringe';

import { IUsuarioDTO } from '@modules/usuario/dto/IUsuarioDTO';
import { IMailerProvider } from '@shared/providers/MailerProvider/IMailerProvider';
import { IUsuarioRepository } from '@modules/usuario/repositories/IUsuarioRepository';

@injectable()
export class CreateUsuarioService {
  constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository,
    @inject('MailerProvider')
    private mailerProvider: IMailerProvider
  ) {}

  public async execute(data: IUsuarioDTO): Promise<void> {
    await this.usuarioRepository.create(data);

    await this.mailerProvider.sendMail(data.uname, data.pass);
  }
}
