import { IsOptional, Min, Max, IsString, IsEmail } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsString()
    firstName: string;
    
    @IsOptional()
    language: string;
    
    @IsOptional()
    @IsEmail()
    email: string;
    
    @IsOptional()
    password: string;
}
