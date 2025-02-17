import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SERVER_PORT } from './config/constants';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Servicio de configuracion
  const configService = app.get(ConfigService);
  // Obtener el numero de puerto, desde el archivo .env
  const port = Number(configService.get(SERVER_PORT));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use(cors());
  await app.listen(port);
}
bootstrap();
