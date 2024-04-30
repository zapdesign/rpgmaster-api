import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateProjectDto } from './dto/create-project-dto';
import { hash } from 'bcrypt';
import { PlayerService } from 'src/player/player.service';

@Injectable()
export class ProjectService {
    constructor(private readonly prisma: PrismaService, private readonly playerService: PlayerService) {}

    

    async findOne(id: string){

        const exist = await this.prisma.project.findFirst({
            where: {
                id
            }
        })

        if(!exist){
            throw new Error('Esse projeto não existe.')
        }
        
        return exist

    }

    async create(data: CreateProjectDto){
       const created = await this.prisma.project.create({data})

       const hashedPass = await hash(created.id, 8)

       await this.prisma.playerPage.create({
        data: {
            name: created.name,
            project_id: created.id,
            password: hashedPass,
            rpg: 'OneRing'
        }
       })

       await this.prisma.atualImage.create({
        data: {
            project_id: created.id,
            text: ""
        }
       })

       return
    }


    async findAll(id: string){
        return this.prisma.project.findMany({
            where: {
                id_user: id
            },
            orderBy: {
                created_at: 'desc'
            },
        })
    }

    async delete(id: string){
        const exist = await this.prisma.project.findFirst({
            where: {
                id
            }
        })

        if(!exist){
            throw new Error('Esse projeto não existe.')
        }   

        await this.prisma.playerPage.deleteMany({
            where: {
                project_id: id
            }
        })
    
        await this.prisma.atualImage.deleteMany({
            where: {
                project_id: id
            }
        })

        await this.prisma.atualImage.deleteMany({
            where: {
                project_id: id
            }
        })
        
        await this.prisma.chatMessages.deleteMany({
            where: {
                room: id
            }
        })

        await this.prisma.imagemMaster.deleteMany({
            where: {
                project_id: id
            }
        })

        await this.prisma.masterMonster.deleteMany({
            where: {
                project_id: id
            }
        })

        const playersActive = await this.prisma.playerAcess.findMany({
            where: {
                project_id: id
            }
        })

        if(playersActive){
            playersActive.map((cada) => {
                this.playerService.delAcess(cada.id)
            })
        }

        return 'Deu tudo certo!'
    }

    async update(id: string, updateData: any){
        const exist = await this.prisma.project.findFirst({
            where: {
                id
            }
        })
       
        if(!exist){
            throw new Error(`Projeto não encontrado`)
        }

        await this.prisma.project.update({
            where: {
                id
            }, data: updateData
        })

        await this.prisma.playerPage.updateMany({
            where: {
                project_id: id
            }, data: {
                name: updateData.name
            }
        })

        return
    }
}
