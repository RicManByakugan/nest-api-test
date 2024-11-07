import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user_entityObject.entity';
import { Repository } from 'typeorm';
import { ResponseApi } from 'src/shared/response/ResponseApi';
import { User } from 'src/user/entity/user.entity';
import { EntityObject } from 'src/entityObject/entity/entityObject.entity';
import { CreateAndUpdateUserEntityDto } from './dto/create-user-entity.dto';
import { ResponseUserEntityDto } from './dto/response.user.entity.dto';

@Injectable()
export class UserEntityService {

    constructor(
        @InjectRepository(UserEntity)
        private userEntityRepository: Repository<UserEntity>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(EntityObject)
        private entityObjectRepository: Repository<EntityObject>
    ) { }

    // Find all user entities
    async findAllUserEntity(): Promise<ResponseApi<ResponseUserEntityDto[]>> {
        const userEntities = await this.userEntityRepository.find({
            relations: ['user', 'entity'],
        });
        const responseData = userEntities.map(this.mapToUserEntityResponseDto);
        return new ResponseApi(
            HttpStatus.OK,
            'User entities retrieved successfully',
            responseData
        );
    }

    // Find one user entity by id
    async findOneUserEntity(id: number): Promise<ResponseApi<ResponseUserEntityDto>> {
        const userEntity = await this.userEntityRepository.findOne({
            where: { id },
            relations: ['user', 'entity'],
        });
        if (!userEntity) {
            throw new NotFoundException(`User Entity with id ${id} not found`);
        }
        const responseData = this.mapToUserEntityResponseDto(userEntity);
        return new ResponseApi(
            HttpStatus.OK,
            `User entity with id ${id} retrieved successfully`,
            responseData
        );
    }

    // Find one user entity by id and throw an exception if the user entity is not found
    async findOneUserEntityOrThrow(id: number): Promise<UserEntity> {
        const userEntity = await this.userEntityRepository.findOne({ where: { id } });
        if (!userEntity) {
            throw new NotFoundException(`User Entity with id ${id} not found`);
        }
        return userEntity;
    }

    // Create a new user entity
    async createUserEntity(createEUDto: CreateAndUpdateUserEntityDto): Promise<ResponseApi<any>> {
        const { userId, entityId } = createEUDto;
        const userEntityExists = await this.userEntityExists(userId, entityId);

        if (userEntityExists.statusCode !== HttpStatus.OK) {
            return userEntityExists; 
        }

        const userEntity = new UserEntity();
        userEntity.user = userEntityExists.data.user;
        userEntity.entity = userEntityExists.data.entity;

        const newUserEntity = await this.userEntityRepository.save(userEntity);
        return new ResponseApi(
            HttpStatus.CREATED,
            'User entity created successfully',
            newUserEntity
        );
    }

    // Update a user entity
    async updateUserEntity(id: number, updateEUDto: CreateAndUpdateUserEntityDto): Promise<ResponseApi<any>> {
        const userEntity = await this.userEntityRepository.findOne({ where: { id } });
        if (!userEntity) {
            return new ResponseApi(
                HttpStatus.NOT_FOUND,
                `UserEntity with id ${id} not found`,
                null
            );
        }

        const { userId, entityId } = updateEUDto;
        const userEntityExists = await this.userEntityExists(userId, entityId);

        if (userEntityExists.statusCode !== HttpStatus.OK) {
            return userEntityExists; 
        }

        userEntity.user = userEntityExists.data.user;
        userEntity.entity = userEntityExists.data.entity;

        const updatedUserEntity = await this.userEntityRepository.save(userEntity);
        return new ResponseApi(
            HttpStatus.OK,
            `User entity with id ${id} updated successfully`,
            updatedUserEntity
        );
    }



    // Delete a user entity
    async deleteUserEntity(id: number): Promise<ResponseApi<ResponseUserEntityDto>> {
        const deletedUserEntity = await this.userEntityRepository.findOne({
            where: { id },
            relations: ['user', 'entity']
        });
        if (!deletedUserEntity) {
            throw new NotFoundException(`User Entity with id ${id} not found`);
        }
        await this.userEntityRepository.delete(id);
        const responseData = this.mapToUserEntityResponseDto(deletedUserEntity);
        return new ResponseApi(
            HttpStatus.OK,
            `User entity with id ${id} deleted successfully`,
            responseData
        );
    }

    // Verify if a user entity exists
    async userEntityExists(userId: number, entityId: number): Promise<ResponseApi<{ user: User; entity: EntityObject }>> {
        const user = await this.userRepository.findOneBy({ id: userId });
        const entity = await this.entityObjectRepository.findOneBy({ id: entityId });

        if (!user) {
            return new ResponseApi(
                HttpStatus.NOT_FOUND,
                `User with id ${userId} not found`,
                null
            );
        }
        if (!entity) {
            return new ResponseApi(
                HttpStatus.NOT_FOUND,
                `Entity with id ${entityId} not found`,
                null
            );
        }

        return new ResponseApi(
            HttpStatus.OK,
            'User and Entity found',
            { user, entity }
        );
    }


    // Method to map UserEntity to ResponseUserEntityDto
    private mapToUserEntityResponseDto(userEntity: UserEntity): ResponseUserEntityDto {
        return {
            id: userEntity.id,
            user: {
                id: userEntity.user.id,
                name: userEntity.user.name,
                firstName: userEntity.user.firstName,
                language: userEntity.user.language,
                email: userEntity.user.email,
                lastLogin: userEntity.user.lastLogin,
                createdAt: userEntity.user.createdAt,
            },
            entity: {
                id: userEntity.entity.id,
                name: userEntity.entity.name,
                description: userEntity.entity.description,
                keyLicence: userEntity.entity.keyLicence,
                siret: userEntity.entity.siret,
                website: userEntity.entity.website,
                createdAt: userEntity.entity.createdAt,
            },
        };
    }
}
