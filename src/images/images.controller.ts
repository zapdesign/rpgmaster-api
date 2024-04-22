import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}
