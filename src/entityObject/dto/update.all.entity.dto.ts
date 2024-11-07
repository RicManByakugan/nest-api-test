<<<<<<< HEAD
import { IsString, Length } from "class-validator";

export class UpdateAllFieldsEntityObjectDto {

    @Length(1, 50)
=======
import { IsString } from "class-validator";

export class UpdateAllFieldsEntityObjectDto {

>>>>>>> 5a6bab52cb62746d7a5f3f6fceb7266363595c88
    @IsString()
    name: string;

    @IsString()
    description: string;

<<<<<<< HEAD
    @Length(1, 20)
    @IsString()
    siret: string;

    @Length(1, 250)
    @IsString()
    keyLicence: string;

    @Length(1, 100)
=======
    @IsString()
    siret: string;

    @IsString()
    keyLicence: string;

>>>>>>> 5a6bab52cb62746d7a5f3f6fceb7266363595c88
    @IsString()
    website: string;
}
