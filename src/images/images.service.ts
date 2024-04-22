import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ImagesDTO } from './dto/images-dto';

@Injectable()
export class ImagesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: ImagesDTO){
        await this.prisma.image.create({data})        
    }


    async findAll(id: string){
        const response = await this.prisma.image.findMany({
            where: {
                id_project: id
            }
        })


        if(!response){
            return
        }

        return response
    }

}
