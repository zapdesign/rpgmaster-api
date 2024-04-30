import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { PrismaModule } from 'src/database/PrismaModule';
import { ImagesModule } from 'src/images/images.module';

@Module({
  imports: [PrismaModule, ImagesModule],
  controllers: [PlayerController],
  providers: [PlayerService],
  exports: [PlayerService]
})
export class PlayerModule {}
