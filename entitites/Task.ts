import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  Id!: number;

  @Column({ name: "name" })
  Name: string;

  @Column({ name: "description" })
  Description: string;

  @Column({ name: "status", default: false })
  Status: boolean;

  @Column({ name: "is_active", default: true })
  IsActive: boolean;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "created_by" })
  CreatedBy: User;
}
