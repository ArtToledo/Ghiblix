require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule} from '@nestjs/passport';

import { UsersModule } from 'src/modules/users/users.module';
import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local.strategy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './shared/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.KEY_TOKEN,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    AuthController
  ],
  providers: [
     
    AuthService, 
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [
    AuthService
  ]
})
export class AuthModule {}
