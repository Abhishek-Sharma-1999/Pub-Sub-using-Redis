import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { CreateUserDto } from '../../receiver/dto/receiver.dto';
import { UserCopy } from '../entities/user-copy.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class UserCopyRepository extends Repository<UserCopy> {
  constructor(private dataSource: DataSource) {
    super(UserCopy, dataSource.createEntityManager());
  }

  createUserCopyRecord(userDetails:User){
    return this.save(this.create(userDetails));
  }

}
