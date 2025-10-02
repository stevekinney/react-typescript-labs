export type Brand<K, T> = K & { __brand: T };

export type Id = Brand<number, 'Id'>;

export type Post = {
  userId: Id;
  id: Id;
  title: string;
  body: string;
};

export type Comment = {
  postId: Id;
  id: Id;
  name: string;
  email: string;
  body: string;
};

export type Album = {
  userId: Id;
  id: Id;
  title: string;
};

export type Photo = {
  albumId: Id;
  id: Id;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Todo = {
  userId: Id;
  id: Id;
  title: string;
  completed: boolean;
};

export type User = {
  id: Id;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// Shared query helpers (JSONPlaceholder supports simple filters)
export type ListQuery = Record<string, string | number | boolean | undefined>;
export type PageQuery = { _page?: number; _limit?: number } & ListQuery;

export type FetchInput = {
  signal?: AbortSignal;
  /** additional fetch init (headers, credentials, etc.) */
  init?: Omit<RequestInit, 'method' | 'body' | 'signal'>;
};

// Minimal error model you can exhaustively check
export type HttpError = {
  kind: 'http';
  status: number;
  statusText: string;
  url: string;
  bodyText?: string;
};

export type NetworkError = {
  kind: 'network';
  message: string;
};

export type ParseError = {
  kind: 'parse';
  message: string;
};

export type ClientError = HttpError | NetworkError | ParseError;

// Convenience guard for consumer error handling
export function isClientError(e: unknown): e is ClientError {
  return !!e && typeof e === 'object' && 'kind' in (e as Record<string, unknown>);
}
