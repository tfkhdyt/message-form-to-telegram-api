import { BadRequestException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Telegraf } from 'telegraf'

@Injectable()
export class MessageService {
  private bot: Telegraf
  private BOT_TOKEN: string
  private USER_ID: string

  constructor(private readonly configService: ConfigService) {
    this.BOT_TOKEN = this.configService.get<string>('BOT_TOKEN')
    this.USER_ID = this.configService.get<string>('USER_ID')
    this.bot = new Telegraf(this.BOT_TOKEN)
  }

  async sendMessage(name: string, email: string, message: string) {
    const _message = `*${name} (${email}) says:*
${message}`
    /* const _message = `*You've received new message from ${name} \(${email}\)*

"${message}"` */
    await this.bot.telegram
      .sendMessage(this.USER_ID, _message, { parse_mode: 'Markdown' })
      .catch((err) => {
        throw new BadRequestException(err.message)
      })

    return {
      status: 'success',
      data: { name, email, message },
    }
  }
}
