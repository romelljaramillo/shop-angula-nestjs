import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

import { UserService } from '../user/user.service';


@Injectable()
export class LoginService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        console.log(user);

        const isPasswordMatching = await bcrypt.compare(pass, user.password);
        // if (user && user.password === pass) {
        if (isPasswordMatching) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {
            username: user.username,
            sub: user.id,
            firstname: user.firstname,
            lastname: user.lastname
        };
        return {
            ok: true,
            access_token: this.jwtService.sign(payload)
        };
    }
}
