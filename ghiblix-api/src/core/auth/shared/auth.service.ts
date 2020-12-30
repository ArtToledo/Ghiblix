import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createCipheriv, randomBytes } from 'crypto';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../../../modules/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(userEmail: string, userPassword: string){
        const user = await this.userService.getByEmail(userEmail);

        const iv = randomBytes(16);
        const cipher = createCipheriv('aes-256-ctr', 'secretKey', iv);

        const encryptedPassword = Buffer.concat([
        cipher.update(userPassword),
        cipher.final(),
        ]);

        const str = encryptedPassword.toString('utf8', 0, encryptedPassword.length);

        if(user) {
            const isMatch = await bcrypt.compare(user.password, str);

            if(isMatch){
                const { id, email } = user;
                return { id, email };
            }

        }

        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
