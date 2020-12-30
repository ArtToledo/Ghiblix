import { PrimaryKey,AutoIncrement, Column, DataType, Table, Model } from "sequelize-typescript";


@Table({modelName: 'plans', freezeTableName: true, timestamps: false})
export class Plan extends Model<Plan> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({ field: 'name' })
  name!: string;

  @Column({ field: 'profiles_count' })
  profiles_count!: number;

  @Column({ field: 'price' })
  price: number;

}
