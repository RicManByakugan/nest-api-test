import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAddDto } from './dto/userAdd.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    // Find all users
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    // Find one user by id
    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id } });
    }

    // Create a new user
    // The create method is used to create a new user in the database.
    // The method takes a UserAddDto object as a parameter and returns a Promise<User>.
    async create(userdto: UserAddDto): Promise<User> {
        let user = new User();
        user = { ...user, ...userdto };
        return this.userRepository.save(user);
    }

    // Update an existing user
    async update(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    // Remove an existing user
    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

}
