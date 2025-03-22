import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  user: string;

  @IsString()
  class: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;
}
