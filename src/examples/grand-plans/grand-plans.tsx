import { Container } from '$/common/components/container';
import { useEffect, useState } from 'react';
import { allPlans, createPlan } from './api';
import { CreateGrandPlanForm } from './create-grand-plan';
import { GrandPlan } from './plan';
import type { Plan } from './types';

export const GrandPlans = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  const handleSubmit = async (title: string) => {
    const plan = await createPlan(title);
    setPlans((plans) => [...plans, plan]);
  };

  const handleChange = (updatedPlan: Plan) => {
    setPlans((plans) => plans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan)));
  };

  useEffect(() => {
    allPlans().then((data) => setPlans(data));
  }, []);

  return (
    <Container className="space-y-4">
      <CreateGrandPlanForm onSubmit={handleSubmit} />
      <ul className="flex flex-col gap-4">
        {plans.map((plan) => (
          <GrandPlan key={plan.id} {...plan} onChange={handleChange} />
        ))}
      </ul>
    </Container>
  );
};
