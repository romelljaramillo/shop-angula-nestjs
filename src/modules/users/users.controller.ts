import { Controller, Body, Request, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() userDto: UserDto): Promise<User> {
    const user = new User();

    const { firstname, lastname, username, email, password/*, last_password_gen*/ } = userDto;

    user.firstname = firstname;
    user.lastname = (lastname) ? lastname : "";
    user.username = username;
    user.email = email;
    user.password = password;
   // user.last_password_gen = (last_password_gen) ? last_password_gen : new Date();

    return this.usersService.create(user);
  }

  @UseGuards(JwtAuthGuard)
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