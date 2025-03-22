import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user_copies')  // Table name: user_copies
export class UserCopy {
  @PrimaryGeneratedColumn('uuid') // Same UUID as original user
  id: string;

  @Column({ type: 'varchar', length: 100 })
  user: string;

  @Column({ type: 'varchar', length: 100 })
  class: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  inserted_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  modified_at: Date;
}
