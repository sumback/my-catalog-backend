import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const fastifyOptions: ConstructorParameters<typeof FastifyAdapter>[0] = {
    logger: true,
  };
  const fastifyAdapter = new FastifyAdapter(fastifyOptions);
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  setupOpenApi(app);

  const host = process.env.HOST || '0.0.0.0';
  const port = process.env.PORT || 3000;
  await app.listen(port, host);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();

function setupOpenApi(app: INestApplication) {
  const config = new DocumentBuilder().setTitle('API Documentation').setVersion('1.0').addTag('api').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, { useGlobalPrefix: true });
}
