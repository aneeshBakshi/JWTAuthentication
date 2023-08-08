import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  Id!: number;

  @Column({ name: "username", nullable: false })
  Username: string;

  @Column({ name: "email", nullable: false })
  Email: string;

  @Column({ name: "password", length: 250, nullable: false })
  Password: string;

  @Column({ name: "is_active", default: true })
  IsActive: boolean;
}
