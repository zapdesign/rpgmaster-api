import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { PrismaModule } from 'src/database/PrismaModule';
import { ChatController } from './chat.controller';

@Module({
    imports: [PrismaModule],
    providers: [ChatGateway],
    controllers: [ChatController]
})
export class ChatModule {}
