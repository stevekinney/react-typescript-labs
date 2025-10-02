import type { PageQuery, Photo } from './types';
import type { PhotosRoute, PhotoRoute } from './routes';
import { get, post, put, patch, del } from './low-level';

export type CreatePhotoBody = Omit<Photo, 'id'>;

export async function listPhotos(q?: PageQuery) {
  return get<PhotosRoute>('/photos', { q });
}

export async function getPhoto(id: number) {
  return get<PhotoRoute>(`/photos/${id}` as PhotoRoute);
}

export async function createPhoto(body: CreatePhotoBody) {
  return post<PhotosRoute>('/photos', body);
}

export async function updatePhoto(id: number, body: Photo) {
  return put<PhotoRoute>(`/photos/${id}` as PhotoRoute, body);
}

export async function patchPhoto(id: number, body: Partial<Photo>) {
  return patch<PhotoRoute>(`/photos/${id}` as PhotoRoute, body);
}

export async function removePhoto(id: number) {
  return del<PhotoRoute>(`/photos/${id}` as PhotoRoute);
}
