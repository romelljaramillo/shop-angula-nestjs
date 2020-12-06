import { ValidationPipe } from '@nestjs/common';
import { ContextIdFactory, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { httpInterceptor } from './Interceptors/http.interceptor';
import { ProfileGuard } from './modules/profile/guards/profile.guard';

async function bootstrap() {


  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalGuards(new ProfileGuard());

  app.useGlobalInterceptors(new httpInterceptor());

  // validation DTO aplication full - lib class-validator
  app.useGlobalPipes(new ValidationPipe());

  // app.setGlobalPrefix('api');
  await app.listen(AppModule.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
