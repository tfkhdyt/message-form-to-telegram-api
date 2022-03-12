import { Body, Controller, Post } from '@nestjs/common'
import { SendMessageDto } from './dto/send-message.dto'
import { MessageService } from './message.service'

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  sendMessage(@Body() sendMessageDto: SendMessageDto) {
    const { name, email, message } = sendMessageDto
    return this.messageService.sendMessage(name, email, message)
  }
}
