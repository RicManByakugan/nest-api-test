import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { EntityObject } from './entity/entityObject.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseApi } from 'src/shared/response/ResponseApi';
import { AddEntityObjectDto } from './dto/entityAdd.dto';
import { UpdateEntityObjectDto } from './dto/entityUpdate.dto';

@Injectable()
export class EntityService {
    constructor(
        @InjectRepository(EntityObject)
        private entityRepository: Repository<EntityObject>,
    ) {}

    // Find all enitities
    async findAllEntity(): Promise<ResponseApi<EntityObject[]>> {
        const entity = await this.entityRepository.find();
        return new ResponseApi(
            HttpStatus.OK,
            'Entity retrieved successfully',
            entity
        );
    }

    // Find one entity by id
    async findOneEntity(id: number): Promise<ResponseApi<EntityObject>> {
        const entity = await this.entityRepository.findOne({ where: { id } });
        if (!entity) {
            throw new NotFoundException(`Entity with id ${id} not found`);
        }
        return new ResponseApi(
            HttpStatus.OK,
            `Entity with id ${id} retrieved successfully`,
            entity
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
    async createEntity(entityDto: AddEntityObjectDto): Promise<ResponseApi<EntityObject>> {
        let entity = new EntityObject();
        entity = { ...entity, ...entityDto };
        entity.createdAt = new Date();
        const newEntity = await this.entityRepository.save(entity);
        return new ResponseApi(
            HttpStatus.CREATED,
            'Entity created successfully',
            newEntity
        );
    }

    // Update an existing entity
    async updateEntity(id: number, entityUpdateDto: UpdateEntityObjectDto): Promise<ResponseApi<any>> {
        await this.findOneEntityVerificate(id);
        await this.entityRepository.update(id, entityUpdateDto);
        const updatedEntity = await this.entityRepository.findOne({ where: { id } });
        return new ResponseApi(
            HttpStatus.OK,
            'Entity updated successfully',
            updatedEntity
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

}
