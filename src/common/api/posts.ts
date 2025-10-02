import type { PageQuery, Post } from './types';
import type { PostsRoute, PostRoute, PostCommentsRoute } from './routes';
import { get, post, put, patch, del } from './low-level';

export type CreatePostBody = Pick<Post, 'title' | 'body' | 'userId'>;

export async function listPosts(q?: PageQuery) {
  return get<PostsRoute>('/posts', { q });
}

export async function getPost(id: number) {
  return get<PostRoute>(`/posts/${id}` as PostRoute);
}

export async function createPost(body: CreatePostBody) {
  return post<PostsRoute>('/posts', body);
}

export async function updatePost(id: number, body: Post) {
  return put<PostRoute>(`/posts/${id}` as PostRoute, body);
}

export async function patchPost(id: number, body: Partial<Post>) {
  return patch<PostRoute>(`/posts/${id}` as PostRoute, body);
}

export async function removePost(id: number) {
  return del<PostRoute>(`/posts/${id}` as PostRoute);
}

export async function listCommentsForPost(postId: number, q?: PageQuery) {
  return get<PostCommentsRoute>(`/posts/${postId}/comments` as PostCommentsRoute, { q });
}
