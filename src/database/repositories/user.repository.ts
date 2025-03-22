import { Injectable } from '@nestjs/common';
import { Repository, DataSource, Brackets, In } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../../receiver/dto/receiver.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  createRecord(userDetails:CreateUserDto){
    return this.save(this.create(userDetails));
  }

}
