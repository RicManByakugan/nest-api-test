import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityObject } from './entity/entityObject.entity';
import { ResponseApi } from 'src/shared/response/ResponseApi';
import { AddEntityObjectDto } from './dto/entityAdd.dto';
import { UpdateEntityObjectDto } from './dto/entityUpdate.dto';

@Controller('entity')
export class EntityController {

    constructor(
        private entityService: EntityService,
    ){}

    // Find all entities
    @Get()
    async findAll(): Promise<ResponseApi<EntityObject[]>> {
        return this.entityService.findAllEntity();
    }

    // Create a new entity
    @Post('create')
    async create(@Body() entityDto: AddEntityObjectDto): Promise<ResponseApi<EntityObject>> {
        return this.entityService.createEntity(entityDto);
    }

    // Update an existing entity
    @Patch('update/:id')
    async update(@Param('id') id: number, @Body() entity: UpdateEntityObjectDto): Promise<ResponseApi<EntityObject>> {
        return this.entityService.updateEntity(id, entity);
    }

    // Remove an existing entity
    // We can use soft but now just delete physically
    @Delete('delete/:id')
    async remove(@Param('id') id: number): Promise<ResponseApi<EntityObject>> {
        return await this.entityService.removeEntity(id);
    }

     // Find a entity by id
     @Get(':id')
     async findOne(
         @Param('id', ParseIntPipe) id: number
     ): Promise<ResponseApi<EntityObject>> {
         return this.entityService.findOneEntity(id);
     }
}
