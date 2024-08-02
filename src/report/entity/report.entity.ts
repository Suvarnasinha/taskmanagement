
import { Task } from "src/task/entity/task.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'report'})
export class Report{
  @PrimaryGeneratedColumn()
  reportid: number;
  @Column({name:'task_id'})
  taskid:number;
  @Column()
  dueDate:Date;
  @Column()
  filepath:string;
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date;
  @OneToOne(()=>Task,(task)=>task.report)
  @JoinColumn({name:'task_id'})
  task:Task[]
}