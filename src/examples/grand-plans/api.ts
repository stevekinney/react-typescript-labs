import type { Plan } from './types';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export async function allPlans() {
  const response = await fetch(`${baseUrl}/todos?userId=1`);
  return response.json();
}

export async function getPlan(id: number) {
  const response = await fetch(`${baseUrl}/todos/${id}`);
  return response.json();
}

export async function createPlan(title: string) {
  const response = await fetch(`${baseUrl}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      completed: false,
    }),
  });
  return response.json();
}

export async function updatePlan(id: number, updates: Partial<Omit<Plan, 'id'>>) {
  const response = await fetch(`${baseUrl}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  return response.json();
}

export async function deletePlan(id: number) {
  const response = await fetch(`${baseUrl}/todos/${id}`, {
    method: 'DELETE',
  });

  return response.ok;
}
