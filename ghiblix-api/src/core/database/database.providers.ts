require('dotenv').config();
import { Sequelize } from 'sequelize-typescript';
import { Movie } from 'src/modules/movies/movie.entity';
import { User } from 'src/modules/users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {

      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: process.env.DB_HOST,
        port: 1433,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      sequelize.addModels([
        User,
        Movie
      ]);
      return sequelize;
    },
  },
];
