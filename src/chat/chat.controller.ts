// import { Controller, Get, Param } from '@nestjs/common';
// import { PrismaService } from 'src/database/PrismaService';

// @Controller('chat')
// export class ChatController {
//     constructor(private readonly prisma: PrismaService) {}

//     @Get(':id')
//     getOldMessages(@Param('id') id: string){
//         return this.prisma.chatMessages.findMany({
//             where: {
//                 room: id
//             }, orderBy: {
//                 created_at: 'asc'
//             }
//         })
//     }
// }
