import { Body, Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthRequest, AuthRequestPlayer } from './model/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';
import { PlayerAuthService } from './player-auth.service';

@Controller('auth') 
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly playerService: PlayerAuthService) {}

    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req: AuthRequest){
        return this.authService.login(req.user)

    }

    @IsPublic()
    @Post('player-login')
    @HttpCode(HttpStatus.OK)
    async playerLogin(@Request() req: AuthRequestPlayer, @Body() body: {email: string, password: string, projectId: string}) {
      const { email, password, projectId } = body;
      console.log(projectId)
      const user = await this.playerService.validateUser(email, password, projectId);
      return this.playerService.login(user);
    }
}
