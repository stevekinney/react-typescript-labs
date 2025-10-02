/**
 * Exercise 3: Pick By Type
 *
 * Create a utility type called `PickByType` that takes a type T and a type U,
 * and returns a new type containing only the properties from T whose values are assignable to U.
 *
 * Example:
 * interface Product {
 *   id: number;
 *   name: string;
 *   price: number;
 *   description: string;
 *   inStock: boolean;
 * }
 *
 * type StringProps = PickByType<Product, string>;
 * // Result: { name: string; description: string }
 *
 * type NumberProps = PickByType<Product, number>;
 * // Result: { id: number; price: number }
 *
 * Hints:
 * - You'll need to use a mapped type with a conditional type
 * - Use `[K in keyof T]` to iterate over keys
 * - Use `T[K] extends U` to check if the property type matches
 * - Use `as` keyword to filter keys (mapped type key remapping)
 * - The syntax is: `{ [K in keyof T as T[K] extends U ? K : never]: T[K] }`
 */

// TODO: Implement PickByType here
export type PickByType<T, U> = unknown;
