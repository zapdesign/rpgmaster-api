import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { ImagesModule } from 'src/images/images.module';

@Module({
  imports: [ImagesModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
