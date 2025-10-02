/**
 * Exercise 4: Omit By Type (Bonus Challenge!)
 *
 * Create a utility type called `OmitByType` that takes a type T and a type U,
 * and returns a new type with all properties removed whose values are assignable to U.
 *
 * This is the opposite of PickByType!
 *
 * Example:
 * interface ApiResponse {
 *   id: number;
 *   name: string;
 *   errors: string[];
 *   timestamp: number;
 *   success: boolean;
 * }
 *
 * type WithoutNumbers = OmitByType<ApiResponse, number>;
 * // Result: { name: string; errors: string[]; success: boolean }
 *
 * Hints:
 * - Very similar to PickByType, but flip the conditional
 * - Instead of `T[K] extends U ? K : never`, use `T[K] extends U ? never : K`
 * - This will keep properties that DON'T match the type U
 */

export type OmitByType<T, U> = unknown;
