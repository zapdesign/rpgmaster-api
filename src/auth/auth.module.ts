import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PlayerAuthService } from './player-auth.service';
import { PlayerModule } from 'src/player/player.module';
import { PlayerLocalStrategy } from './strategies/player-local.strategy';

@Module({ 
  imports: [UsersModule, PlayerModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '24h' }

  })],
  controllers: [AuthController],
  providers: [AuthService, PlayerAuthService, PlayerLocalStrategy,LocalStrategy, JwtStrategy],
})
export class AuthModule {}
