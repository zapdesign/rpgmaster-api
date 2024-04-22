import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerAcess } from './dto/player-dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('player')
export class PlayerController {
    constructor(private readonly playerService: PlayerService) {}

    @IsPublic()
    @Get(':id')
    findSection(@Param('id') id: string){
        return this.playerService.findSection(id)
    }
    
    @Get('/all/:id')
    findAllplayers(@Param('id') id: string){
        return this.playerService.findAllplayers(id)
    }

    @Post()
    createPlayer(@Body() data: PlayerAcess){
        return this.playerService.createPlayer(data)
    }

    @Patch('pass/:id')
    update(@Param('id') id: string, @Body() updateData: any){
        return this.playerService.updatePass(id, updateData)
    }

    @Delete('pass/:id')
    del(@Param('id') id: string){
        return this.playerService.delAcess(id)
    }


    //Caracter

    @Get('caracter/:id')
    findCaracter(@Param('id') id: string){
        return this.playerService.findCaracter(id)
    }

    @Patch('caracter/:id')
    updateCaracter(@Param('id') id: string, @Body() updateData: any){
        return this.playerService.updateCaracter(id, updateData)
    }

    //Equipament 
    @Get('equipament/:id')
    findEquipament(@Param('id') id: string){
        return this.playerService.findEquipament(id)
    }

    @Patch('equipament/:id')
    updateEquipament(@Param('id') id: string, @Body() updateData: any){
        return this.playerService.updateEquipament(id, updateData)
    }

    @Post('equipament/:id')
    createEquipament(@Param('id') id: string){
        return this.playerService.createEquipament(id)
    }

    @Delete('equipament/:id')
    deleteEquipament(@Param('id') id: string){
        return this.playerService.deleteEquipament(id)
    }
}
