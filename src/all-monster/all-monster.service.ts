import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { MonsterDTO, MonsterMasterDTO } from './dto/monster-dto';

@Injectable()
export class AllMonsterService {
    constructor(private readonly prisma: PrismaService){}

    async create(data: MonsterDTO){
        return this.prisma.monster_One_Ring.create({data})
    }
    
    async createMonsterMaster(data: MonsterMasterDTO){

        const existingItems = await this.prisma.masterMonster.findMany({
            where: {
                project_id: data.project_id
            },
            select: {
                index: true
            }
        });

        const maxIndex = existingItems.reduce((max, item) => {
            return item.index > max ? item.index : max;
        }, 0);
    
        // Atribui um novo índice ao novo item com um valor maior do que o maior índice encontrado
        const newIndex = maxIndex + 1;


        return this.prisma.masterMonster.create({
            data: {
                ...data,
                index: newIndex
            }
        })
    }

    async findAll(){
        return this.prisma.monster_One_Ring.findMany()
    }


    async findMany(group: string){
        return this.prisma.monster_One_Ring.findMany({
            where: {
                grupo: group
            }
        })
    }

    async findMaster(projectId: string){
        return this.prisma.masterMonster.findMany({
            where: {
                project_id: projectId
            }, orderBy: {
                index: 'asc'
            }
        })
    }

    async findUniqueMaster(mobId: string){
        return this.prisma.masterMonster.findUnique({
            where: {
                id: mobId
            }
        })
    }

    async update(id: string, updateData: any){
        const exist = await this.prisma.masterMonster.findFirst({
            where: {
                id
            }
        })
       
        if(!exist){
            throw new Error(`Monstro não encontrado`)
        }

        return await this.prisma.masterMonster.update({
            where: {
                id
            }, data: updateData
        })
    }

    
    async deleteMonsterGeral(id: string){
        const exist = await this.prisma.monster_One_Ring.findFirst({
            where: {
                id
            }
        })
       
        if(!exist){
            throw new Error(`Monstro não encontrado`)
        }

        return await this.prisma.monster_One_Ring.delete({
            where: {
                id
            }
        })

    }


    async delete(id: string){
        const exist = await this.prisma.masterMonster.findFirst({
            where: {
                id
            }
        })
       
        if(!exist){
            throw new Error(`Monstro não encontrado`)
        }

        return await this.prisma.masterMonster.delete({
            where: {
                id
            }
        })

    }

    async updateRodada(id: string, updateData){
        return await this.prisma.masterMonster.updateMany({
            where: {
                project_id: id
            },
            data: updateData
        })
    }
}