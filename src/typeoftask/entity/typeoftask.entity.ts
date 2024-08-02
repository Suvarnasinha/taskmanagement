
import { Task } from "src/task/entity/task.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'typeoftask'})
export class Typeoftask{
  @PrimaryGeneratedColumn()
  typeoftaskid: number;
  @Column({name:'task_id'})
  taskid:number;
  @Column({nullable:true})
  typeoftask:string;
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date;
  @OneToOne(()=>Task,(task)=>task.typeoftask)
  @JoinColumn({name:'task_id'})
  task:Task[]
}