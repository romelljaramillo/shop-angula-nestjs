import { Controller, Req, Post, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { LoginService } from './login.service';
import { User } from '../users/entities/user.entity';

@Controller('login')
export class LoginController {
    constructor(
        private readonly loginService: LoginService,
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Req() req: Request) {
        const user = req.user as User;
        return this.loginService.generateJwt(user);
    }
}