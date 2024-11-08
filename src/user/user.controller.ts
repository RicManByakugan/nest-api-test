import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { ResponseApi } from 'src/shared/response/ResponseApi';
import { ResponseUserDto } from './dto/response.user.dto';
import { UpdateAllFieldUserDto } from './dto/update.all.user.dto';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ){}

    // Find all users
    @Get()
    async findAll(): Promise<ResponseApi<ResponseUserDto[]>> {
        return this.userService.findAllUser();
    }

    // Create a new user
    @Post('create')
    async create(@Body() userDto: CreateUserDto): Promise<ResponseApi<ResponseUserDto>> {
        return this.userService.createUser(userDto);
    }

    // Update an existing user each field
    @Patch('update/:id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto): Promise<ResponseApi<User>> {
        return this.userService.updateUser(id, user);
    }

    // Update an existing user all fields
    @Put('update-all-fields/:id')
    async updateAll(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateAllFieldUserDto): Promise<ResponseApi<User>> {
        return this.userService.updateUserAllField(id, user);
    }

    // Remove an existing user
    @Delete('delete/:id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<ResponseApi<User>> {
        return await this.userService.removeUser(id);
    }

     // Find a user by id
     @Get(':id')
     async findOne(
         @Param('id', ParseIntPipe) id: number
     ): Promise<ResponseApi<ResponseUserDto>> {
         return this.userService.findOneUser(id);
     }

}
