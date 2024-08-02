
import { Report } from "src/report/entity/report.entity";
import { Typeoftask } from "src/typeoftask/entity/typeoftask.entity";
import { User } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'task'})
export class Task{
  @PrimaryGeneratedColumn()
  taskid: number;
  @Column({name:'user_id'})
  userid:number;
  @Column()
  name:string;
  @Column({nullable:true})
  description:string;
  @Column()
  dueDate:Date
  @Column()
  status:string
  @Column({nullable:true})
  media:string
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date;
  @ManyToOne(()=>User,(user)=>user.task)
  @JoinColumn({name:'user_id'})
  user:User
  @OneToOne(()=>Typeoftask,(typeoftask)=>typeoftask.task)
  typeoftask:Typeoftask[]
 @OneToOne(()=>Report,(report)=>report.task)
 report:Report[]
}
