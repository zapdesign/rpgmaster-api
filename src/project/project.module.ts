import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { PrismaModule } from 'src/database/PrismaModule';
import { PlayerModule } from 'src/player/player.module';
import { ImagesModule } from 'src/images/images.module';

@Module({
  imports: [PrismaModule, PlayerModule, ImagesModule],
  providers: [ProjectService],
  controllers: [ProjectController]
})
export class ProjectModule {}
