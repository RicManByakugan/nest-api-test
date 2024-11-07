import { IsOptional, IsString, Length } from "class-validator";

export class UpdateEntityObjectDto {
    @IsOptional()
    @IsString()
    @Length(1, 50)
    name: string;
    
    @IsOptional()
    @IsString()
    description: string;
    
    @IsOptional()
    @IsString()
    @Length(1, 20)
    siret: string;
    
    @Length(1, 250)
    @IsOptional()
    @IsString()
    keyLicence: string;
    
    @Length(1, 100)
    @IsOptional()
    @IsString()
    website: string;
}
