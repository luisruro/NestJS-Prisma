//Middleware autenticación
//nest g mi users/auth
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {authorization} = req.headers;
    if (!authorization) {
      //return res.status(401).json({message: 'No está autorizado'});
      //Enviar una exepción al front-end
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    if (authorization !== 'xyz123') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
