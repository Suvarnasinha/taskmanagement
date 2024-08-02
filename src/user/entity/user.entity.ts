import { Task } from "src/task/entity/task.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'user'})
export class User{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name:string;
  @Column()
  email:string;
  @Column()
  password:string
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date;

  @OneToMany(()=>Task,(task)=>task.user)
  task:Task[]
}