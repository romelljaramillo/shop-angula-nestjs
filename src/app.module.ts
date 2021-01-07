import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { LoginModule } from './modules/login/login.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ShopModule } from './modules/shop/shop.module';
import { LangModule } from './modules/lang/lang.module';
import { ProductModule } from './modules/product/product.module';
import { ConfigurationModule } from './core/configuration/configuration.module';

@Module({
  imports: [
    DatabaseModule,
    LoginModule,
    ProfileModule,
    ShopModule,
    LangModule,
    ProductModule,
    ConfigurationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
  static port: string | number;

  constructor(
  ) {
    AppModule.port = process.env.PORT_SERVER;
  }
}
