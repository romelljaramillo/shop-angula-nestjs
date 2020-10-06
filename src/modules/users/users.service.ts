import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(user: User): Promise<any> {
    return this.usersRepository.save(user)
      .catch(err => {
        let message;
        if (err.code === "ER_DUP_ENTRY") {
          message = `Duplicate entry ( ${user.username} ) or ( ${user.email} )`;
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