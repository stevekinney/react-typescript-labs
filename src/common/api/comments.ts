import type { Comment, PageQuery } from './types';
import type { CommentsRoute, CommentRoute } from './routes';
import { get, post, put, patch, del } from './low-level';

export type CreateCommentBody = Omit<Comment, 'id'>;

export async function listComments(q?: PageQuery) {
  return get<CommentsRoute>('/comments', { q });
}

export async function getComment(id: number) {
  return get<CommentRoute>(`/comments/${id}` as CommentRoute);
}

export async function createComment(body: CreateCommentBody) {
  return post<CommentsRoute>('/comments', body);
}

export async function updateComment(id: number, body: Comment) {
  return put<CommentRoute>(`/comments/${id}` as CommentRoute, body);
}

export async function patchComment(id: number, body: Partial<Comment>) {
  return patch<CommentRoute>(`/comments/${id}` as CommentRoute, body);
}

export async function removeComment(id: number) {
  return del<CommentRoute>(`/comments/${id}` as CommentRoute);
}
