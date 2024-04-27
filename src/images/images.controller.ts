import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ImagesDTO } from './dto/images-dto';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) {}

    @Post()
    create(@Body() body: ImagesDTO){
        return this.imagesService.create(body)
    }

    @Get(':id')
    findAll(@Param('id') id: string){
        return this.imagesService.findAll(id)
    }

    @Get('master-project/:id/:type')
    findAllMasterImages(@Param('id') id: string, @Param('type') type: string){
        return this.imagesService.findAllMasterImages(id, type)
    }

    @Get('player-image-project/:id/:type')
    findAllPlayer(@Param('id') id: string, @Param('type') type: string){
        return this.imagesService.findAllPlayer(id, type)
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
