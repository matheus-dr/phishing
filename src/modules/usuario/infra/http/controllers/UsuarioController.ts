import { container } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { CreateUsuarioService } from '@modules/usuario/services/CreateUsuarioService';

export class UsuarioController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(CreateUsuarioService);

      const data = request.body;

      response.status(201).json(await service.execute(data));
    } catch (err) {
      next(err);
    }
  }
}
