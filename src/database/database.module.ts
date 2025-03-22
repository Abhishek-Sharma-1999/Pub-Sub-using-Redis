import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { UserCopy } from './entities/user-copy.entity';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserCopyRepository } from './repositories/user-copy-repository';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([User,UserCopy])],  
  providers: [UserRepository,UserCopyRepository],
  exports:[UserRepository,UserCopyRepository]
})
export class DatabaseModule {}
