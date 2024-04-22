import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from './users/entities/user.entity';
import { CurrentPlayer } from './auth/decorators/current-player-decorator';
import { PlayerAcess } from './player/dto/player-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  } 

  @Get('me')
  getMe(@CurrentUser() user: User){
    return user
  }

  @Get('me-player')
    async getPlayer(@CurrentPlayer() player: PlayerAcess): Promise<any> {
    return {...player, iat: undefined, exp: undefined}
  }

}
