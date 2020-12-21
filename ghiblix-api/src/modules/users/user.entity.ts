import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({modelName: 'users', freezeTableName: true, timestamps: false})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: string;

  @Column({ field: 'email' })
  email!: string;

  @Column({ field: 'password' })
  password!: string;
}
