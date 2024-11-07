import { ResponseEntityDto } from "../../entityObject/dto/response.entity.dto";
import { ResponseUserDto } from "../../user/dto/response.user.dto";

export class ResponseUserEntityDto {
    id: number;
    user: ResponseUserDto;
    entity: ResponseEntityDto;
}
