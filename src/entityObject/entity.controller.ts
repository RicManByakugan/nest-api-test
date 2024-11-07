import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityObject } from './entity/entityObject.entity';
import { ResponseApi } from 'src/shared/response/ResponseApi';
import { CreateEntityObjectDto } from './dto/create.entity.dto';
import { UpdateEntityObjectDto } from './dto/update.entity.dto';
import { ResponseEntityDto } from './dto/response.entity.dto';

@Controller('entity')
export class EntityController {

    constructor(
        private entityService: EntityService,
    ){}

    // Find all entities
    @Get()
    async findAll(): Promise<ResponseApi<ResponseEntityDto[]>> {
        return this.entityService.findAllEntity();
    }

    // Create a new entity
    @Post('create')
    async create(@Body() entityDto: CreateEntityObjectDto): Promise<ResponseApi<ResponseEntityDto>> {
        return this.entityService.createEntity(entityDto);
    }

    // Update an existing entity
    @Patch('update/:id')
    async update(@Param('id') id: number, @Body() entity: UpdateEntityObjectDto): Promise<ResponseApi<EntityObject>> {
        return this.entityService.updateEntity(id, entity);
    }

    // Update all fields in an existing entity
    @Put('update-all-fields/:id')
    async updateAllFields(@Param('id') id: number, @Body() entity: UpdateEntityObjectDto): Promise<ResponseApi<EntityObject>> {
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
     ): Promise<ResponseApi<ResponseEntityDto>> {
         return this.entityService.findOneEntity(id);
     }
}
