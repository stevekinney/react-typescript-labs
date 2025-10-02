import { Card } from '$/common/components/card';
import { Checkbox } from '$/common/components/checkbox';

import { updatePlan } from './api';
import type { Plan } from './types';

export interface PlanProps extends Plan {
  onChange: (plan: Plan) => void;
}

export const GrandPlan = ({ id, title, completed, onChange }: PlanProps) => {
  // Improvement: Find a way to avoid using `any` here!
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = async (event: any) => {
    const plan = await updatePlan(id, { completed: event.target.checked });
    onChange(plan);
  };

  return (
    <Card as="li" className="flex items-center justify-between">
      <h3>{title}</h3>
      <Checkbox label="Completed" checked={completed} onChange={handleChange} />
    </Card>
  );
};
