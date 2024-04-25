import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { Player } from 'src/player/entities/player.entity';
import { PlayerPayload } from './model/UserPayload';
import { PlayerService } from 'src/player/player.service';

@Injectable()
export class PlayerAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly playerService: PlayerService,
  ) {}

  async login(user: PlayerPayload) {
    const payload: PlayerPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
      project_id: user.project_id
    };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string, projectId: string): Promise<Player> {
    const user = await this.playerService.findByEmailAndProjectId(email, projectId);
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address, project_id, or password provided is incorrect.',
    );
  }
}