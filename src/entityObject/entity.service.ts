import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { EntityObject } from './entity/entityObject.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseApi } from 'src/shared/response/ResponseApi';
import { CreateEntityObjectDto } from './dto/create.entity.dto';
import { UpdateEntityObjectDto } from './dto/update.entity.dto';
import { ResponseEntityDto } from './dto/response.entity.dto';

@Injectable()
export class EntityService {
    constructor(
        @InjectRepository(EntityObject)
        private entityRepository: Repository<EntityObject>,
    ) {}

    // Find all enitities
    async findAllEntity(): Promise<ResponseApi<ResponseEntityDto[]>> {
        const entity = await this.entityRepository.find();
        const responseData = entity.map(this.mapToEntityResponseDto);
        return new ResponseApi(
            HttpStatus.OK,
            'Entity retrieved successfully',
            responseData
        );
    }

    // Find one entity by id
    async findOneEntity(id: number): Promise<ResponseApi<ResponseEntityDto>> {
        const entity = await this.entityRepository.findOne({ where: { id } });
        if (!entity) {
            throw new NotFoundException(`Entity with id ${id} not found`);
        }
        const responseData = this.mapToEntityResponseDto(entity);
        return new ResponseApi(
            HttpStatus.OK,
            `Entity with id ${id} retrieved successfully`,
            responseData
        );
    }

    // Find one entity by id and throw an exception if the entity is not found
    async findOneEntityVerificate(id: number): Promise<EntityObject> {
        const entity = await this.entityRepository.findOne({ where: { id } });
        if (!entity) {
            throw new NotFoundException(`Entity with id ${id} not found`);
        }
        return entity;
    }

    // Create a new entity
    async createEntity(entityDto: CreateEntityObjectDto): Promise<ResponseApi<ResponseEntityDto>> {
        let entity = new EntityObject();
        entity = { ...entity, ...entityDto };
        entity.createdAt = new Date();
        const newEntity = await this.entityRepository.save(entity);
        const responseData = this.mapToEntityResponseDto(newEntity);
        return new ResponseApi(
            HttpStatus.CREATED,
            'Entity created successfully',
            responseData
        );
    }

    // Update an existing entity
    async updateEntity(id: number, entityUpdateDto: UpdateEntityObjectDto): Promise<ResponseApi<any>> {
        await this.findOneEntityVerificate(id);
        await this.entityRepository.update(id, entityUpdateDto);
        const updatedEntity = await this.entityRepository.findOne({ where: { id } });
        const responseData = this.mapToEntityResponseDto(updatedEntity);
        return new ResponseApi(
            HttpStatus.OK,
            'Entity updated successfully',
            responseData
        );
    }

    // Remove an existing entity
    async removeEntity(id: number): Promise<ResponseApi<null>> {
        await this.findOneEntityVerificate(id);
        await this.entityRepository.delete(id);
        return new ResponseApi(
            HttpStatus.NO_CONTENT,
            `Entity with id ${id} removed successfully`,
            null
        );
    }

    // Custom response for entity object
    private mapToEntityResponseDto(entity: EntityObject): ResponseEntityDto {
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            siret: entity.siret,
            keyLicence: entity.keyLicence,
            website: entity.website,
            createdAt: entity.createdAt
        };
    }

}
