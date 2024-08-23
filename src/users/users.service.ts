import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma.service';

//Para que funcione tengo que decirle al modulo en providers que llame el PrismaService
@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    getUsers() {
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto) {
        return this.prisma.user.create({ data: user });
    }
}
