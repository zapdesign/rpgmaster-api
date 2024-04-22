import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project-dto';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService){}

    @Get(':id')
    findOne(@Param('id') id: string){
         return this.projectService.findOne(id)
    }

    @Get('all/:id')
    findAll(@Param('id') id: string){
        return this.projectService.findAll(id)
    }

    @Post()
    create(@Body() data: CreateProjectDto){
        return this.projectService.create(data)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.projectService.delete(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateData: any){
        return this.projectService.update(id, updateData)
    }
}
