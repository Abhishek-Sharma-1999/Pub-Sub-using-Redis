import { Entity, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_copies')
export class UserCopy extends User {
  @UpdateDateColumn({ name:'modified_at',type: 'timestamp with time zone' })
  modifiedAt: Date;
}
