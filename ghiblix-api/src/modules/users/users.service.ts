import { Inject, Injectable, NotFoundException, NotAcceptableException } from '@nestjs/common';
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
    
    async create(user: User): Promise<User> {

        try {

            const email = user.email;
            const exists = await this.usersRepository.findOne({where: {email: email}});

            if(exists)
                throw new NotAcceptableException();

        } catch (error) {
            throw error;
        }
        return this.usersRepository.create(user);
    }

    async update(id:number, user: User): Promise<User> {

        try {

            const exists = await this.usersRepository.findOne({where: {id: id}});

            if(!exists)
                throw new NotFoundException();

            else {
                await this.usersRepository.update(user, { where: {id: id} });
                return this.getById(id);
            }
            
        } catch(error) {
            throw error;                
        }
    }

    async delete(id: number) {
        try {
            const exists = await this.usersRepository.findOne({where: {id: id}});

            if(!exists)
                throw new NotFoundException();
            else 
                this.usersRepository.destroy({where: {id: id}});

        } catch (error) {
            throw error;
        }
        
    }
}
