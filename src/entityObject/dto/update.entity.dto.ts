import { IsOptional, IsString } from "class-validator";

export class UpdateEntityObjectDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    siret: string;

    @IsOptional()
    @IsString()
    keyLicence: string;

    @IsOptional()
    @IsString()
    website: string;
}
