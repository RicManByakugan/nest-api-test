import { Module } from '@nestjs/common';
import { UserEntityController } from './user-entity.controller';
import { UserEntityService } from './user-entity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user_entityObject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserEntityController],
  providers: [UserEntityService]
})
export class UserEntityModule {}
