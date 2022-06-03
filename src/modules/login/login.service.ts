import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class LoginService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if(user){
            const isPasswordMatching = await bcrypt.compare(password, user.password);
    
            if (isPasswordMatching) {
                const { password, ...result } = user;
                return result;
            }
        }

        return null;
    }
    
    /* async validateUser(loginDto: LoginDto): Promise<any> {
        const user = await this.usersService.findByEmail(loginDto.email);
        if (user && user.password === loginDto.password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    } */

    async generateJwt(user: User): Promise<any>{
        
        const payload: JwtPayload = {id: user.id, email: user.email, active: user.active};
        const accessToken = await this.jwtService.sign(payload);
  
        return { ok: true, access_token: accessToken };
    }

    /*async login(user: User) {
        const payload = {
            sub: user.id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        };

        return {
            ok: true,
            access_token: this.jwtService.sign(payload)
        };
    }*/
}
