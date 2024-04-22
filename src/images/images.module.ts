import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { PrismaModule } from 'src/database/PrismaModule';

@Module({
  imports: [PrismaModule],
  providers: [ImagesService],
  controllers: [ImagesController],
  exports: [ImagesService]
})
export class ImagesModule {}
