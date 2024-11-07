import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { EntityObject } from '../../entityObject/entity/entityObject.entity';

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

  @ManyToMany(() => EntityObject, (entity) => entity.users)
  entitiesObject: EntityObject[];
}
