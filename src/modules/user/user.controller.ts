import { Controller, Body, Request, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../login/auth/guards/jwt-auth.guard';
import * as bcrypt from 'bcrypt'

import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(
    private readonly usersService: UserService) {
  }

  @Post()
  async create(@Body() userDto: UserDto): Promise<User> {
    const user = new User();
    const { firstname, lastname, username, email, password } = userDto;
    user.firstname = firstname;
    user.lastname = (lastname) ? lastname : "";
    user.username = username;
    user.email = email;
    const salt = bcrypt.genSaltSync()
    user.password = await bcrypt.hash(password, salt);
    return this.usersService.create(user);
  }

  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOneId(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}