import type { Album, PageQuery } from './types';
import type { AlbumsRoute, AlbumRoute, AlbumPhotosRoute } from './routes';
import { get, post, put, patch, del } from './low-level';

export type CreateAlbumBody = Omit<Album, 'id'>;

export async function listAlbums(q?: PageQuery) {
  return get<AlbumsRoute>('/albums', { q });
}

export async function getAlbum(id: number) {
  return get<AlbumRoute>(`/albums/${id}` as AlbumRoute);
}

export async function createAlbum(body: CreateAlbumBody) {
  return post<AlbumsRoute>('/albums', body);
}

export async function updateAlbum(id: number, body: Album) {
  return put<AlbumRoute>(`/albums/${id}` as AlbumRoute, body);
}

export async function patchAlbum(id: number, body: Partial<Album>) {
  return patch<AlbumRoute>(`/albums/${id}` as AlbumRoute, body);
}

export async function removeAlbum(id: number) {
  return del<AlbumRoute>(`/albums/${id}` as AlbumRoute);
}

export async function listPhotosForAlbum(albumId: number, q?: PageQuery) {
  return get<AlbumPhotosRoute>(`/albums/${albumId}/photos` as AlbumPhotosRoute, { q });
}
