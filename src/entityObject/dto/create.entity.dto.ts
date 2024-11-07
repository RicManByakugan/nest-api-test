import { IsNotEmpty, IsString } from "class-validator";

export class CreateEntityObjectDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    siret: string;

    @IsNotEmpty()
    @IsString()
    keyLicence: string;

    @IsNotEmpty()
    @IsString()
    website: string;
}
