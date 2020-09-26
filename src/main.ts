import { ContextIdFactory, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProfileGuard } from './modules/profile/guards/profile.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log();
  app.useGlobalGuards(new ProfileGuard());

  // app.setGlobalPrefix('api');
  await app.listen(AppModule.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
