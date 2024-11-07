import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../../user/entity/user.entity';

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

  @ManyToMany(() => User, (user) => user.entities)
  @JoinTable() 
  users: User[];
}
