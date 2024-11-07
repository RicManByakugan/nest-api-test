import { IsNotEmpty, Min, Max, IsString, IsEmail } from "class-validator";

export class UserAddDto {
    @IsNotEmpty()
    @Min(3)
    @Max(20)
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @Min(3)
    @Max(20)
    @IsString()
    firstName: string;
    
    @IsNotEmpty()
    language: string;
    
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;
}
