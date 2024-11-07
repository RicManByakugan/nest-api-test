import { EntityObject } from 'src/entityObject/entity/entityObject.entity';
import { User } from 'src/user/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('user_entities')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userEntities, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => EntityObject, (mainEntity) => mainEntity.userEntities, { onDelete: 'CASCADE' })
  entity: EntityObject;
}
