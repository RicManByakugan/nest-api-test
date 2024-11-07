import { IsOptional, IsString, IsEmail, Length } from "class-validator";

export class UpdateAllFieldUserDto {
    @Length(1, 80)
    @IsString()
    name: string;
    
    @Length(1, 50)
    @IsString()
    firstName: string;
    
    @Length(2, 2)
    @IsString()
    language: string;
    
    @IsString()
    @Length(1, 100)
    @IsEmail()
    email: string;
    
    @Length(1, 250)
    @IsString()
    password: string;
}
