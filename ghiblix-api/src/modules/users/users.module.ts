import { Module } from '@nestjs/common';
import { EmailService } from 'src/shared/email/email.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, ...usersProviders, EmailService],
  controllers: [UsersController],
  exports: [UsersService, ...usersProviders]
})
export class UsersModule {}
