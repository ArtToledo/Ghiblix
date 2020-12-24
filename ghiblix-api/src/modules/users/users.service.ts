import { Inject, Injectable } from '@nestjs/common';
import { exception } from 'console';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USER_REPOSITORY') private usersRepository: typeof User
    ){}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.findAll<User>();
    }
    
    async getById(id: number): Promise<User> {
        return await this.usersRepository.findByPk(id);
    }
    
    async getByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne<User>({where: { email } });
    }
    
    create(user: User): Promise<User> {
        return this.usersRepository.create(user);
    }

    async update(id:number, user: User): Promise<User> {

        try {
            if(!this.usersRepository.findByPk(id))
                throw 'ID '

            else {
                await this.usersRepository.update(user , { where: {id: id} });
                return this.getById(id);
            }
            
        } catch(err) {

        }
    }

    async delete(id: number) {
        this.usersRepository.destroy({where: {id: id}});
    }
}
