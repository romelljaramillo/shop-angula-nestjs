import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

// import { UserModule } from './modules/users/users.module';
import { LoginModule } from './modules/login/login.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ShopModule } from './modules/shop/shop.module';
import { LangModule } from './modules/lang/lang.module';
import { ProductModule } from './modules/product/product.module';

async function load() {
  let modul = await import('./modules/user/user.module').then(m => m.UserModule);
  console.log('module: ' + modul);
}
load();

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    // UserModule,
    LoginModule,
    ProfileModule,
    ShopModule,
    LangModule,
    ProductModule,
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
