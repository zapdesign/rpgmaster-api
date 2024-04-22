import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-users-dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id: string){

        const user = await this.prisma.usuario.findFirst({
            where: {
                id
            }
        })

        if(!user){
            throw new Error('Esse usuário não existe mais.')
        }

        return {
            ...user,
            password: undefined
        }
    }

    async create(data: CreateUserDto){
        
        const emailExist = await this.prisma.usuario.findFirst({
            where: {
                email: data.email
            }
        })

        if(emailExist){
            throw new Error(`Esse email já está cadastrado na plataforma.`)
        }

        const hashedPass = await hash(data.password, 10)

        const newUser = await this.prisma.usuario.create({
            data: {
                ...data,
                password: hashedPass
            }
        })

        return {
            ...newUser,
            password: undefined
        }
    }

    async findByEmail(email: string){
        return this.prisma.usuario.findUnique({
            where: {
                email
            }
        })
    }

    //Player acess

    async findPlayerByUsername(username: string, projectId: string) {
        return this.prisma.playerPage.findFirst({
            where: {
              name: username,
              project_id: projectId,
            }});
    }
}
