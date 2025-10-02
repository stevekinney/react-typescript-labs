import type { PageQuery, User } from './types';
import type {
  UsersRoute,
  UserRoute,
  UserAlbumsRoute,
  UserTodosRoute,
  UserPostsRoute,
} from './routes';
import { get, post, put, patch, del } from './low-level';

export type CreateUserBody = Omit<User, 'id'>;

export async function listUsers(q?: PageQuery) {
  return get<UsersRoute>('/users', { q });
}

export async function getUser(id: number) {
  return get<UserRoute>(`/users/${id}` as UserRoute);
}

export async function createUser(body: CreateUserBody) {
  return post<UsersRoute>('/users', body);
}

export async function updateUser(id: number, body: User) {
  return put<UserRoute>(`/users/${id}` as UserRoute, body);
}

export async function patchUser(id: number, body: Partial<User>) {
  return patch<UserRoute>(`/users/${id}` as UserRoute, body);
}

export async function removeUser(id: number) {
  return del<UserRoute>(`/users/${id}` as UserRoute);
}

export async function listAlbumsForUser(userId: number, q?: PageQuery) {
  return get<UserAlbumsRoute>(`/users/${userId}/albums` as UserAlbumsRoute, { q });
}

export async function listTodosForUser(userId: number, q?: PageQuery) {
  return get<UserTodosRoute>(`/users/${userId}/todos` as UserTodosRoute, { q });
}

export async function listPostsForUser(userId: number, q?: PageQuery) {
  return get<UserPostsRoute>(`/users/${userId}/posts` as UserPostsRoute, { q });
}
