import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule ],
  controllers: [],
  providers: [ AuthService ],
})
export class AuthModule {}