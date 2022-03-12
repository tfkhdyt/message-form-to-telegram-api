import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MessageController } from './message.controller'
import { MessageService } from './message.service'

@Module({
  imports: [ConfigModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
