# Solutions

Here are the solutions to the exercises.

## Exercise 1: Make Optional

```typescript
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
```

- `Omit<T, K>` - Remove the keys we want to make optional
- `Pick<T, K>` - Get only the keys we want to make optional
- `Partial<Pick<T, K>>` - Make those picked keys optional
- `& ` - Combine them back together

## Exercise 2: Readonly Properties

```typescript
export type MakeReadonly<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;
```

- Same structure as `MakeOptional`
- Use `Readonly` instead of `Partial`
- This makes specific properties read-only while keeping others mutable

## Exercise 3: Pick By Type

```typescript
export type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};
```

- `[K in keyof T as ...]` - Iterate over all keys with key remapping
- `T[K] extends U ? K : never` - If the property type matches U, keep the key; otherwise, filter it out with `never`
- `: T[K]` - Keep the original property type

## Exercise 4: Omit By Type

```typescript
export type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};
```

- Almost identical to `PickByType`
- The only difference is the conditional: `T[K] extends U ? never : K`
- This keeps properties that _don't_ match type `U` (opposite of PickByType)
