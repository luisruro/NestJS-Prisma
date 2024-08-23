import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('/') //seria la página inicial
export class HelloController {
    @Get()
    index(@Req() req: Request, @Res() res: Response) {
        console.log(req.url);
        res.status(200).json({
            message: 'Hello, World!'
        });
    }

    @Get('notfound')//lanzo petición get http://localhost:3000/notfound
    @HttpCode(404)//Cambia el status en la respuesta de postman, si no se lo pongo le da status 200
    notFoundPage() {
        return '404 not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error Route!!'
    }

    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return 'New Route'
    }

    //Uso de los pipes
    //Aquí utilizamos los params
    @Get('ticket/:num')
    //El ParseIntPipe convierte el parámetro num a un número entero
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get('active/:status')
    @UseGuards(AuthGuard)
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status);

        return status
    }

    //Crear nuestro pipe
    //nest g pipe hello/pipes/validateuser lo que va hacer es que dentro de la carpeta hello va crear una carpeta pipes y dentro de la carpeta pipes crea la carpeta validateuser con los archivos

    // @Get('greet')
    // greet(@Query() query: {name: string, age: number}) {
    //     console.log(typeof query.name);
    //     console.log(typeof query.age);

    //     return `Hello ${query.name}, you are ${query.age} years old`
    // }

    //Quedaría así con el pipe creado
    @Get('greet')
    @UseGuards(AuthGuard)//@UseGuards Viene de nest y AuthoGuard Veiene de nuestro archivo que hemos creado

    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        console.log(typeof query.name);
        console.log(typeof query.age);

        return `Hello ${query.name}, you are ${query.age} years old`
    }
}


