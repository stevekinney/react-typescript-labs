import type { PageQuery, Todo } from './types';
import type { TodoRoute, TodosRoute } from './routes';
import { get, post, put, patch, del } from './low-level';

export type CreateTodoBody = Omit<Todo, 'id'>;

export async function listTodos(q?: PageQuery) {
  return get<TodosRoute>('/todos', { q });
}

export async function getTodo(id: number) {
  return get<TodoRoute>(`/todos/${id}` as TodoRoute);
}

export async function createTodo(body: CreateTodoBody) {
  return post<TodosRoute>('/todos', body);
}

export async function updateTodo(id: number, body: Todo) {
  return put<TodoRoute>(`/todos/${id}` as TodoRoute, body);
}

export async function patchTodo(id: number, body: Partial<Todo>) {
  return patch<TodoRoute>(`/todos/${id}` as TodoRoute, body);
}

export async function removeTodo(id: number) {
  return del<TodoRoute>(`/todos/${id}` as TodoRoute);
}
