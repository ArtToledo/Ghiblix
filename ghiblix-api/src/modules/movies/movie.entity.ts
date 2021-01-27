import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
  } from 'sequelize-typescript';
  
  @Table({modelName: 'movies', freezeTableName: true, timestamps: false})
  export class Movie extends Model<Movie> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @Column({ field: 'title' })
    title!: string;
  
    @Column({ field: 'actors' })
    actors!: string;
  
    @Column({ field: 'description' })
    description!: string;
    
    @Column({ field: 'producer' })
    producer!: string;
    
    @Column({ field: 'release_date' })
    release_date!: string;
    
    @Column({ field: 'rt_score' })
    rt_score!: string;

    @Column({ field: 'image_url' })
    image_url!: string;

    @Column({ field: 'trailer_url' })
    trailer_url!: string;
  }
  