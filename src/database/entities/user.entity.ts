import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')  // Table name: users
export class User {
  @PrimaryGeneratedColumn('uuid') // Generates UUID automatically
  id: string;

  @Column({ type: 'varchar', length: 100 })
  user: string;

  @Column({ type: 'varchar', length: 100 })
  class: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @CreateDateColumn({ type: 'timestamp with time zone' }) // Auto-sets on insert
  inserted_at: Date;
}
