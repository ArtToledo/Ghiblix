require('dotenv').config();
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from 'src/modules/users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'Sa_teste1234',
      database: 'testNest',
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        trustServerCertificate: true
      },
      define: {
        timestamps: true
      },
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
