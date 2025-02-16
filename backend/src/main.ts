import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SERVER_PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Servicio de configuracion
  const configService = app.get(ConfigService);
  // Obtener el numero de puerto, desde el archivo .env
  const port = Number(configService.get(SERVER_PORT));
  await app.listen(port);
}
bootstrap();
