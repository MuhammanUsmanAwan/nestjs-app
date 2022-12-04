import { IsString, IsInt } from 'class-validator';

export class UserCreateDto {
    @IsString()
    name: string;
  
    @IsInt()
    age: number;
}