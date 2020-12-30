import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { PlansModule } from './modules/plans/plans.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    PlansModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
