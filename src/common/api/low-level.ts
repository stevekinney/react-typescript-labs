import type {
  Album,
  Comment,
  FetchInput,
  PageQuery,
  ListQuery,
  Photo,
  Post,
  Todo,
  User,
} from './types';
import type {
  AlbumsRoute,
  AlbumRoute,
  AlbumPhotosRoute,
  AnyRoute,
  CommentsRoute,
  CommentRoute,
  ItemRoute,
  PhotosRoute,
  PhotoRoute,
  PostCommentsRoute,
  PostsRoute,
  PostRoute,
  TodoRoute,
  TodosRoute,
  UserAlbumsRoute,
  UserPostsRoute,
  UserRoute,
  UsersRoute,
  UserTodosRoute,
} from './routes';
import { BASE_URL, fetchData, withQuery } from './http';

// Route → payload maps for cleaner lookup types
type GetRouteMap =
  | { route: PostsRoute; res: Post[] }
  | { route: CommentsRoute; res: Comment[] }
  | { route: AlbumsRoute; res: Album[] }
  | { route: PhotosRoute; res: Photo[] }
  | { route: TodosRoute; res: Todo[] }
  | { route: UsersRoute; res: User[] }
  | { route: PostRoute; res: Post }
  | { route: CommentRoute; res: Comment }
  | { route: AlbumRoute; res: Album }
  | { route: PhotoRoute; res: Photo }
  | { route: TodoRoute; res: Todo }
  | { route: UserRoute; res: User }
  | { route: PostCommentsRoute; res: Comment[] }
  | { route: AlbumPhotosRoute; res: Photo[] }
  | { route: UserAlbumsRoute; res: Album[] }
  | { route: UserTodosRoute; res: Todo[] }
  | { route: UserPostsRoute; res: Post[] };

type PostRouteMap =
  | { route: PostsRoute; body: Pick<Post, 'title' | 'body' | 'userId'>; res: Post }
  | { route: CommentsRoute; body: Omit<Comment, 'id'>; res: Comment }
  | { route: AlbumsRoute; body: Omit<Album, 'id'>; res: Album }
  | { route: PhotosRoute; body: Omit<Photo, 'id'>; res: Photo }
  | { route: TodosRoute; body: Omit<Todo, 'id'>; res: Todo }
  | { route: UsersRoute; body: Omit<User, 'id'>; res: User };

type PutRouteMap =
  | { route: PostRoute; body: Post; res: Post }
  | { route: CommentRoute; body: Comment; res: Comment }
  | { route: AlbumRoute; body: Album; res: Album }
  | { route: PhotoRoute; body: Photo; res: Photo }
  | { route: TodoRoute; body: Todo; res: Todo }
  | { route: UserRoute; body: User; res: User };

type PatchRouteMap =
  | { route: PostRoute; body: Partial<Post>; res: Post }
  | { route: CommentRoute; body: Partial<Comment>; res: Comment }
  | { route: AlbumRoute; body: Partial<Album>; res: Album }
  | { route: PhotoRoute; body: Partial<Photo>; res: Photo }
  | { route: TodoRoute; body: Partial<Todo>; res: Todo }
  | { route: UserRoute; body: Partial<User>; res: User };

type RouteOf<M> = M extends { route: infer R } ? R : never;
type BodyOf<M, P> = Extract<M, { route: P }> extends { body: infer B } ? B : never;
type ResOf<M, P> = Extract<M, { route: P }> extends { res: infer R } ? R : unknown;

export type CreatableRoute = RouteOf<PostRouteMap>;

export type GetResponse<P> = ResOf<GetRouteMap, P>;
export type PostBody<P> = BodyOf<PostRouteMap, P>;
export type PostResponse<P> = ResOf<PostRouteMap, P>;
export type PutBody<P> = BodyOf<PutRouteMap, P>;
export type PatchBody<P> = BodyOf<PatchRouteMap, P>;
export type MutationResponse<P> = ResOf<PutRouteMap | PatchRouteMap, P>;

type QueryOpt = { q?: PageQuery | ListQuery } & FetchInput;

export function url(path: AnyRoute) {
  return `${BASE_URL}${path}`;
}

export async function get<P extends AnyRoute>(path: P, opt?: QueryOpt): Promise<GetResponse<P>> {
  const target = withQuery(url(path), opt?.q);
  return fetchData<GetResponse<P>>(target, {
    method: 'GET',
    signal: opt?.signal,
    ...opt?.init,
  });
}

export async function post<P extends CreatableRoute>(
  path: P,
  body: PostBody<P>,
  opt?: FetchInput,
): Promise<PostResponse<P>> {
  const target = url(path);
  return fetchData<PostResponse<P>>(target, {
    method: 'POST',
    body: JSON.stringify(body as object),
    headers: { 'Content-Type': 'application/json; charset=UTF-8', ...opt?.init?.headers },
    signal: opt?.signal,
    ...opt?.init,
  });
}

export async function put<P extends ItemRoute>(
  path: P,
  body: PutBody<P>,
  opt?: FetchInput,
): Promise<MutationResponse<P>> {
  const target = url(path);
  return fetchData<MutationResponse<P>>(target, {
    method: 'PUT',
    body: JSON.stringify(body as object),
    headers: { 'Content-Type': 'application/json; charset=UTF-8', ...opt?.init?.headers },
    signal: opt?.signal,
    ...opt?.init,
  });
}

export async function patch<P extends ItemRoute>(
  path: P,
  body: PatchBody<P>,
  opt?: FetchInput,
): Promise<MutationResponse<P>> {
  const target = url(path);
  return fetchData<MutationResponse<P>>(target, {
    method: 'PATCH',
    body: JSON.stringify(body as object),
    headers: { 'Content-Type': 'application/json; charset=UTF-8', ...opt?.init?.headers },
    signal: opt?.signal,
    ...opt?.init,
  });
}

export async function del<P extends ItemRoute>(path: P, opt?: FetchInput): Promise<void> {
  const target = url(path);
  await fetchData<unknown>(target, {
    method: 'DELETE',
    signal: opt?.signal,
    ...opt?.init,
  });
}

// Convenience aliases that feel familiar
export { del as delete };

// Raw helper for custom endpoints
export async function raw<T = unknown>(path: string, init?: RequestInit): Promise<T> {
  const absolute = path.startsWith('http') ? path : `${BASE_URL}/${path.replace(/^\/+/, '')}`;
  return fetchData<T>(absolute, init);
}
