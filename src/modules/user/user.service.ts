import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<any> {
    const user = new User();
    const { firstname, lastname, username, email, password } = createUserDto;
    user.firstname = firstname;
    user.lastname = (lastname) ? lastname : "";
    user.username = username;
    user.email = email;

    const salt = bcrypt.genSaltSync()
    user.password = await bcrypt.hash(password, salt);
    
    // return this.usersRepository.save(user);
    
    return this.usersRepository.save(user)
      .catch(err => {

        let message: string;

        if (err.code === "ER_DUP_ENTRY") {
          message = `Duplicate entry`;
        } else {
          message = err.message;
        }

        return {
          statusCode: 400,
          message: [message],
          error: `Bad Request`
        };
      });
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({ 
      select: [
        "id", 
        "firstname", 
        "lastname", 
        "username", 
        "email", 
        "active", 
        "updatedAt"
      ] 
    });
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