import { IsString } from "class-validator";

export class UpdateAllFieldsEntityObjectDto {

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    siret: string;

    @IsString()
    keyLicence: string;

    @IsString()
    website: string;
}
