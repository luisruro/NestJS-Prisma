import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; //instalamos npm install --save @nestjs/swagger

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // Todas las rutas van a tener validaciones siempre y cuando tenga un DTO, whitelist es para que no acepte campos que no corresponden al DTO
  
  //Este código se pego desde https://docs.nestjs.com/openapi/introduction
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();//CORS Cualquier página ya va poder pedirlo ya que queda habilitado
  // app.enableCors({
  //   origin: ['http://localhost:4200', 'http://localhost:4300'], //aca van las URLs donde se puede conectar o las que estan autorizadas
  // });
  await app.listen(3000);
}
bootstrap();
