// Barrel export for lightweight JSONPlaceholder wrapper

export * from './types';
export * from './routes';

// low-level fetch helpers
export { BASE_URL, fetchData as doFetch } from './http';
export * from './low-level';

// resources
export * from './posts';
export * from './comments';
export * from './albums';
export * from './photos';
export * from './todos';
export * from './users';
