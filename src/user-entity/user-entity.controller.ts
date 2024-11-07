import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserEntityService } from './user-entity.service';
import { UserEntity } from './entity/user_entityObject.entity';

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
    async findOneUserEntity(@Param('id') id: number) {
        return this.userEntityService.findOneUserEntity(id);
    }

    // Create a new user entity
    @Post('create')
    async createUserEntity(
        @Body() userEntity: UserEntity
    ) {
        return this.userEntityService.createUserEntity(userEntity);
    }

    // Update a user entity by id
    @Patch('update/:id')
    async updateUserEntity(
        @Param('id') id: number,
        @Body() userEntity: UserEntity
    ) {
        return this.userEntityService.updateUserEntity(id, userEntity);
    }

    // Delete a user entity by id
    @Delete('delete/:id')
    async deleteUserEntity(
        @Param('id') id: number
    ) {
        return this.userEntityService.deleteUserEntity(id);
    }

}
