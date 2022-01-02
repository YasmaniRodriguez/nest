import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { doc } from 'prettier';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cars example')
    .setDescription('The cars API description')
    .setVersion('1.0')
    .addTag('cars')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('restfull', app, document);

  await app.listen(3000);
}
bootstrap();
