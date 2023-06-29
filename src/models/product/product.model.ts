import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { Rating } from "./rating.model";

@Table({
  tableName: "product",
  timestamps: true,
  version: true,
})
export class Product extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @Column(DataType.STRING)
  title!: string;

  @Column(DataType.BIGINT)
  price!: number;

  @Column(DataType.STRING)
  description!: string;

  @Column(DataType.STRING)
  image!: string;

  @ForeignKey(() => Rating)
  ratingId!: number;

  @BelongsTo(() => Rating, { onDelete: "cascade", foreignKey: "id" })
  rating!: Rating;

  @CreatedAt
  creationDate: Date | undefined;

  @UpdatedAt
  updatedOn: Date | undefined;
}
