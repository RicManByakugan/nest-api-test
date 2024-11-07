import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    firstName: string;
    
    @IsNotEmpty()
    language: string;
    
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;
}
