import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) {}

    @Get('master-project/:id/:type')
    findAllMasterImages(@Param('id') id: string, @Param('type') type: string){
        return this.imagesService.findAllMasterImages(id, type)
    }

    @Get('player-image-project/:id/:type')
    findAllPlayer(@Param('id') id: string, @Param('type') type: string){
        return this.imagesService.findAllPlayer(id, type)
    }

    @Get('atual-image/:id')
    findAtualImage(@Param('id') id: string){
        return this.imagesService.findAtualImage(id)
    }

    @Patch('update-master-project/:id')
    attImageMasterPlayer(@Param('id') id: string, @Body() body: any){
        return this.imagesService.attImageMasterPlayer(id, body)
    }

    @Delete('delete-master-project/:id')
    deleteMasterPlayer(@Param('id') id: string){
        return this.imagesService.deleteMasterPlayer(id)
    }
}
