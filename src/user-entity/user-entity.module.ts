import { Module } from '@nestjs/common';
import { UserEntityController } from './user-entity.controller';
import { UserEntityService } from './user-entity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user_entityObject.entity';
import { User } from 'src/user/entity/user.entity';
import { EntityObject } from 'src/entityObject/entity/entityObject.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]), 
    TypeOrmModule.forFeature([User]), 
    TypeOrmModule.forFeature([EntityObject]), 
  ],
  controllers: [UserEntityController],
  providers: [UserEntityService]
})
export class UserEntityModule {}
