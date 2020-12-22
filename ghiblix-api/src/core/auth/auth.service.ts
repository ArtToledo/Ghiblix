import { Injectable } from '@nestjs/common';
import { UsersService } from '../../modules/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}
}
