import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { UsersModule } from './users/users.module';
import { ProjectModule } from './project/project.module';
import { UploadModule } from './upload/upload.module';
import { ImagesModule } from './images/images.module';
import { AllMonsterModule } from './all-monster/all-monster.module';
import { PlayerModule } from './player/player.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [AuthModule, UsersModule, ProjectModule, UploadModule, ImagesModule, AllMonsterModule, PlayerModule, ChatModule, ChatModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }]
})
export class AppModule {}
