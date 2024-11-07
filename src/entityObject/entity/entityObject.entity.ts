import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { UserEntity } from 'src/user-entity/entity/user_entityObject.entity';

@Entity("entity")
export class EntityObject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  description: string;

  @Column({ length: 20 })
  siret: string;

  @Column({ length: 250 })
  keyLicence: string;

  @Column({ length: 100 })
  website: string;

  @Column({ type: 'datetime' })
  createdAt: Date;

  @OneToMany(() => UserEntity, (userEntity) => userEntity.user)
  userEntities: UserEntity[];
}
