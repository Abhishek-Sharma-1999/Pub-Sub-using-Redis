import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { UserCopy } from './entities/user-copy.entity';
import { User } from './entities/user.entity';
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([User,UserCopy])],  
  providers: [], // Provide the repository
  exports: [TypeOrmModule], // Export it for use in other modules
})
export class DatabaseModule {}
