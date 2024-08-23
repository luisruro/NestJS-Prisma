//Este archivo se creo con el comando: nest g guard hello/guards/auth
//Los guards es una función que protege a otra función siempre y cuando cumpla una lógica

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);
    
    //if (request.url === '/greet') return false; Esto fue para el de greet
    //Para el de Active. TODO ESTO SIRVE PARA LAS AUTORIZACIONES
    if (!request.headers['authorization']) return false;

    return true; //Con el false no le permite continuar, quiere decir que si tiene un /greet solo no le permite continuar pero si tiene los datos correctos puede continuar
  }
}
