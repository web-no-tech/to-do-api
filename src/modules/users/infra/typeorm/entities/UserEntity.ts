import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

import { IUserEntity } from '@modules/users/domain/IUserEntity';

@Entity('users')
export class UserEntity implements IUserEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column()
    email: string;

  @Column()
    password: string;

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
