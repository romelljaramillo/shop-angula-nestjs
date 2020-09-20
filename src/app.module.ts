import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

import { UsersModule } from './modules/users/users.module';
import { LoginModule } from './modules/login/login.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    UsersModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {
  
  static port: string | number;

  constructor(
    private readonly confService: ConfigService
  ) {
    AppModule.port = this.confService.get('PORT_SERVER');
  }
}
