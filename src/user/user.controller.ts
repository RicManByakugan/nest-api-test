import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserAddDto } from './dto/userAdd.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { ResponseApi } from 'src/shared/response/ResponseApi';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ){}

    // Find all users
    @Get()
    async findAll(): Promise<ResponseApi<User[]>> {
        return this.userService.findAllUser();
    }

    // Create a new user
    @Post('create')
    async create(@Body() userDto: UserAddDto): Promise<ResponseApi<User>> {
        return this.userService.createUser(userDto);
    }

    // Update an existing user
    @Patch('update/:id')
    async update(@Param('id') id: number, @Body() user: UserUpdateDto): Promise<ResponseApi<User>> {
        return this.userService.updateUser(id, user);
    }

    // Remove an existing user
    @Delete('delete/:id')
    async remove(@Param('id') id: number): Promise<ResponseApi<User>> {
        return await this.userService.removeUser(id);
    }

     // Find a user by id
     @Get(':id')
     async findOne(
         @Param('id', ParseIntPipe) id: number
     ): Promise<ResponseApi<User>> {
         return this.userService.findOneUser(id);
     }

}
