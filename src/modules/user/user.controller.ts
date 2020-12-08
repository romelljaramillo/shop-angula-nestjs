import { Controller, Body, Request, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from '../login/auth/guards/jwt-auth.guard';
import { ModuleController } from '../module.controller';

import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

// @UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController extends ModuleController{
  constructor(
    private readonly usersService: UserService
  ) {
    super(usersService);
    this.nameModule = 'user';
    this.entity = User;
    this.createDto = CreateUserDto;
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll(): Promise<User[]> {
  //   return this.usersService.findAll();
  // }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @Get(':id')
  // findOneId(@Param('id') id: string): Promise<User> {
  //   return this.usersService.findOneId(id);
  // }

  @Get('username/:username')
  findOneName(@Param('username') username: string): Promise<User> {
    return this.usersService.findOne(username);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.usersService.remove(id);
  // }
}