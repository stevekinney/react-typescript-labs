/**
 * Exercise 2: Readonly Properties
 *
 * Create a utility type called `MakeReadonly` that takes a type T and a union of keys K,
 * and makes only those specific properties readonly while keeping the rest mutable.
 *
 * Example:
 * interface Config {
 *   apiUrl: string;
 *   timeout: number;
 *   retries: number;
 *   debug: boolean;
 * }
 *
 * type ConfigWithReadonlyUrl = MakeReadonly<Config, 'apiUrl'>;
 * // Result: { readonly apiUrl: string; timeout: number; retries: number; debug: boolean }
 *
 * Hints:
 * - Similar structure to MakeOptional, but use `Readonly` instead of `Partial`
 * - You'll need `Omit` to remove the keys to make readonly
 * - You'll need `Pick` and `Readonly` to make selected properties readonly
 * - Use intersection types (&) to combine them back together
 */

// TODO: Implement MakeReadonly here
export type MakeReadonly<T, K extends keyof T> = unknown;
