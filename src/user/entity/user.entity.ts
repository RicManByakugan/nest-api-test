import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { EntityObject } from '../../entityObject/entity/entityObject.entity';
import { UserEntity } from 'src/user-entity/entity/user_entityObject.entity';

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 2 })
  language: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 250 })
  password: string;

  @Column({ type: 'datetime' })
  lastLogin: Date;

  @Column({ 
    update: true,
    type: 'datetime' 
  })
  createdAt: Date;

  @OneToMany(() => UserEntity, (userEntity) => userEntity.user)
  userEntities: UserEntity[];

}
