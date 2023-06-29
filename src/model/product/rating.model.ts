import {
  Column,
  DataType,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Product } from "./product.model";

@Table({
  tableName: "rating",
  timestamps: true,
  version: true,
})
export class Rating extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @Column(DataType.FLOAT)
  rate!: number;

  @Column(DataType.INTEGER)
  count!: number;

  @HasOne(() => Product)
  product!: Product;
}
