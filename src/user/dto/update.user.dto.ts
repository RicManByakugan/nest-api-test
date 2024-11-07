import { IsOptional, Min, Max, IsString, IsEmail, Length } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @Length(1, 80)
    name: string;
    
    @IsOptional()
    @Length(1, 50)
    @IsString()
    firstName: string;
    
    @Length(2, 2)
    @IsOptional()
    language: string;
    
    @Length(1, 100)
    @IsOptional()
    @IsEmail()
    email: string;
    
    @Length(1, 250)
    @IsOptional()
    password: string;
}
