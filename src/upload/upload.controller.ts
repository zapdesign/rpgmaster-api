import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileDTO } from './dto/upload-dto';


@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @Post(':id')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: FileDTO, @Param('id') id: string){
        const result = await this.uploadService.upload(file, id)
        return result
    }

    @Get('/get/:imageName')
    async image(@Param('imageName') imageName: string) {
        const image = await this.uploadService.getImage(imageName);

        if (!image) {
            return 'Image not found'
        }

        return image
    }
}