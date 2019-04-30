import {
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt
} from "sequelize-typescript";

export interface IToDo {
  text: string;
  isCompleted: boolean;
  uuid: string;
}

@Table({ modelName: "todos" })
export class ToDo extends Model<ToDo> {
  @Column public text!: string;
  @Column public isCompleted!: boolean;
  @Column public uuid!: string;

  @CreatedAt @Column public readonly createdAt!: Date;
  @UpdatedAt @Column public readonly updatedAt!: Date;
}
