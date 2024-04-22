import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users-dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.UsersService.findOne(id)
    }

    @IsPublic()
    @Post()
    async create(@Body() data: CreateUserDto){
        return this.UsersService.create(data)
    }

}
