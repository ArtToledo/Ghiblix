import { Module } from '@nestjs/common';
import { PlansController } from './plans.controller';
import { plansProviders } from './plans.providers';
import { PlansService } from './plans.service';

@Module({
  controllers: [PlansController],
  providers: [PlansService, ...plansProviders],
  exports: [PlansService, ...plansProviders]
})
export class PlansModule {}
