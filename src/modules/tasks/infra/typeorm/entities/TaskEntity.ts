import { ITaskEntity } from '@modules/tasks/domain/ITaskEntity';
import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('tasks')
export class TaskEntity implements ITaskEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column({ type: 'boolean', default: false })
    concluded: boolean;

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
