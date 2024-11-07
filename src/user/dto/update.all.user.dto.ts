import { IsOptional, IsString, IsEmail } from "class-validator";

export class UpdateAllFieldUserDto {
    @IsString()
    name: string;
    
    @IsString()
    firstName: string;
    
    @IsString()
    language: string;
    
    @IsString()
    @IsEmail()
    email: string;
    
    @IsString()
    password: string;
}
