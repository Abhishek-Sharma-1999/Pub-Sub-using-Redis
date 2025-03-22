import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Enable-Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips out unknown properties
      forbidNonWhitelisted: true, // Throws error for unknown properties
      transform: true, // Transforms request data to DTO class instances
    })
  )
  await app.listen(3000);
}
bootstrap();
