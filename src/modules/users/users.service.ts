import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(userDto: UserDto): Promise<User> {
    const user = new User();
    user.firstname = userDto.firstname;
    user.lastname = userDto.lastname;
    user.username = userDto.username;
    user.email = userDto.email;
    user.password = userDto.password;
    
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneId(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}