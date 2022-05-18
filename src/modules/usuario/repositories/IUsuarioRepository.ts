import { IUsuarioDTO } from '@modules/usuario/dto/IUsuarioDTO';

export interface IUsuarioRepository {
  create(data: IUsuarioDTO): Promise<void>;
}
