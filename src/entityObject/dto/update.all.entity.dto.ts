import { IsString, Length } from "class-validator";

export class UpdateAllFieldsEntityObjectDto {

    @Length(1, 50)
    @IsString()
    name: string;

    @IsString()
    description: string;

    @Length(1, 20)
    @IsString()
    siret: string;

    @Length(1, 250)
    @IsString()
    keyLicence: string;

    @Length(1, 100)
    @IsString()
    website: string;
}
