import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAddDto } from './dto/userAdd.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { ResponseApi } from 'src/shared/response/ResponseApi';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    // Find all users
    async findAllUser(): Promise<ResponseApi<User[]>> {
        const users = await this.userRepository.find();
        return new ResponseApi(
            HttpStatus.OK,
            'Users retrieved successfully',
            users
        );
    }

    // Find one user by id
    async findOneUser(id: number): Promise<ResponseApi<User>> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return new ResponseApi(
            HttpStatus.OK,
            `User with id ${id} retrieved successfully`,
            user
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
    async createUser(userDto: UserAddDto): Promise<ResponseApi<User>> {
        let user = new User();
        user = { ...user, ...userDto };
        user.createdAt = new Date();
        const newUser = await this.userRepository.save(user);
        return new ResponseApi(
            HttpStatus.CREATED,
            'User created successfully',
            newUser
        );
    }

    // Update an existing user
    async updateUser(id: number, userUpdateDto: UserUpdateDto): Promise<ResponseApi<any>> {
        const verification = await this.findOneUserVerificate(id);
        await this.userRepository.update(id, userUpdateDto);
        const updatedUser = await this.userRepository.findOne({ where: { id } });
        return new ResponseApi(
            HttpStatus.OK,
            'User updated successfully',
            updatedUser
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
}
