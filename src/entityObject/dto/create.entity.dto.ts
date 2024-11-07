import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateEntityObjectDto {
    @Length(1, 50)
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @Length(1, 20)
    @IsString()
    siret: string;

    @IsNotEmpty()
    @Length(1, 250)
    @IsString()
    keyLicence: string;

    @IsNotEmpty()
    @Length(1, 100)
    @IsString()
    website: string;
}
