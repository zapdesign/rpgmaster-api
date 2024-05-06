import { Injectable } from '@nestjs/common';
import { FileDTO, MasterImage } from './dto/upload-dto';
import { createClient } from '@supabase/supabase-js';
import { Buffer } from 'buffer';
import { v4 as uuidv4 } from 'uuid';
import { ImagesService } from 'src/images/images.service';
import fs from 'fs';


@Injectable()
export class UploadService {
    constructor(private readonly imagesService: ImagesService) {}
    
    async uploadMasterimage(file: FileDTO, body: MasterImage){

        const supabaseURL = "https://dlhkjznxuujoccwupren.supabase.co"
        const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsaGtqem54dXVqb2Njd3VwcmVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDAxMDM5NiwiZXhwIjoyMDI1NTg2Mzk2fQ.pADd5qcmxrBdF-m7-l7tTELxk30rI9p1VUYWrEkgveo"

        const supabase = createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false
            }
        })

        const newName = uuidv4()

        let newPlayerVisible = false

        if(body.player_visible === "true"){
            newPlayerVisible = true
        }

        const data = await supabase.storage.from("imagesWhiteBoard").upload(`projectImage-${newName}`, file.buffer)
        
        if(!data){
            throw new Error(`Imagem não foi adicionada`)
        }
        await this.imagesService.createMaster({
                name: body.name,
                type: body.type,
                image_name: `projectImage-${newName}`,
                project_id: body.project_id,
                player_visible: newPlayerVisible,
                is_active: false
        })

        return
    }

    async uploadFilePLayer(file: FileDTO, id: string){
        const supabaseURL = "https://dlhkjznxuujoccwupren.supabase.co"
        const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsaGtqem54dXVqb2Njd3VwcmVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDAxMDM5NiwiZXhwIjoyMDI1NTg2Mzk2fQ.pADd5qcmxrBdF-m7-l7tTELxk30rI9p1VUYWrEkgveo"

        const supabase = createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false
            }
        })

        const data = await supabase.storage.from("imagesWhiteBoard").upload(`player-${id}`, file.buffer)

        return data;
    }

    async deleteFilePlayer(id: string) {
        const supabaseURL = "https://dlhkjznxuujoccwupren.supabase.co"
        const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsaGtqem54dXVqb2Njd3VwcmVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDAxMDM5NiwiZXhwIjoyMDI1NTg2Mzk2fQ.pADd5qcmxrBdF-m7-l7tTELxk30rI9p1VUYWrEkgveo"
        const supabase = createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false
            }
        })

        const { error } = await supabase.storage.from("imagesWhiteBoard").remove([`player-${id}`]);

        if (error) {
            throw error;
        }

        return 
    }

    async getImage(imageName: string): Promise<string> {

        const supabaseURL = "https://dlhkjznxuujoccwupren.supabase.co"
        const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsaGtqem54dXVqb2Njd3VwcmVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDAxMDM5NiwiZXhwIjoyMDI1NTg2Mzk2fQ.pADd5qcmxrBdF-m7-l7tTELxk30rI9p1VUYWrEkgveo"
        const supabase = createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false
            }
        })
        
        const { data  } = await supabase.storage.from("imagesWhiteBoard").getPublicUrl(imageName)


        if(!data.publicUrl){
            throw new Error(`Imagem não encontrada.`)
        }

        return data.publicUrl
        
    }
}
