import { IsOptional, Min, Max, IsString, IsEmail } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @Min(3)
    @Max(20)
    @IsString()
    name: string;
    
    @IsOptional()
    @Min(3)
    @Max(20)
    @IsString()
    firstName: string;
    
    @IsOptional()
    language: string;
    
    @IsEmail()
    email: string;
    
    @IsOptional()
    password: string;
}
