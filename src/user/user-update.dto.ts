import { IsString, IsInt } from 'class-validator';

export class UserUpdateDto {
    @IsString()
    name: string;
  
    @IsInt()
    age: number;
}
