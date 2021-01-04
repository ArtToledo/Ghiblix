import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
<<<<<<< HEAD
import { EmailModule } from './shared/email/email.module';
=======
>>>>>>> developer

@Module({
  imports: [
    DatabaseModule,
<<<<<<< HEAD
    EmailModule,
    UsersModule
=======
    UsersModule,
    AuthModule
>>>>>>> developer
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
