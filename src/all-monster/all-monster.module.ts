import { Module } from '@nestjs/common';
import { AllMonsterController } from './all-monster.controller';
import { AllMonsterService } from './all-monster.service';
import { PrismaModule } from 'src/database/PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [AllMonsterController],
  providers: [AllMonsterService]
})
export class AllMonsterModule {}
