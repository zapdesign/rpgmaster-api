import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from 'src/database/PrismaService';

@WebSocketGateway({cors: true})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly prisma: PrismaService) {}

  @WebSocketServer() server: Server;
  
  private logger: Logger = new Logger('AppGateway');


  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, payload: { room: string, text: string, name: string, player_id: string}) {
    console.log(payload)
    await this.prisma.chatMessages.create({
      data: {
        name: payload.name,
        player_id: payload.player_id,
        room: payload.room, 
        text: payload.text
      } 
    })
    this.server.to(payload.room).emit('msgToClient', payload)
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string){
    this.logger.log(`joinRoom: ${client.id}, ${room} `)
    client.join(room)
  }
  
  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client: Socket, room: string){
    client.leave(room)
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket) {
    this.logger.log( `Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log( `Client disconnected: ${client.id}`);
  }
}