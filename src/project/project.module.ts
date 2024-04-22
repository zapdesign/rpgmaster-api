import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { PrismaModule } from 'src/database/PrismaModule';
import { PlayerModule } from 'src/player/player.module';

@Module({
  imports: [PrismaModule, PlayerModule],
  providers: [ProjectService],
  controllers: [ProjectController]
})
export class ProjectModule {}
