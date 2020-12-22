import { Injectable, Inject } from '@nestjs/common';

import { User } from '../users/user.entity';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_REPOSITORY') private userRepository: typeof User){ }

    async findAll():Promise<User[]>{
        return  this.userRepository.findAll<User>();
    }

    async create(user): Promise<User>{
        return this.userRepository.create(user);
          
    }
}
