import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USER_REPOSITORY') private usersRepository: typeof User
    ){}

    findAll(): Promise<User[]> {
        return this.usersRepository.findAll<User>();
    }
    
    getById(id: number): Promise<User> {
        return this.usersRepository.findByPk(id);
    }
    
    create(user: User): Promise<User> {
        return this.usersRepository.create(user);
    }

    update(id:number, user: User): Promise<User> {
        this.usersRepository.update({ user }, { where: {id: id} });
        return this.getById(id);
    }

    async delete(id: number) {

        this.usersRepository.destroy({where: {id: id}});
    }
}
