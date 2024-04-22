import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { PlayerAuthService } from '../player-auth.service';

@Injectable()
export class PlayerLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: PlayerAuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string, projectId: string): Promise<any> {
    return this.authService.validateUser(email, password, projectId);
  }
}
