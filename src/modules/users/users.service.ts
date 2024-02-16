import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/core/entities';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }
  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(updateUserDto);
  }
  async remove(id: string) {
    return this.userRepository.delete(id);
  }
}
