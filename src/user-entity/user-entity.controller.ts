import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserEntityService } from './user-entity.service';
import { UserEntity } from './entity/user_entityObject.entity';
import { CreateAndUpdateUserEntityDto } from './dto/create-user-entity.dto';

@Controller('user-entity')
export class UserEntityController {

    constructor(
        private userEntityService: UserEntityService
    ){}

    // Find all user entities
    @Get()
    async findAllUserEntity() {
        return this.userEntityService.findAllUserEntity();
    }

    // Find one user entity by id
    @Get(':id')
    async findOneUserEntity(@Param('id', ParseIntPipe) id: number) {
        return this.userEntityService.findOneUserEntity(id);
    }

    // Create a new user entity
    @Post('create')
    async createUserEntity(
        @Body() userEntityDto: CreateAndUpdateUserEntityDto
    ) {
        return this.userEntityService.createUserEntity(userEntityDto);
    }

    // Update a user entity by id
    @Patch('update/:id')
    async updateUserEntity(
        @Param('id', ParseIntPipe) id: number,
        @Body() userEntityDto: CreateAndUpdateUserEntityDto
    ) {
        return this.userEntityService.updateUserEntity(id, userEntityDto);
    }

    // Delete a user entity by id
    @Delete('delete/:id')
    async deleteUserEntity(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.userEntityService.deleteUserEntity(id);
    }

}
