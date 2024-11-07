import { IsNotEmpty, IsString, IsEmail, Length } from "class-validator";

export class CreateUserDto {
    @Length(1, 80)
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @Length(1, 50)
    @IsNotEmpty()
    @IsString()
    firstName: string;
    
    @Length(2, 2)
    @IsNotEmpty()
    language: string;
    
    @IsEmail()
    @Length(1, 100)
    email: string;
    
    @Length(1, 250)
    @IsNotEmpty()
    password: string;
}
