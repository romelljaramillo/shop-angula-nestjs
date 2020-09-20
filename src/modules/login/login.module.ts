import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [AuthModule],
  providers: [LoginService],
  controllers: [LoginController],
  exports: [LoginService],
})
export class LoginModule { }
