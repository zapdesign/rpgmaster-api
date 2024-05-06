import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { MasterImage, PlayerImageProject } from './dto/images-dto';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class ImagesService {
    constructor(private readonly prisma: PrismaService) {}

    async createMaster(data: MasterImage){
        await this.prisma.imagemMaster.create({data})        
    }

    async createPlayerProject(data: PlayerImageProject){
        await this.prisma.imagePlayer.create({data})        
    }


    async findAllMasterImages(id: string, type: string){
        return this.prisma.imagemMaster.findMany({
            where: {
                project_id: id,
                type
            }, orderBy: {
                created_at: 'desc'
            }
        })
    }

    async findAllPlayer(id: string, type: string){
        return this.prisma.imagemMaster.findMany({
            where: {
                project_id: id,
                type,
                player_visible: true
            }, orderBy: {
                created_at: 'desc'
            }
        })
    }


    async findAtualImage(id: string){
        return await this.prisma.atualImage.findMany({
            where: {
                project_id: id
            }
        })
    }

    async attImageMasterPlayer(id: string, body: any){
        const exist = await this.prisma.imagemMaster.findUnique({
            where: {
                id
            }
        })

        if(!exist){
            return
        }  

        if(body.is_active === true){
            await this.prisma.imagemMaster.updateMany({
                where: {
                    project_id: exist.project_id,
                    NOT: {
                        id: id
                    }
                },
                data: {
                    is_active: false
                }
            });
        }
    

        await this.prisma.imagemMaster.update({
            where: {
                id
            }, data: {
                ...body
            }
        })

        return
    }

    async deleteImage(name: string) {
        const supabaseURL = "https://dlhkjznxuujoccwupren.supabase.co"
        const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsaGtqem54dXVqb2Njd3VwcmVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDAxMDM5NiwiZXhwIjoyMDI1NTg2Mzk2fQ.pADd5qcmxrBdF-m7-l7tTELxk30rI9p1VUYWrEkgveo"
        const supabase = createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false
            }
        })

        const { error } = await supabase.storage.from("imagesWhiteBoard").remove([`${name}`]);

        if (error) {
            throw error;
        }

        return 
    }


    async deleteMasterPlayer(id: string){
        const exist = await this.prisma.imagemMaster.findUnique({
            where: {
                id
            }
        })

        if(!exist){
            return
        }

        await this.deleteImage(exist.image_name)

        await this.prisma.imagemMaster.delete({
            where: {
                id
            }
        })

        return

    }

}
