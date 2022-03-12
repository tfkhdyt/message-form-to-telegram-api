import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({ origin: ['http://localhost', 'https://www.tfkhdyt.my.id'] })
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(4000)
}
bootstrap()
