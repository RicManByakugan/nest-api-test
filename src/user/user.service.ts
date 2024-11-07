import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { ResponseApi } from 'src/shared/response/ResponseApi';
import { ResponseUserDto } from './dto/response.user.dto';
import { UpdateAllFieldUserDto } from './dto/update.all.user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    // Find all users
    async findAllUser(): Promise<ResponseApi<ResponseUserDto[]>> {
        const users = await this.userRepository.find();
        const responseData = users.map(this.mapToUserResponseDto);
        return new ResponseApi(
            HttpStatus.OK,
            'Users retrieved successfully',
            responseData
        );
    }

    // Find one user by id
    async findOneUser(id: number): Promise<ResponseApi<ResponseUserDto>> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        const responseData = this.mapToUserResponseDto(user);
        return new ResponseApi(
            HttpStatus.OK,
            `User with id ${id} retrieved successfully`,
            responseData
        );
    }

    // Find one user by id and throw an exception if the user is not found
    async findOneUserVerificate(id: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    // Create a new user
    async createUser(userDto: CreateUserDto): Promise<ResponseApi<ResponseUserDto>> {
        let user = new User();
        user = { ...user, ...userDto };
        user.createdAt = new Date();
        user.lastLogin = new Date();
        const newUser = await this.userRepository.save(user);
        const responseData = this.mapToUserResponseDto(newUser);
        return new ResponseApi(
            HttpStatus.CREATED,
            'User created successfully',
            responseData
        );
    }

    // Update an existing user
    async updateUser(id: number, UpdateUserDto: UpdateUserDto): Promise<ResponseApi<any>> {
        const verification = await this.findOneUserVerificate(id);
        await this.userRepository.update(id, UpdateUserDto);
        const updatedUser = await this.userRepository.findOne({ where: { id } });
        const responseData = this.mapToUserResponseDto(updatedUser);
        return new ResponseApi(
            HttpStatus.OK,
            'User updated successfully',
            responseData
        );
    }

    // Update an existing user
    async updateUserAllField(id: number, UpdateUserDto: UpdateAllFieldUserDto): Promise<ResponseApi<any>> {
        const verification = await this.findOneUserVerificate(id);
        await this.userRepository.update(id, UpdateUserDto);
        const updatedUser = await this.userRepository.findOne({ where: { id } });
        const responseData = this.mapToUserResponseDto(updatedUser);
        return new ResponseApi(
            HttpStatus.OK,
            'User updated successfully',
            responseData
        );
    }

    // Remove an existing user
    async removeUser(id: number): Promise<ResponseApi<null>> {
        const verification = await this.findOneUserVerificate(id);
        await this.userRepository.delete(id);
        return new ResponseApi(
            HttpStatus.NO_CONTENT,
            `User with id ${id} removed successfully`,
            null
        );
    }

    // Custom response for user object
    private mapToUserResponseDto(user: User): ResponseUserDto {
        return {
            id: user.id,
            name: user.name,
            firstName: user.firstName,
            email: user.email,
            language: user.language,
            lastLogin: user.lastLogin,
            createdAt: user.createdAt,
        }
    }
}
