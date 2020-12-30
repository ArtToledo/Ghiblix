import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { Plan } from './plan.entity';
import { PlansService } from './plans.service';

@Controller('plans')
export class PlansController {

  constructor(
    private plansService: PlansService
  ) {}

  @Get()
  async getAll() {
    return await this.plansService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() plan: Plan): Promise<Plan> {
    return await this.plansService.update(plan, id);
  }
}
