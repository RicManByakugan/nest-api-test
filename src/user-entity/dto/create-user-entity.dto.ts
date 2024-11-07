import { IsNumber } from "class-validator";

export class CreateAndUpdateUserEntityDto {
    @IsNumber()
    userId: number;
    @IsNumber()
    entityId: number;
}