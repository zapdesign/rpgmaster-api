import { Injectable } from '@nestjs/common';
import { FileDTO } from './dto/upload-dto';
import { createClient } from '@supabase/supabase-js';
import { Buffer } from 'buffer';
import { v4 as uuidv4 } from 'uuid';
import { ImagesService } from 'src/images/images.service';
import * as sharp from 'sharp';
import fs from 'fs';


@Injectable()
export class UploadService {
    constructor(private readonly imagesService: ImagesService) {}
    
    async upload(file: FileDTO, id: string){

        const supabaseURL = "https://dlhkjznxuujoccwupren.supabase.co"
        const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsaGtqem54dXVqb2Njd3VwcmVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDAxMDM5NiwiZXhwIjoyMDI1NTg2Mzk2fQ.pADd5qcmxrBdF-m7-l7tTELxk30rI9p1VUYWrEkgveo"


       
        const supabase = createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false
            }
        })

        const newName = uuidv4()

        let width = 0
        let height = 0

        try {
            const metadata = await sharp(file.buffer).metadata();
            width = metadata.width;
            height = metadata.height;
        } catch (err) {
            return console.error('Erro ao obter metadados da imagem:', err);
        }

        const data = await supabase.storage.from("imagesWhiteBoard").upload(`image${newName}`, file.buffer)
        

        await this.imagesService.create({
            imageName: `image${newName}`,
            id_project: id,
            height: `${height}`,
            width: `${width}`,
            left: "10",
            top: "10"
        })

        return data;
    }

    async getImage(imageName: string): Promise<Buffer | null> {

        const supabaseURL = "https://dlhkjznxuujoccwupren.supabase.co"
        const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsaGtqem54dXVqb2Njd3VwcmVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDAxMDM5NiwiZXhwIjoyMDI1NTg2Mzk2fQ.pADd5qcmxrBdF-m7-l7tTELxk30rI9p1VUYWrEkgveo"
        const supabase = createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false
            }
        })


        const { data, error } = await supabase.storage.from("imagesWhiteBoard").download(imageName)
        
        if(error){
            throw new Error(`Algo deu errado ao baixar a imagem: ${error.message}`)
        }

        if(!data){
            throw new Error(`Imagem não encontrada.`)
        }

        try {
            const arrayBuffer = await data.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            return buffer;
        } catch (error) {

            const buffer = fs.readFileSync('nofound.png')
            return buffer;

        }
    }
}
