import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { EntityObject } from './entity/entityObject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntityObject])],
  controllers: [EntityController],
  providers: [EntityService]
})
export class EntityModule {}
