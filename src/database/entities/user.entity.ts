import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  user: string;

  @Column({ type: 'varchar', length: 100 })
  class: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @CreateDateColumn({ name:'inserted_at',type: 'timestamp with time zone' }) // Auto-sets on insert
  insertedAt: Date;
}
