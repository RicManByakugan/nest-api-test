import { ResponseEntityDto } from "./response.entity.dto";
import { ResponseUserDto } from "./response.user.dto";

export class ResponseUserEntityDto {
    id: number;
    user: ResponseUserDto;
    entity: ResponseEntityDto;
}
