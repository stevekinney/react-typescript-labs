import qs from 'qs';
import type { ClientError, HttpError, ParseError } from './types';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function handleJson<T>(res: Response): Promise<T> {
  const text = await res.text();
  if (!res.ok) {
    const err: HttpError = {
      kind: 'http',
      status: res.status,
      statusText: res.statusText,
      url: res.url,
      bodyText: text || undefined,
    };
    throw err;
  }
  try {
    return text ? (JSON.parse(text) as T) : (undefined as unknown as T);
  } catch (e) {
    const err: ParseError = { kind: 'parse', message: (e as Error).message };
    throw err;
  }
}

export async function fetchData<T>(url: string, init?: RequestInit): Promise<T> {
  try {
    const res = await fetch(url, init);
    return handleJson<T>(res);
  } catch (e) {
    if ((e as ClientError)?.kind) throw e as ClientError;
    throw { kind: 'network', message: (e as Error).message } as ClientError;
  }
}

export type Query = Record<string, unknown> | undefined;

export function withQuery(url: string, q?: Query) {
  if (!q) return url;
  const query = qs.stringify(q, {
    addQueryPrefix: true,
    arrayFormat: 'repeat',
    skipNulls: true,
  });
  return `${url}${query}`;
}
