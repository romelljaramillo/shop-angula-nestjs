import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(
        private readonly loginService: LoginService,
        private authService: AuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
