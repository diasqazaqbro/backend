import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userid: number;
  password: string;
  image: string
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  content: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  img: string;
  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;
  @BelongsTo(() => User)
  author: User;
}
