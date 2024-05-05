import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AllMonsterService } from './all-monster.service';
import { MonsterDTO, MonsterMasterDTO } from './dto/monster-dto';

@Controller('all-monster')
export class AllMonsterController {
    constructor(private readonly monsterService: AllMonsterService) {}

    @Post()
    create(@Body() body: MonsterDTO){
        return this.monsterService.create(body)
    }

    @Delete(':id')
    deleteMonsterGeral(@Param('id') id: string){
        return this.monsterService.deleteMonsterGeral(id)
    }
    
    @Get()
    findAll(){
        return this.monsterService.findAll()
    }

    @Get('/group/:group')
    findMany(@Param('group') group: string){
        return this.monsterService.findMany(group)
    }


    @Post('/master/')
    createMonsterMaster(@Body() body: MonsterMasterDTO){
        return this.monsterService.createMonsterMaster(body)
    }

    @Get('/master/:projectId')
    findMaster(@Param('projectId') projectId: string){
        return this.monsterService.findMaster(projectId)
    }

    @Get(`/master/unique/:mobId`)
    findUniqueMaster(@Param('mobId') mobId: string){
        return this.monsterService.findUniqueMaster(mobId)
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateData: any){
        return this.monsterService.update(id, updateData)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.monsterService.delete(id)
    }


    @Patch('/reset-rodada/:id')
    updateRodada(@Param('id') id: string,@Body() updateData: any){
        return this.monsterService.updateRodada(id, updateData)
    }
}
