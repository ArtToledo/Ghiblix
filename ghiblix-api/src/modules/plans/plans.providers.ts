import { Plan } from './plan.entity';

export const plansProviders = [{
    provide: 'PLAN_REPOSITORY',
    useValue: Plan,
}];