import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user_entityObject.entity';
import { Repository } from 'typeorm';
import { ResponseApi } from 'src/shared/response/ResponseApi';

@Injectable()
export class UserEntityService {

    constructor(
        @InjectRepository(UserEntity)
        private userEntityRepository: Repository<UserEntity>,
    ){}

    // Find all user entities
    async findAllUserEntity(): Promise<ResponseApi<UserEntity[]>> {
        const userEntity = await this.userEntityRepository.find();
        return new ResponseApi(
            HttpStatus.OK,
            'User entities retrieved successfully',
            userEntity
        )
    }

    // Find one user entity by id
    async findOneUserEntity(id: number): Promise<ResponseApi<UserEntity>> {
        const userEntity = await this.userEntityRepository.findOne({ where: { id } });
        if (!userEntity) {
            throw new NotFoundException(`User Entity with id ${id} not found`);
        }
        return new ResponseApi(
            HttpStatus.OK,
            `User entity with id ${id} retrieved successfully`,
            userEntity
        );
    }

    // Find one user entity by id and throw an exception if the user entity is not found
    async findOneUserEntityOrThrow(id: number): Promise<UserEntity> {
        const userEntity = await this.userEntityRepository.findOne({where : {id}});
        if (!userEntity) {
            throw new NotFoundException(`User Entity with id ${id} not found`);
        }
        return userEntity;
    }

    // Create a new user entity
    async createUserEntity(userEntity: UserEntity): Promise<ResponseApi<UserEntity>> {
        const newUserEntity = await this.userEntityRepository.save(userEntity);
        return new ResponseApi(
            HttpStatus.CREATED,
            'User entity created successfully',
            newUserEntity
        );
    }

    // Update a user entity
    async updateUserEntity(id: number, userEntity: UserEntity): Promise<ResponseApi<UserEntity>> {
        const updatedUserEntity = await this.userEntityRepository.findOne({ where: { id } });
        if (!updatedUserEntity) {
            throw new NotFoundException(`User Entity with id ${id} not found`);
        }
        await this.userEntityRepository.update(id, userEntity);
        return new ResponseApi(
            HttpStatus.OK,
            `User entity with id ${id} updated successfully`,
            updatedUserEntity
        );
    }

    // Delete a user entity
    async deleteUserEntity(id: number): Promise<ResponseApi<UserEntity>> {
        const deletedUserEntity = await this.userEntityRepository.findOne({ where: { id } });
        if (!deletedUserEntity) {
            throw new NotFoundException(`User Entity with id ${id} not found`);
        }
        await this.userEntityRepository.delete(id);
        return new ResponseApi(
            HttpStatus.OK,
            `User entity with id ${id} deleted successfully`,
            deletedUserEntity
        );
    }


}
