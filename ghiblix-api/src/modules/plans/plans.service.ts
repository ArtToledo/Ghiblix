import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Plan } from './plan.entity';

@Injectable()
export class PlansService {
    constructor(
        @Inject('PLAN_REPOSITORY') private plansRepository: typeof Plan
    ){}

    async findAll(): Promise<Plan[]> {
        return await this.plansRepository.findAll<Plan>();
    }


    async getById(id: number): Promise<Plan> {
        return await this.plansRepository.findByPk(id);
    }

    async update(plan: Plan, id: number): Promise<Plan> {

        try {
            const exists = await this.plansRepository.findOne({where: { id }});

            if(!exists)
                throw new NotFoundException();

            else {
                await this.plansRepository.update(plan, { where: { id } });
                return this.getById(id);
            }

        } catch (error) {
            throw error;
        }       
    }

}
