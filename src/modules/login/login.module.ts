import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.KEY_COOKIE,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [LoginController],
  providers: [
    LoginService, 
    LocalStrategy, 
    JwtStrategy
  ],
  exports: [
    LoginService,
    ConfigModule,
  ],
})
export class LoginModule { }
