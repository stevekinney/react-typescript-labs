import { createContext, useState, type PropsWithChildren } from 'react';
import * as Api from './api';
import type { Plan } from './types';

type PlansContextType = {
  plans: Plan[];
  createPlan: (title: string) => Promise<void>;
  updatePlan: (id: number, updatedPlan: Partial<Omit<Plan, 'id'>>) => Promise<void>;
  removePlan: (id: number) => Promise<void>;
};

const PlansContext = createContext<PlansContextType | undefined>(undefined);

export const PlansProvider = ({ children }: PropsWithChildren) => {
  const [plans, setPlans] = useState<Plan[]>([]);

  const createPlan = async (title: string) => {
    const plan = await Api.createPlan(title);
    setPlans((prevPlans) => [...prevPlans, plan]);
  };

  // Improvement: Can we type updatedPlan better?
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatePlan = async (id: number, updatedPlan: any) => {
    const plan = await Api.updatePlan(id, updatedPlan);
    setPlans((prevPlans) => prevPlans.map((p) => (p.id === plan.id ? plan : p)));
  };

  const removePlan = async (id: number) => {
    const deleted = await Api.deletePlan(id);
    if (!deleted) return;
    setPlans((prevPlans) => prevPlans.filter((p) => p.id !== id));
  };

  return (
    <PlansContext.Provider value={{ plans, createPlan, updatePlan, removePlan }}>
      {children}
    </PlansContext.Provider>
  );
};
