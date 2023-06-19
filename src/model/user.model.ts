import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";

@Table({
  tableName: "user",
  timestamps: true,
  version: true,
})
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @Column(DataType.STRING)
  firstname!: string;

  @Column(DataType.STRING)
  lastname!: string;

  @Column(DataType.DATE)
  birthday!: Date;

  @CreatedAt
  creationDate: Date | undefined;

  @UpdatedAt
  updatedOn: Date | undefined;

  @DeletedAt
  deletionDate: Date | undefined;
}
