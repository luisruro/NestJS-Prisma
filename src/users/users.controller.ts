import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')//Aquí se usan de modo general, tambien los puedo poner debajo de la ruta @Get o @Post
export class UsersController {
    constructor(private usersService: UsersService) {} //Esta forma es la abreviada a la que hay en el tasks.controller.ts
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post()
    //@UsePipes(new ValidationPipe()) // los quitamos y los ponemos de forma global en el main.ts
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
}
