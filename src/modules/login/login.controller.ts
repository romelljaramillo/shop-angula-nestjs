import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(
        private readonly loginService: LoginService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req) {
        return this.loginService.login(req.user);
    }
}
